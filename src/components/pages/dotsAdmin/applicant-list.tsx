'use client'
import ListFilter from "@/components/DotsAdmin/List/ListFilter";
import ListSearchBox from "@/components/DotsAdmin/List/ListSearchBox";
import ListSizeBox from "@/components/DotsAdmin/List/ListSizeBox";
import api from "@/lib/api";
import { useEffect, useState } from "react";
import Paginate from "@/components/DotsAdmin/Paginate/paginate";
import calCulateIndex from "@/components/calculateIndex";

interface Props {
    page : any,
    size : any,
    keyword : string,
    column : string,
    order : string
}

export default function ApplicantListPage ({
  page , size , keyword , column , order
} : Props) {
    const [data, setData] = useState<any>([]);
    const [totalCount, setTotalCount] = useState<number>(0)
    async function getList () {
        try{
            const response = await api.get(`/admin/recruit/getRecuritApplicantList.php?&page=${page}&size=${size}&keyword=${keyword}&sortColumn=${column}&sortOrder=${order}`);
            if(response.data.result === true) {
                setData(response.data.list);
                setTotalCount(response.data.total_cnt);
            }
            else alert(response.data.resultMsg)
        }catch {alert('Server Error')}
    }

    useEffect(() => {
        getList();
    }, [page , size , keyword , column , order]);

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
                            <ListSearchBox
                              keyword={keyword}
                            />
                        </div>
                    </div>
                </div>

                <div className="tableWrap">
                    <div className="tableType_a thumb">
                        <table>
                            <ListFilter />
                            <tbody>
                            {data?.map((list:any, index:number) => (
                              <tr key={index}>
                                  <td style={{width: '5%'}}>
                                    <span className="readOnly">
                                        {calCulateIndex(page, size, totalCount, index)}
                                    </span>
                                  </td>
                                  <td style={{width: '15%'}}>
                                      <span className="readOnly">{list?.recuritSubject}</span>
                                  </td>
                                  <td style={{width: '10%'}}>
                                      <span className="readOnly">{list?.applicantName}</span>
                                  </td>
                                  <td style={{width: '15%'}}>
                                      <span className="readOnly">{list?.applicantMobile}</span>
                                  </td>
                                  <td style={{width: '40%'}}>
                                      <span className="readOnly"><a href={list?.attachedFile} download>{list?.attachedFileName}</a></span>
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
