import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import QualityManagement from "@/components/pages/sustainability/esg/QualityManagement";

export default async function QualityManagementPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <QualityManagement language={language}/>
            <Footer language={language}/>
        </>
    )
}
