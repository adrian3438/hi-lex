'use client';

import "@/app/assets/main.scss";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function MainPopup() {
  const [openState, setOpenState] = useState<boolean>(false);
  const [todayCloseData, setTodayCloseData] = useState<any>(false);
  function handleCheckBox(e: any) {
    setTodayCloseData(e.target.checked);
  }
  function popupClose() {
    setOpenState(false);

    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    localStorage.setItem('todayClose', JSON.stringify({
      checked: todayCloseData,
      checkedDate: todayString,
    }));
  }

  useEffect(() => {
    const todayClose = localStorage.getItem('todayClose');
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    if (todayClose) {
      const parsedData = JSON.parse(todayClose);
      if (parsedData?.checked && parsedData.checkedDate === todayString) {
        setOpenState(false);
      } else {
        localStorage.removeItem('todayClose');
        setOpenState(true);
      }
    } else {
      setOpenState(true);
    }
  }, []);

  return (
    <div className={`main-popup ${!openState ? 'close' : ''}`}>
      <div className="main-popup-header">
        <p className="company-name">대동도어</p>
        <h1>시험평가팀<br/> 신입 / 경력사원 모집</h1>
        <p className="period">2025.04.24(목) ~ 2025.05.11(일)</p>
      </div>
      <div className="main-popup-content">
        <section>
          <h2>자격요건</h2>
          <ul>
            <li>신입 : 전대졸 이상 (기계, 전자공학)</li>
            <li>경력 : 1년이상 시험관련(기계 or 전자 관련 시험)</li>
          </ul>
        </section>
        <section>
          <h2>우대사항</h2>
          <ul>
            <li>자동차 시험평가 업무 경력자</li>
            <li>외국어 : 영어/일본어 가능자</li>
            <li>오토캐드/3툴 사용자</li>
          </ul>
        </section>
        <div>
          <a className="button-01" href="/download/대동도어 주식회사 자사지원서.docx" download><span>지원서류</span></a>
          <Link className="button-02" href="/career/application/9">지원하기</Link>
        </div>
      </div>
      <div className="main-popup-footer">
        <label><input type="checkbox" onChange={(e) => handleCheckBox(e)}/>오늘 그만보기</label>
        <button onClick={() => popupClose()}>닫기</button>
      </div>
    </div>
  )
}
