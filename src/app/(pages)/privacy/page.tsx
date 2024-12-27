import { fetchLanguage } from "@/util/fetchLanguage";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default async function Home({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);

    return (
        <>
            <Header language={language}/>
            <div className="priavacy">
                test
            </div>
            <Footer language={language}/>
        </>
    );
}
