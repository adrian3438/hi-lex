import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import History from "@/components/pages/company/History";

export default async function HistoryPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="history">
                <div className="container-header-01">
                    <h2>{language?.history_01}</h2>
                    <ul className="location">
                        <li>{language?.header_1}</li>
                        <li>{language?.header_1_4}</li>
                    </ul>
                    <p>{language?.history_02}<br/>{language?.history_03}</p>
                </div>
                <History language={language}/>
            </div>
            <Footer language={language}/>
        </>
    )
}
