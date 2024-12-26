import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import SustainabilityReport from "@/components/pages/sustainability/esg/SustainabilityReport";

export default async function SustainabilityReportPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <SustainabilityReport language={language}/>
            <Footer language={language}/>
        </>
    )
}
