import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import ClimateChange from "@/components/pages/sustainability/esg/ClimateChange";

export default async function ClimateChangePage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <ClimateChange language={language}/>
            <Footer language={language}/>
        </>
    )
}
