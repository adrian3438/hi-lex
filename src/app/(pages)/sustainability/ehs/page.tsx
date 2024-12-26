import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import EHS from "@/components/pages/sustainability/esg/EHS";

export default async function EhsPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <EHS language={language}/>
            <Footer language={language}/>
        </>
    )
}
