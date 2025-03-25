import "@/app/assets/research/research-detail.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Link from "next/link";
import Modeling1 from "@/components/Modeling/ModelViewer1";
import ResearchDetail from "@/components/pages/research/ResearchDetail";

export default async function ELatchPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="research-modeling">
                <div className="container-header-01">
                    <h2>{language?.header_3}</h2>
                    <ul className="location">
                        <li>{language?.header_3}</li>
                        <li>{language?.header_3_1}</li>
                    </ul>
                    <div className="go-btn">
                        <Link href="/products/latching-systems">Go to Products</Link>
                    </div>
                </div>
                <ResearchDetail initialActiveIndex={2} />
                <div className="modeling-area">
                    <div>
                        <Modeling1 language={language}/>
                    </div>
                </div>
            </div>
            <Footer language={language}/>
        </>
    )
}
