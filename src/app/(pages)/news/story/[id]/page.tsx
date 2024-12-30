import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Link from "next/link";
import StoryDetail from "@/components/pages/news/StoryDetail";
import "@/app/assets/news/news.scss";

interface ParamsType {
    params: { id: string | undefined };
    searchParams: { lang: any };
}

export default async function StoryDetailPage({ searchParams: { lang }, params: { id } }: ParamsType) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="news">
                <div className="container-header-01">
                    <h2>{language?.header_6}</h2>
                    <ul className="location">
                        <li>{language?.header_6}</li>
                        <li>{language?.header_6_2}</li>
                    </ul>
                    <p>{language?.news_02}</p>
                </div>
                <ul className="news-menu">
                    <li><Link href="/news/press-release">{language.news_btn_01}</Link></li>
                    <li className="active"><Link href="/news/story">{language.news_btn_02}</Link></li>
                    <li><Link href="/news/events">{language.news_btn_03}</Link></li>
                    <li><Link href="/news/media">{language.news_btn_04}</Link></li>
                </ul>
                <StoryDetail language={language} id={id}/>
            </div>
            <Footer language={language}/>
        </>
    )
}
