import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import EthicalBusiness from "@/components/pages/sustainability/esg/EthicalBusiness";

export default async function EthicalBusinessPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <EthicalBusiness language={language}/>
            <Footer language={language}/>
        </>
    )
}
