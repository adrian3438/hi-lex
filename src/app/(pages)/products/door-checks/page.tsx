import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import DoorChecks from "@/components/products/DoorChecks";

export default async function DoorChecksPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="products">
                <div className="container-header-01">
                    <h2>{language?.header_2}</h2>
                    <ul className="location">
                        <li>{language?.header_2}</li>
                        <li>{language?.header_2_3}</li>
                    </ul>
                </div>
                <DoorChecks/>
            </div>
            <Footer language={language}/>
        </>
    )
}
