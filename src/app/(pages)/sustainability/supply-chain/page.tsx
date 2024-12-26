import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import SupplyChain from "@/components/pages/sustainability/esg/SupplyChain";

export default async function SupplyChainPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <SupplyChain language={language}/>
            <Footer language={language}/>
        </>
    )
}
