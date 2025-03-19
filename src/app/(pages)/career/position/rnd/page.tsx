import "@/app/assets/career/position.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import CareerHeader from "@/components/career/CareerHeader";
import Link from "next/link";
import Image from "next/image";

export default async function RndPage({searchParams : {lang}} : any) {
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
                            <li className="active"><Link href="/career/position/rnd">{language?.position_01_06}</Link></li>
                            <li><Link href="/career/position/production">{language?.position_01_07}</Link></li>
                            <li><Link href="/career/position/procurement">{language?.position_01_08}</Link></li>
                            <li><Link href="/career/position/management">{language?.position_01_09}</Link></li>
                        </ul>
                    </div>
                    <div className="position-content research">
                        <p><Image src="/images/sub/career/position/position-03.png" alt="" width={1420} height={430}/></p>
                        <dl className="research-01">
                            <dt>{language?.position_01_41}<span>{language?.position_01_42}</span></dt>
                            <dd>
                                <p>{language?.position_01_43}</p>
                                <ul>
                                    <li>{language?.position_01_44}</li>
                                    <li>{language?.position_01_45}</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl className="research-02">
                            <dt>{language?.position_01_46}<span>{language?.position_01_47}</span></dt>
                            <dd>
                                <p>{language?.position_01_48}</p>
                                <ul>
                                    <li>{language?.position_01_49}</li>
                                    <li>{language?.position_01_50}</li>
                                    <li>{language?.position_01_51}</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl className="research-03">
                            <dt>{language?.position_01_52}<span>{language?.position_01_53}</span></dt>
                            <dd>
                                <p>{language?.position_01_54}</p>
                                <ul>
                                    <li>{language?.position_01_55}</li>
                                    <li>{language?.position_01_56}</li>
                                    <li>{language?.position_01_57}</li>
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
