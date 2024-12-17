import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import ContactUs from "@/components/pages/company/ContactUs";

export default async function ContactUsPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="contact-us">
                <ContactUs language={language}/>
            </div>
            <Footer language={language}/>
        </>
    )
}
