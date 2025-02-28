import "@/app/assets/career/application.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import CareerHeader from "@/components/career/CareerHeader";
import Link from "next/link";
import Image from "next/image";
import ApplicationList from "@/components/career/application/ApplicationList";

export default async function ApplicationPage({searchParams: {lang, page}}: any) {
  const language = await fetchLanguage(lang);
  return (
    <>
      <Header language={language}/>
      <div className="career">
        <CareerHeader language={language} activeIndex={3}/>
        <div className="application">
          <div className="application-header">
            <h2>Procedure for recruitment</h2>
            <Link href="#">채용공고 포털사이트</Link>
          </div>
          <section className="full-size">
            <div>
              <div>
                <Image src="/images/sub/career/application/application-01-pc.png" alt="" width={1420} height={467}/>
              </div>
              <p><span>1, 2차 면접은 동시에 진행될 수 있습니다.</span></p>
            </div>
          </section>
          <section className="application-content2">
            <ol>
              <li>
                <dl>
                  <dt>입사지원</dt>
                  <dd>대동도어 홈페이지를 통한 <Link href="#">온라인 입사지원서</Link> 접수</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>서류심사</dt>
                  <dd>지원자의 기본적 자질 및 가치관을 심사하고, 입사지원서 기재 사항에 대한 사실여부 확인 및 지원자의 발전 가능성 심사</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>면접</dt>
                  <dd>
                    지원자의 직무 전문성, 역량, 가치관 및 인성을 종합적으로 심사
                    <div>
                      <span className="color-01">사무직</span> 1차 실무면접, 2차 인성면접
                    </div>
                    <div>
                      <span className="color-02">생산직</span> 1차 종합면접
                    </div>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>건강검진</dt>
                  <dd>직무를 담당하는데 필요한 신체적 적격성 여부 판정</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>최종합격</dt>
                  <dd>건강검진까지의 프로세스 상 이상이 없을 경우 입사</dd>
                </dl>
              </li>
            </ol>
          </section>
          <section className="application-content3">
            <h2>Work system</h2>
            <ul>
              <li><span>·</span> 근로형태: 사무직, 생산직(2조 2교대)</li>
              <li><span>·</span> 근무시간: 주 5일 08:00~17:00, 야간 20:00~05:00(생산 정규직)</li>
            </ul>
          </section>
          <section className="application-content4">
            <h2>Rank &amp; Title</h2>
            <div>
              <div className="ranks">
                <p className="rank-01">G7</p>
                <p className="rank-02">G6</p>
                <p className="rank-03">G5</p>
              </div>
              <div className="positions">
                <p className="rank-position-01">팀장</p>
                <p className="rank-position-02">연구위원</p>
                <p className="rank-position-02">책임매니저/책임연구원</p>
              </div>
            </div>
            <div>
              <div className="ranks">
                <p className="rank-04">G4</p>
                <p className="rank-05">G3</p>
                <p className="rank-06">G2</p>
                <p className="rank-07">G1</p>
              </div>
              <div className="positions">
                <p className="rank-position-03">매니저/연구원</p>
              </div>
            </div>
            <div>
              <div className="ranks">
                <p className="rank-08">E</p>
              </div>
              <div className="positions">
                <p className="rank-position-04">수습사원(경력포함)</p>
              </div>
            </div>
          </section>
          <section className="application-content5">
            <h2>Evaluation system</h2>
            <p>
              <Image src="/images/sub/career/application/application-02-pc.png" alt="" width={1390} height={381}/>
            </p>
          </section>
          <section className="application-content3">
            <h2>Compensation policy</h2>
            <ul>
              <li><span>·</span> 사무직 : 연봉제</li>
              <li><span>·</span> 생산직 : 호봉제</li>
              <li><span>·</span> 특별성과금 : 경영성과에 따른 지급</li>
              <li><span>·</span> 최우수 사원/라인 포상</li>
              <li><span>·</span> 장기근속자 포상</li>
              <li><span>·</span> 제안제도 운영 및 우수안건 포상</li>
            </ul>
          </section>
          <section className="application-content6">
            <h2>Applicaion Form</h2>
            <div>
              <a href="#" download>DaedongDoor_Job_Application.xlsx</a>
            </div>
            <p>아래 채용 공고를 확인 후 지원서를 작성하여 상세페이지 내에서 입사지원서류를 업로드 합니다.</p>
          </section>
          <section className="application-content7">
            <h2>Job Opening List</h2>
            <p>조건을 선택하면 아래에 검색 결과가 표시됩니다. 키워드 검색 시 선택한 조건은 자동 해제 됩니다.</p>
            <ApplicationList page={page || 1}/>
          </section>
        </div>
      </div>
      <Footer language={language}/>
    </>
  )
}
