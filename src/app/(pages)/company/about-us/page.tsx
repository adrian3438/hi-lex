import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import AboutUs from "@/components/pages/company/AboutUs";

export default async function AboutUsPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <AboutUs language={language}/>
            <Footer language={language}/>
        </>
    )
}
