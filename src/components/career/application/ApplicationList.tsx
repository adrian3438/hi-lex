'use client';

import {useEffect, useState} from "react";
import api from "@/lib/api";
import Paginate from "@/components/DotsAdmin/Paginate/paginate";
import {usePathname, useRouter} from "next/navigation";

interface Props {
  page: any;
}

export default function ApplicationList({page}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const query = new URLSearchParams({ page: "1" }).toString();
  const [listData, setListData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [keyword, setKeyword] = useState('');

  type CheckListType = Record<string, string>;
  const [chekcList, setChekcList] = useState<CheckListType>({
    recruitAffilate: '',
    careerClass: '',
    occupationClass: '',
    employeementType: '',
  });

  async function getApplicationList() {
    try {
      const response = await api.get('/user/recruit/getRecruitList.php', {
        params: {
          recruitAffilate: chekcList?.recruitAffilate,
          careerClass: chekcList?.careerClass,
          occupationClass: chekcList?.occupationClass,
          employeementType: chekcList?.employeementType,
          keyword: keyword,
          page: page,
          size: 10,
          sortColumn: 'date',
          sortOrder: 'asc'
        }
      });
      if (response?.data.result) {
        setListData(response?.data?.list);
        setTotalCount(response?.data?.total_cnt);
      } else {

      }
    } catch {
      alert('API load failed.')
    }
  }

  useEffect(() => {
    getApplicationList();
  }, [chekcList, page]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    router.push(`${pathname}?${query}`, { scroll: false });

    const { name, value, checked } = e.target;

    setChekcList((prev) => {
      const currentValues = prev[name] ? prev[name].split(",") : [];

      if (checked) {
        // 체크되었으면 추가
        return { ...prev, [name]: [...currentValues, value].join(",") };
      } else {
        // 체크 해제되었으면 제거
        return { ...prev, [name]: currentValues.filter((v) => v !== value).join(",") };
      }
    });
  }

  function handleClick() {
    router.push(`${pathname}?${query}`, { scroll: false });

    setChekcList({
      recruitAffilate: '',
      careerClass: '',
      occupationClass: '',
      employeementType: '',
    });
  }
  function handleKeydown(e: any) {
    if(e.key==='Enter')
      handleClick();
  }

  function handleKeywordChange(e: any) {
    setKeyword(e.target.value);
  }

  return (
    <>
      <div className="checks">
        <div>
          <dl>
            <dt>계열사 구분</dt>
            <dd>
              <p><input type="checkbox" id="affiliate01" name="recruitAffilate" onChange={(e) => handleChange(e)} value="H" checked={chekcList?.recruitAffilate?.includes("H")}/> <label htmlFor="affiliate01">대동하이렉스</label></p>
              <p><input type="checkbox" id="affiliate02" name="recruitAffilate" onChange={(e) => handleChange(e)} value="D" checked={chekcList?.recruitAffilate?.includes("D")}/> <label htmlFor="affiliate02">대동도어</label></p>
            </dd>
          </dl>
          <dl>
            <dt>경력사항</dt>
            <dd>
              <p><input type="checkbox" id="career01" name="careerClass" onChange={(e) => handleChange(e)} value="C" checked={chekcList?.careerClass?.includes("C")}/> <label htmlFor="career01">경력</label></p>
              <p><input type="checkbox" id="career02" name="careerClass" onChange={(e) => handleChange(e)} value="F" checked={chekcList?.careerClass?.includes("F")}/> <label htmlFor="career02">신입</label></p>
              <p><input type="checkbox" id="career03" name="careerClass" onChange={(e) => handleChange(e)} value="N" checked={chekcList?.careerClass?.includes("N")}/> <label htmlFor="career03">무관</label></p>
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>직군</dt>
            <dd>
              <p><input type="checkbox" id="occupation01" name="occupationClass" onChange={(e) => handleChange(e)} value="SM" checked={chekcList?.occupationClass?.includes("SM")}/> <label htmlFor="occupation01">영업</label></p>
              <p><input type="checkbox" id="occupation02" name="occupationClass" onChange={(e) => handleChange(e)} value="RD" checked={chekcList?.occupationClass?.includes("RD")}/> <label htmlFor="occupation02">R&amp;D</label></p>
              <p><input type="checkbox" id="occupation03" name="occupationClass" onChange={(e) => handleChange(e)} value="MM" checked={chekcList?.occupationClass?.includes("MM")}/> <label htmlFor="occupation03">생산</label></p>
              <p><input type="checkbox" id="occupation04" name="occupationClass" onChange={(e) => handleChange(e)} value="MS" checked={chekcList?.occupationClass?.includes("MS")}/> <label htmlFor="occupation04">생산지원</label></p>
              <p><input type="checkbox" id="occupation05" name="occupationClass" onChange={(e) => handleChange(e)} value="QM" checked={chekcList?.occupationClass?.includes("QM")}/> <label htmlFor="occupation05">품질</label></p>
              <p><input type="checkbox" id="occupation06" name="occupationClass" onChange={(e) => handleChange(e)} value="MP" checked={chekcList?.occupationClass?.includes("MP")}/> <label htmlFor="occupation06">경영</label></p>
            </dd>
          </dl>
          <dl>
            <dt>고용형태</dt>
            <dd>
              <p><input type="checkbox" id="employment01" name="employeementType" onChange={(e) => handleChange(e)} value="R" checked={chekcList?.employeementType?.includes("R")}/> <label htmlFor="employment01">정규직</label></p>
              <p><input type="checkbox" id="employment02" name="employeementType" onChange={(e) => handleChange(e)} value="C" checked={chekcList?.employeementType?.includes("C")}/> <label htmlFor="employment02">계약직</label></p>
              <p><input type="checkbox" id="employment03" name="employeementType" onChange={(e) => handleChange(e)} value="I" checked={chekcList?.employeementType?.includes("I")}/> <label htmlFor="employment03">인턴</label></p>
            </dd>
          </dl>
        </div>
      </div>
      <div className="search-list">
        <div className="search-keyword">
          <div>
            <p>키워드 검색 시 선택 조건 자동 해제</p>
            <div>
              <label htmlFor="keyword">검색</label>
              <input type="text" id="keyword" name="keyword" placeholder="키워드 검색: 재무, 품질, 신입, 경력 등 단어 입력" onChange={handleKeywordChange} onKeyDown={(e) => handleKeydown(e)}/>
              <button onClick={() => handleClick()}>검색</button>
            </div>
          </div>
        </div>
        <div className="list-table">
          <table>
            <tbody>
            {listData && listData?.length > 0 && listData.map((list:any, index:number) => (
              <tr key={index} onClick={() => router.push(`/career/application/${list?.ID}`)}>
                <th scope="row">
                  {list?.recruitAffilate === 'H' && '대동하이렉스'}
                  {list?.recruitAffilate === 'D' && '대동도어'}
                </th>
                <th scope="row">
                  {list?.occupationClass === 'SM' && '영업'}
                  {list?.occupationClass === 'RD' && 'R&D'}
                  {list?.occupationClass === 'MM' && '생산'}
                  {list?.occupationClass === 'MS' && '생산지원'}
                  {list?.occupationClass === 'QM' && '품질'}
                  {list?.occupationClass === 'MP' && '경영'}
                </th>
                <th scope="row">
                  {list?.careerClass === 'C' && '경력'}
                  {list?.careerClass === 'F' && '신입'}
                  {list?.careerClass === 'N' && '무관'}
                </th>
                <th scope="row">
                  {list?.employeementType === 'R' && '정규직'}
                  {list?.employeementType === 'C' && '계약직'}
                  {list?.employeementType === 'I' && '인턴'}
                </th>
                <td>{list?.recruitSubject}</td>
                <td>{list?.recruitTerms}</td>
                <td>
                  {list?.processStatus === 'O' && <span className='ing'>진행중</span>}
                  {list?.processStatus === 'R' && <span className='receipt'>접수중</span>}
                  {list?.processStatus === 'C' && <span className='end'>접수마감</span>}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        {totalCount !== 0 && (
          <div style={{marginTop: '30px', display: 'flex', justifyContent: 'center'}}>
            <Paginate page={page} totalCount={totalCount} size={10}/>
          </div>
        )}
      </div>
    </>
  )
}
