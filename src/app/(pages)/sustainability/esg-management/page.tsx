import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import ESGManagement from "@/components/pages/sustainability/esg/ESGManagement";

export default async function EsgManagementPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <ESGManagement language={language}/>
            <Footer language={language}/>
        </>
    )
}
