import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Greeting from "@/components/pages/company/Greeting";

export default async function ContactUsPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <Greeting language={language}/>
            <Footer language={language}/>
        </>
    )
}
