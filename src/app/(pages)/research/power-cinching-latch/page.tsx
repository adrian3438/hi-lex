import "@/app/assets/research/research-detail.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Link from "next/link";
import Modeling5 from "@/components/Modeling/ModelViewer5";
import ResearchDetail from "@/components/pages/research/ResearchDetail";
import ArrowUp from "@/components/common/ArrowUp";
import ArrowDown from "@/components/common/ArrowDown";

export default async function PowerCinchingLatchPage({searchParams : {lang}} : any) {
  const language = await fetchLanguage(lang);
  return (
    <>
      <Header language={language}/>
      <div className="research-modeling">
        <div className="container-header-01">
          <h2>{language?.header_3}</h2>
          <ul className="location">
            <li>{language?.header_3}</li>
            <li>{language?.header_3_4}</li>
          </ul>
          <div className="go-btn">
            <Link href="/products/latching-systems">Go to Products</Link>
          </div>
        </div>
        <ResearchDetail initialActiveIndex={10} />
        <ArrowDown/>
        <div className="modeling-area">
          <div>
            <Modeling5 language={language}/>
          </div>
        </div>
        <ArrowUp/>
      </div>
      <Footer language={language}/>
    </>
  )
}
