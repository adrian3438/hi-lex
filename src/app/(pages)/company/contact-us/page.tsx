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
                <div className="content-header">
                    <ul className="location">
                        <li>{language?.inquiry_text_23}</li>
                        <li>{language?.inquiry_text_22}</li>
                    </ul>
                    <h2>{language?.inquiry_text_22}</h2>
                    <div>
                    <p>{language?.inquiry_text_01}</p><p>{language?.inquiry_text_01_01}</p>
                    </div>
                </div>
                <ContactUs language={language}/>
            </div>
            <Footer language={language}/>
        </>
    )
}
