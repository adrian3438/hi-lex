'use client'
import ListFilter from "@/components/DotsAdmin/List/ListFilter";
import ListSearchBox from "@/components/DotsAdmin/List/ListSearchBox";
import ListSizeBox from "@/components/DotsAdmin/List/ListSizeBox";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Paginate from "@/components/DotsAdmin/Paginate/paginate";
import ListRecuritTypeBox from "@/components/DotsAdmin/List/ListRecuritTypeBox";
import calCulateIndex from "@/components/calculateIndex";
import ListCareerTypeBox from "@/components/DotsAdmin/List/ListCareerTypeBox";
import ListOccupationTypeBox from "@/components/DotsAdmin/List/ListOccupationTypeBox";
import ListEmployTypeBox from "@/components/DotsAdmin/List/ListEmployTypeBox";
import ListProcessTypeBox from "@/components/DotsAdmin/List/ListProcessTypeBox";


interface Props {
    recruitAffilate : any,
    occupationClass : any,
    careerClass : any,
    employeementType : any,
    processStatus: any,
    page : any,
    size : any,
    keyword : string,
    column : string,
    order : string
}

export default function EmployeeListPage ({
  recruitAffilate , occupationClass, careerClass, employeementType, processStatus , page , size , keyword , column , order
} : Props) {
    const router = useRouter()

    const [data, setData] = useState<any>([]);
    const [totalCount, setTotalCount] = useState<number>(0)
    async function getList () {
        try{
            const response = await api.get(`/admin/recruit/getRecruitList.php?recruitAffilate=${recruitAffilate}&occupationClass=${occupationClass}&careerClass=${careerClass}&employeementType=${employeementType}&processStatus=${processStatus}&page=${page}&size=${size}&keyword=${keyword}&sortColumn=${column}&sortOrder=${order}`)
            if(response.data.result === true) {
                setData(response.data.list);
                setTotalCount(response.data.total_cnt);
            }
            else alert(response.data.resultMsg)
        }catch {alert('Server Error')}
    }

    async function statusChange (id : any, status : string) {
        try {
            const formData = new FormData()
            formData.append('ID', id);
            formData.append('activeStatus', status === 'Y' ? 'N' : 'Y');
            const response = await api.post(`/admin/recruit/updRecruitActiveStatus.php`, formData);
            if(response?.data?.result === true) {getList()}
            else {alert(response.data.resultMsg)}
        }catch {alert('Server Error')}
    }

    useEffect(() => {
        getList();
    }, [recruitAffilate , occupationClass, careerClass, employeementType, processStatus , page , size , keyword , column , order]);

    return(
        <>
            <div className="contentBox content_management">
                <h3>Employment</h3>
                <div className="flexBox">
                    <div>
                        <h4>채용 목록</h4>
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
                            <ListRecuritTypeBox recuritType={recruitAffilate}/>
                            <ListCareerTypeBox careerType={careerClass}/>
                            <ListOccupationTypeBox occupationType={occupationClass}/>
                            <ListEmployTypeBox employType={employeementType}/>
                            <ListProcessTypeBox processStatus={processStatus}/>
                            <ListSearchBox
                              keyword={keyword}
                            />
                        </div>
                    </div>

                    <div className="right">
                        <div className="btnBox">
                            <button className="blueBtn" onClick={() => router.push(`/admin/employee-management/employee`)}>신규등록</button>
                        </div>
                    </div>
                </div>

                <div className="tableWrap">
                    <div className="tableType_a thumb">
                        <table>

                            <ListFilter

                            />

                            <tbody>
                            {data?.map((list:any, index:number) => (
                              <tr key={index}>
                                  <td style={{width: "5%"}} onClick={() => router.push(`/admin/employee-management/employee?id=${list.ID}`)}>
                                    <span className="readOnly">
                                        {calCulateIndex(page, size, totalCount, index)}
                                    </span>
                                  </td>
                                  <td style={{width: "8%"}} onClick={() => router.push(`/admin/employee-management/employee?id=${list.ID}`)}>
                                      <span className="readOnly">{list?.recruitAffilate === 'D' ? '대동도어' : '대동하이렉스'}</span>
                                  </td>
                                  <td style={{width: "7%"}} onClick={() => router.push(`/admin/employee-management/employee?id=${list.ID}`)}>
                                      <span className="readOnly">
                                          {list?.careerClass === 'C' && '경력'}
                                          {list?.careerClass === 'F' && '신입'}
                                          {list?.careerClass === 'N' && '무관'}
                                      </span>
                                  </td>
                                  <td style={{width: "7%"}} onClick={() => router.push(`/admin/employee-management/employee?id=${list.ID}`)}>
                                      <span className="readOnly">
                                          {list?.occupationClass === 'SM' && '영업'}
                                          {list?.occupationClass === 'RD' && 'R&D'}
                                          {list?.occupationClass === 'MM' && '생산'}
                                          {list?.occupationClass === 'MS' && '생산지원'}
                                          {list?.occupationClass === 'QM' && '품질'}
                                          {list?.occupationClass === 'MP' && '경영'}
                                      </span>
                                  </td>
                                  <td style={{width: "7%"}} onClick={() => router.push(`/admin/employee-management/employee?id=${list.ID}`)}>
                                      <span className="readOnly">
                                          {list?.employeementType === 'R' && '정규직'}
                                          {list?.employeementType === 'C' && '계약직'}
                                          {list?.employeementType === 'I' && '인턴'}
                                      </span>
                                  </td>
                                  <td style={{width: "7%"}} onClick={() => router.push(`/admin/employee-management/employee?id=${list.ID}`)}>
                                    <span className="readOnly">
                                        {list?.processStatus === 'O' && '진행중'}
                                        {list?.processStatus === 'R' && '접수중'}
                                        {list?.processStatus === 'C' && '접수마감'}
                                    </span>
                                  </td>
                                  <td style={{width: "25%"}} onClick={() => router.push(`/admin/employee-management/employee?id=${list.ID}`)}>
                                    <span className="readOnly">
                                        {list?.recruitSubject}
                                    </span>
                                  </td>
                                  <td>
                                    <span className="readOnly" onClick={() => router.push(`/admin/employee-management/employee?id=${list.ID}`)}>
                                        {list?.recruitTerms}
                                    </span>
                                  </td>

                                  <td>
                                      <div className="toggleSwitchBox">
                                        <span className="toggleSwitch">
                                            <input
                                              type="checkbox"
                                              id={`contents_${list?.ID}`}
                                              className="toggleIpt"
                                              onChange={() => statusChange(list?.ID, list?.activeStatus)}
                                              checked={list?.activeStatus === 'Y'}
                                              hidden
                                            />
                                            <label htmlFor={`contents_${list?.ID}`} className="toggleSwitch">
                                                <span className="toggleButton"></span>
                                            </label>
                                        </span>
                                      </div>
                                  </td>
                                  <td>
                                      <div className="statUsBox">
                                          <span className="gray">삭제</span>
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
