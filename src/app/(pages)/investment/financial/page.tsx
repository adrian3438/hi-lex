import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Financial from "@/components/pages/investment/Financial";

export default async function AboutUsPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <Financial language={language}/>
            <Footer language={language}/>
        </>
    )
}