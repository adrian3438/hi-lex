import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import PowerClusures from "@/components/products/PowerClusures";

export default async function PowerClusuresPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="products">
                <div className="container-header-01">
                    <h2>{language?.header_2}</h2>
                    <ul className="location">
                        <li>{language?.header_2}</li>
                        <li>{language?.header_2_2}</li>
                    </ul>
                </div>
                <PowerClusures/>
            </div>
            <Footer language={language}/>
        </>
    )
}
