import "@/app/assets/sustainability/esg.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import WhistleblowerComplaintGuide from "@/components/pages/sustainability/esg/WhistleblowerComplaintGuide";

export default async function WhistleblowerComplaintGuidePage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <WhistleblowerComplaintGuide language={language}/>
            <Footer language={language}/>
        </>
    )
}
