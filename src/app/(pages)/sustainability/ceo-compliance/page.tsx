import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import CEOCompliance from "@/components/pages/sustainability/esg/CEOCompliance";

export default async function ClimateChangePage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <CEOCompliance language={language}/>
            <Footer language={language}/>
        </>
    )
}
