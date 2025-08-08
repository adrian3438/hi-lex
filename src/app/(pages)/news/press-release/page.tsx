import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Link from "next/link";
import PressRelease from "@/components/pages/news/PressRelease";
import "@/app/assets/news/news.scss";

export default async function PressReleasePage({searchParams : {lang, page}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="news">
                <div className="container-header-01">
                    <ul className="location">
                        <li>{language?.header_6}</li>
                        <li>{language?.header_6_1}</li>
                    </ul>
                    <h2>{language?.header_6_1}</h2>
                    <p>{language?.news_01}</p>
                </div>
                <div className="news-menu">
                    <ul>
                        <li className="active"><Link href="/news/press-release">{language.news_btn_01}</Link></li>
                        <li><Link href="/news/story">{language.news_btn_02}</Link></li>
                        <li><Link href="/news/events">{language.news_btn_03}</Link></li>
                        <li><Link href="/news/media">{language.news_btn_04}</Link></li>
                    </ul>
                </div>
                <PressRelease language={language} page={page || 1}/>
            </div>
            <Footer language={language}/>
        </>
    )
}
