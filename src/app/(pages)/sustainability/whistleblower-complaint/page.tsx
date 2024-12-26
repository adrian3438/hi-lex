import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import WhistleblowerComplaint from "@/components/pages/sustainability/esg/WhistleblowerComplaint";

export default async function WhistleblowerComplaintPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <WhistleblowerComplaint language={language}/>
            <Footer language={language}/>
        </>
    )
}
