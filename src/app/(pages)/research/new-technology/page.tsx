import "@/app/assets/research/new-technology.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";

export default async function NewTechnology({searchParams : {lang}} : any) {
  const language = await fetchLanguage(lang);
  return (
    <>
      <Header language={language}/>
      <div className="new-technology">
        <div className="container-header-01">
          <ul className="location">
            <li>R&amp;D</li>
            <li>{language?.research_27}{language?.research_29}{language?.research_30}</li>
          </ul>
          <h2>{language?.research_27} {language?.research_29} {language?.research_30}</h2>
        </div>
        <div className="new-tech-process">
          <p className="pc"><Image src={`/images/sub/research/new-technology/new-tech-process-pc-${language?.language}.jpg`} alt="" width={1920} height={1079}/></p>
          <p className="mobile"><Image src={`/images/sub/research/new-technology/new-tech-process-mo-${language?.language}.jpg`} alt="" width={375} height={2132}/></p>
        </div>
        <div className="new-tech-text">
          <ol>
            <li>Concept Design 단계 - 과거차 문제 등 반영</li>
            <li>DFMEA 단계 - 변경점에 대한 심층분석</li>
            <li>CAE 단계 - Tool을 이용한 해석 검증</li>
            <li>Mock up 단계 - 3D Printer활용 사전검증</li>
            <li>Design review 단계 - HKMC/자체 DR 강화</li>
            <li>상세설계 단계 - 문제점 반영 상세설계</li>
            <li>시작개발/개선 단계 - 검증을 위한 부품개발 투자</li>
            <li>신뢰성 검증 단계 - ES/TDP/WOW 평가검증</li>
          </ol>
        </div>
      </div>
      <Footer language={language}/>
    </>
  )
}
