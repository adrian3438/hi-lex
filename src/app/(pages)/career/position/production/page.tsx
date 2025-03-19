import "@/app/assets/career/position.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import CareerHeader from "@/components/career/CareerHeader";
import Link from "next/link";
import Image from "next/image";

export default async function ProductionPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="career">
                <CareerHeader language={language} activeIndex={0}/>
                <div className="career-container">
                    <div className="career-content-header">
                        <h3>{language?.position_01_01}</h3>
                        <ul>
                            <li className="introduce"><Link href="/career/position/factory">{language?.position_01_02}</Link></li>
                            {language.language === 'kr' && <li className="go"><Link href="/career/application#job-application-list">{language?.position_01_03}</Link></li>}

                        </ul>
                    </div>
                    <div className="position-list">
                        <ul>
                            <li><Link href="/career/position/quality">{language?.position_01_04}</Link></li>
                            <li><Link href="/career/position/sales">{language?.position_01_05}</Link></li>
                            <li><Link href="/career/position/rnd">{language?.position_01_06}</Link></li>
                            <li className="active"><Link href="/career/position/production">{language?.position_01_07}</Link></li>
                            <li><Link href="/career/position/procurement">{language?.position_01_08}</Link></li>
                            <li><Link href="/career/position/management">{language?.position_01_09}</Link></li>
                        </ul>
                    </div>
                    <div className="position-content production">
                        <p><Image src="/images/sub/career/position/position-04-01.jpg" alt="" width={1420} height={430}/></p>
                        <dl className="production-01">
                            <dt>{language?.position_01_83_01}<span>{language?.position_01_83_02}</span></dt>
                            <dd>
                                <p>{language?.position_01_83_03}</p>
                                <ul>
                                    <li>{language?.position_01_83_04}</li>
                                    <li>{language?.position_01_83_05}</li>
                                    <li>{language?.position_01_83_06}</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl className="production-02">
                            <dt>{language?.position_01_83_07}<span>{language?.position_01_83_08}</span></dt>
                            <dd>
                                <p>{language?.position_01_83_09}</p>
                                <ul>
                                    <li>{language?.position_01_83_10}</li>
                                    <li>{language?.position_01_83_11}</li>
                                    <li>{language?.position_01_83_12}</li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <Footer language={language}/>
        </>
    )
}
