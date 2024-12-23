import "@/app/assets/research/research-detail.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Link from "next/link";
import Modeling4 from "@/components/Modeling/ModelViewer4";

export default async function PowerHoodPage({searchParams : {lang}} : any) {
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
                        <Link href="#">Go to Products</Link>
                    </div>
                </div>
                <div className="modeling-area">
                    <div>
                        <Modeling4/>
                    </div>
                </div>
            </div>
            <Footer language={language}/>
        </>
    )
}
