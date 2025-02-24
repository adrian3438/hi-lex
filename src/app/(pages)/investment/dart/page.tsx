import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Dart from "@/components/pages/investment/Dart";

export default async function AboutUsPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <Dart language={language}/>
            <Footer language={language}/>
        </>
    )
}