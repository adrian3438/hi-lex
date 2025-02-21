'use client'

import Summernote from "@/components/DotsAdmin/Editor/Summernote"
import TextBox from "@/components/DotsAdmin/Element/TextBox"
import api from "@/lib/api"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


interface Props {
    id : any
    lang : any
}
export default function EmployeePage ({ id } : Props) {
    const router = useRouter();

    const [data, setData] = useState<any>({
        recruitAffilate: 'H',
        careerClass: 'C',
        occupationClass: 'SM',
        employeementType: 'R',
        recruitProcessStatus: 'O',
        recruitSubject: '',
        recruitTerms: '',
        recruitDescription: '',
    })

    async function getDetail() {
        try {
            const response = await api.get(`/admin/recruit/getRecruitDetail.php?ID=${id}`);
            if(response?.data?.result) {
                setData(response?.data?.list[0]);
            }
        } catch {
            alert('상세정보 로드 실패');
        }
    }

    useEffect(() => {
        if(id) {
            getDetail();
        }
    }, [id]);


    function handleSelect (e:React.ChangeEvent<HTMLSelectElement>) {
        const {name , value} = e.target;
        setData((prev:any) => ({...prev, [name] : value}))
    }

    async function save () {
        if (!data?.recruitSubject) {
            alert('채용 공고명은 필수 값입니다.');
            return;
        } else if (!data?.recruitTerms) {
            alert('채용 기간은 필수 값입니다.');
            return;
        } else if (!data?.recruitDescription) {
            alert('공고내용은 필수 값입니다.');
            return;
        }

        const formData = new FormData();
        formData.append('recruitAffilate', data?.recruitAffilate);
        formData.append('careerClass', data?.careerClass);
        formData.append('occupationClass', data?.occupationClass);
        formData.append('employeementType', data?.employeementType);
        formData.append('processStatus', data?.recruitProcessStatus);
        formData.append('recruitSubject', data?.recruitSubject);
        formData.append('recruitTerms', data?.recruitTerms);
        formData.append('recruitDescription', data?.recruitDescription);

        try {
            if(!id) {
                const response = await api.post('/admin/recruit/setRecruit.php', formData);
                if (response?.data.result) {
                    alert(response?.data.resultMsg);
                    router.back();
                } else {
                    alert(response?.data.resultMsg);
                }
            } else {
                formData.append("ID", id);
                const response = await api.post('/admin/recruit/updRecruit.php', formData);
                if (response?.data.result) {
                    alert(response?.data.resultMsg);
                    router.back();
                } else {
                    alert(response?.data.resultMsg);
                }
            }
        } catch {
            alert('통신 오류')
        }
    }


    useEffect(() => {
        const links = [
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
            },
            {
                rel: "stylesheet",
                href: "https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            },
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.css"
            }
        ];

        links.forEach(({ rel, href }) => {
            const link = document.createElement("link");
            link.rel = rel;
            link.href = href;
            document.head.appendChild(link);
        });

        // Cleanup function to remove the links when the component is unmounted or updated
        return () => {
            links.forEach(({ href }) => {
                const link = document.querySelector(`link[href="${href}"]`);
                if (link) {
                    document.head.removeChild(link);
                }
            });
        };
    }, []);
    return(
        <>

            <div className="contentBox add">
                <h3>Employment</h3>
                <div className="flexBox">
                    <div>
                        <h4>채용 {id ? '수정' : '등록'}</h4>
                    </div>
                    <div className="btnBox">
                        <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
                        <button className="blueBtn" onClick={()=>save()}>{id ? '수정하기' : '저장하기'}</button>
                    </div>
                </div>

                <div className="input_tableWrap">
                    <table>
                        <tbody>
                        <tr>
                            <th>계열사 <span className="star">*</span></th>
                            <td>
                                <div className="selectContainer">
                                    <div className="selectWrap">
                                        <div className="selectBox">
                                            <select value={data?.recruitAffilate} name="recruitAffilate" onChange={(e) => handleSelect(e)} id="">
                                                <option value="H">대동하이렉스</option>
                                                <option value="D">대동도어</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>경력사항 <span className="star">*</span></th>
                            <td>
                                <div className="selectContainer">
                                    <div className="selectWrap">
                                        <div className="selectBox">
                                            <select value={data?.careerClass} name="careerClass" onChange={(e) => handleSelect(e)} id="">
                                                <option value="C">경력</option>
                                                <option value="F">신입</option>
                                                <option value="N">무관</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>직군 <span className="star">*</span></th>
                            <td>
                                <div className="selectContainer">
                                    <div className="selectWrap">
                                        <div className="selectBox">
                                            <select value={data?.occupationClass} name="occupationClass" onChange={(e) => handleSelect(e)} id="">
                                                <option value="SM">영업</option>
                                                <option value="RD">R&amp;D</option>
                                                <option value="MM">생산</option>
                                                <option value="MS">생산지원</option>
                                                <option value="QM">품질</option>
                                                <option value="MP">경영</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>고용형태 <span className="star">*</span></th>
                            <td>
                                <div className="selectContainer">
                                    <div className="selectWrap">
                                        <div className="selectBox">
                                            <select value={data?.employeementType} name="employeementType" onChange={(e) => handleSelect(e)} id="">
                                                <option value="R">정규직</option>
                                                <option value="C">계약직</option>
                                                <option value="I">인턴</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>진행상태 <span className="star">*</span></th>
                            <td>
                                <div className="selectContainer">
                                    <div className="selectWrap">
                                        <div className="selectBox">
                                            <select value={data?.recruitProcessStatus} name="recruitProcessStatus" onChange={(e) => handleSelect(e)} id="">
                                                <option value="O">진행중</option>
                                                <option value="R">접수중</option>
                                                <option value="C">접수마감</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <TextBox
                          title={'채용공고명'}
                          name={'recruitSubject'}
                          value={data?.recruitSubject}
                          setData={setData}
                        />
                        <TextBox
                          title={'채용기간'}
                          name={'recruitTerms'}
                          value={data?.recruitTerms}
                          setData={setData}
                        />


                        <tr>
                            <th>공고내용 <span className="star">*</span></th>
                            <td>
                                {id && data?.recruitDescription ?
                                  <Summernote
                                    initData={data?.recruitDescription}
                                    setData={setData}
                                    name={'recruitDescription'}
                                  /> : ''
                                }
                                {!id ?
                                  <Summernote
                                    initData={data?.recruitDescription}
                                    setData={setData}
                                    name={'recruitDescription'}
                                  /> : ""
                                }
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
