'use client'

// import Summernote from "@/components/DotsAdmin/Editor/Summernote"
import api from "@/lib/api"
import {useRouter, useSearchParams} from "next/navigation"
import {useEffect, useState} from "react"
import fileDownLoad from "@/components/useFileDownload";

export default function WhistleblowerPage () {
    const router = useRouter()
    const searchParams = useSearchParams();
    const type : any = searchParams.get('t');
    const [isActive, setActive] = useState<boolean>(false)
    const [data, setData] = useState<any>([])
    async function getDetail () {
        const res = await api.get(`/admin/inquiry/getWhistleblowDetail.php?ID=${type}`)
        if(res.data.Result === 'true') setData(res.data.List[0])
    }
    async function handleChangeStatus (status : string) {
        const formData = new FormData()
        formData.append('ID', type)
        formData.append('wbStatus', status)
        const res = await api.post(`/admin/inquiry/updWhistleBlowStatus.php`, formData)
        if(res.data.result === true) {
            alert('처리유형이 변경되었습니다.');
            getDetail(); setActive(false)
        }else{

        }
    }
    useEffect(()=>{
        if(type && type) getDetail()
    }, [type]);

    return(
        <>
            <div className="contentBox inquiry_common">
                <h3>Inquiry</h3>
                <div className="flexBox">
                    <div>
                        <h4>클린신고</h4>
                    </div>
                    <div className="btnBox">
                        <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
                         <button className="blueBtn">저장하기</button>
                    </div>
                </div>

                <div className="titleBox">
                    <div>
                        {data?.whistleblowStatus === 'R' ?
                            <button className={isActive ? 'red active' : 'red'} onClick={()=>setActive(!isActive)}>
                                접수대기
                            </button> : ''
                        }
                        {data?.whistleblowStatus === 'P' ?
                            <button className={isActive ? 'red active' : 'red'} onClick={()=>setActive(!isActive)}>
                                처리 중
                            </button> : ''
                        }
                        {data?.whistleblowStatus === 'C' ?
                            <button className={isActive ? 'blue active' : 'blue'} onClick={()=>setActive(!isActive)}>
                                처리완료
                            </button> : ''
                        }
                        <div>
                            <span onClick={()=>handleChangeStatus('R')}>접수대기</span>
                            <span onClick={()=>handleChangeStatus('P')}>처리중</span>
                            <span onClick={()=>handleChangeStatus('C')}>처리완료</span>
                        </div>
                    </div>
                    {/*<h5>{data?.whistleblowSubject}</h5>*/}
                </div>

                <div className="inquiry_table">
                    <ul style={{marginTop: 0}}>
                        <li>
                            <div>
                                <span>제보제목</span>
                                <span>{data?.whistleblowSubject}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>신고유형</span>
                                <span>{data?.whistleblowClass}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>이름</span>
                                <span>{data?.whistleblowName ? data?.whistleblowName : '익명'}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>이메일</span>
                                <span>{data?.whistleblowEmail ? data?.whistleblowEmail : '익명'}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>연락처</span>
                                <span>{data?.whistleblowPhone ? data?.whistleblowPhone : '익명'}</span>
                            </div>
                        </li>
                    </ul>

                    <div className="inquiry_details">
                        <span>제보내용</span>
                        <div>
                            {data?.whistleblowContents}
                        </div>
                    </div>

                    <div className="fileName">
                        <span>첨부파일</span>
                        {data?.whistleblowPdsFilename ?
                            <div>
                                <span onClick={()=>fileDownLoad(data?.whistleblowPdsFilename, data?.whistleblowPdsFile)}>{data?.whistleblowPdsFilename}</span>
                            </div>
                            : ''
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
