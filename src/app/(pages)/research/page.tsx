import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Research from "@/components/pages/research/Research";

export default async function ResearchPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <Research language={language}/>
            <Footer language={language}/>
        </>
    )
}
