import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Link from "next/link";
import "@/app/assets/news/news.scss";

export default async function PressReleasePage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="news">
                <div className="container-header-01">
                    <h2>{language?.header_6}</h2>
                    <ul className="location">
                        <li>{language?.header_6}</li>
                        <li>{language?.header_6_4}</li>
                    </ul>
                    <p>{language?.news_04}</p>
                </div>
                <ul className="news-menu">
                    <li><Link href="/news/press-release">{language.news_btn_01}</Link></li>
                    <li><Link href="/news/story">{language.news_btn_02}</Link></li>
                    <li><Link href="/news/events">{language.news_btn_03}</Link></li>
                    <li className="active"><Link href="/news/media">{language.news_btn_04}</Link></li>
                </ul>
                <div className="download-lists">
                    <dl>
                        <dt>{language?.news_05}</dt>
                        <dd>
                            <ul>
                                <li>
                                    <p>{language?.news_05_01}</p>
                                    <a href="/download/대동도어 회사소개서_20240401-compressed.pdf" download>{language?.news_btn_05}</a>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <dl className="video">
                        <dt>{language?.news_06}</dt>
                        <dd>
                            <div style={{background: "black"}}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/3vizeSa7xXA?si=wgPVSI5xVQGmyKgN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                            <div style={{background: "black"}}>
                                <iframe width="560" height="315" title="vimeo-player" src="https://player.vimeo.com/video/1043028069?h=6bf77c6da2" allowFullScreen></iframe>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
            <Footer language={language}/>
        </>
    )
}
