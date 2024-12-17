import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Location from "@/components/pages/company/Location";

export default async function HistoryPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="locations">
                <div className="container-header-01">
                    <h2>{language?.location_01}</h2>
                    <ul className="location">
                        <li>{language?.header_1}</li>
                        <li>{language?.header_1_6}</li>
                    </ul>
                    <p>{language?.location_02}<br/>{language?.location_03}</p>
                </div>
                <Location language={language}/>
            </div>
            <Footer language={language}/>
        </>
    )
}
