'use client'
import ListFilter from "@/components/DotsAdmin/List/ListFilter";
import ListSearchBox from "@/components/DotsAdmin/List/ListSearchBox";
import ListSizeBox from "@/components/DotsAdmin/List/ListSizeBox";
import api from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import calculateIndex from "@/components/calculateIndex";
import Paginate from "@/components/DotsAdmin/Paginate/paginate";
import fileDownLoad from "@/components/useFileDownload";


interface Props {
    page : number
    size : number
    keyword : string
    order : string
    column : string
    status : string
    wbtype : string
}

export default function WhistleblowerListPage ({
   page, size, keyword, order, column , wbtype, status
}: Props) {
    const searchParams = useSearchParams();
    const router = useRouter()
    const [data, setData] = useState<any>([])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [totalCount , setTotalCount] = useState<number>(0)
    async function getList () {
        try {
            const response = await api.get(`/admin/inquiry/getWhistleblowList.php?page=${page}&size=${size}&keyword=${keyword}&sortColumn=${column}&sortOrder=${order}&wbClass=${wbtype}&wbStatus=${status}`);
            console.log('response : ', response.data);
            if(response?.data?.Result === "true") {
                setData(response?.data?.List); setTotalCount(response?.data?.totalCnt)
            }else{
                alert(response?.data?.resultMsg)
            }
        }catch {alert('Server Error')}
    }
    useEffect(()=>{
        getList()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, size, keyword, order, column , wbtype, status])



    const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("wbtype", e.target.value || "");
        router.push(`?${newSearchParams.toString()}`);
    };

    const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("status", e.target.value || "");
        router.push(`?${newSearchParams.toString()}`);
    };
    return(
        <>
            <div className="contentBox contactUs">
                <h3>Inquiry</h3>
                <div className="flexBox">
                    <div>
                        <h4>클린신고 리스트</h4>
                    </div>
                </div>

                <div className="toolBox">
                    <div className="left">
                        <div className="selectBox">
                            <ListSizeBox
                                size={size}
                            />
                        </div>

                        <div>

                            <div className="selectBox">
                                <select onChange={handleType} value={searchParams.get("wbtype") || ""} name="" id="">
                                    <option value="" selected>- 전체신고유형 -</option>
                                    <option value="M">금품, 향응수수</option>
                                    <option value="S">횡령 / 유용</option>
                                    <option value="B">입찰비리 / 불공정거래</option>
                                    <option value="A">내부회계관련</option>
                                    <option value="T">배임 / 절도</option>
                                    <option value="H">인권침해</option>
                                    <option value="O">기타</option>
                                </select>
                            </div>

                            <div className="selectBox">
                                <select onChange={handleStatus} value={searchParams.get("status") || ""} name="" id="">
                                    <option value="" selected>- 전체처리상태 -</option>
                                    <option value="R">접수대기</option>
                                    <option value="P">처리중</option>
                                    <option value="C">처리완료</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="right">

                        <ListSearchBox
                            keyword={keyword}
                        />

                    </div>
                </div>

                <div className="tableWrap">
                    <div className="tableType_a">
                        <table>

                            <ListFilter

                            />

                            <tbody>
                            {data?.map((list:any, index:number) => (
                                <tr key={list?.whistleblowId}>
                                    <td>
                                        <span className="readOnly">{calculateIndex(page, size, totalCount, index)}</span>
                                    </td>
                                    <td>
                                        <span className="readOnly">{list?.whistleblowClass}</span>
                                    </td>
                                    <td>
                                        <span className="readOnly">{list?.whistleblowName ? list?.whistleblowName : '익명'}</span>
                                    </td>
                                    <td>
                                        <span className="readOnly">{list?.whistleblowEmail ? list?.whistleblowEmail : '익명'}</span>
                                    </td>
                                    <td>
                                        <span className="readOnly">{list?.whistleblowPhone ? list?.whistleblowPhone : '익명'}</span>
                                    </td>
                                    <td>
                                        <span className="readOnly ellipsis">{list?.whistleblowSubject}</span>
                                    </td>
                                    <td>
                                        <div className="attachmentBox">
                                            {list?.whistleblowPdsFilename ?
                                                <button
                                                    onClick={()=>fileDownLoad(list?.whistleblowPdsFilename, list?.whistleblowPdsFile)}
                                                >
                                                </button>
                                                :
                                                <span className="readOnly none">-</span>
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <span className="readOnly">{list?.whistleblowMdate}</span>
                                    </td>
                                    <td>
                                        <div className="statUsBox">
                                            {list?.whistleblowStatus === 'R' ? <span className="red" onClick={()=>router.push(`/admin/inquiry-management/whistleblower?t=${list?.whistleblowId}`)}>접수대기</span> : ''}
                                            {list?.whistleblowStatus === 'P' ? <span className="blue" onClick={()=>router.push(`/admin/inquiry-management/whistleblower?t=${list?.whistleblowId}`)}>처리 중</span> : ''}
                                            {list?.whistleblowStatus === 'C' ? <span className="gray" onClick={()=>router.push(`/admin/inquiry-management/whistleblower?t=${list?.whistleblowId}`)}>처리완료</span> : ''}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="pagerBox">
                    <Paginate
                        page={page}
                        size={size}
                        totalCount={totalCount}
                    />
                </div>
            </div>
        </>
    )
}
