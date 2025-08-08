import "@/app/assets/career/position.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import CareerHeader from "@/components/career/CareerHeader";
import Link from "next/link";
import Image from "next/image";

export default async function QualityPage({searchParams : {lang}} : any) {
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
                            {language?.language === 'kr' && <li className="go"><Link href="/career/application#job-application-list">{language?.position_01_03}</Link></li>}
                        </ul>
                    </div>
                    <div className="position-list">
                        <ul>
                            <li className="active"><Link href="/career/position/quality">{language?.position_01_04}</Link></li>
                            <li><Link href="/career/position/sales">{language?.position_01_05}</Link></li>
                            <li><Link href="/career/position/rnd">{language?.position_01_06}</Link></li>
                            <li><Link href="/career/position/production">{language?.position_01_07}</Link></li>
                            <li><Link href="/career/position/procurement">{language?.position_01_08}</Link></li>
                            <li><Link href="/career/position/management">{language?.position_01_09}</Link></li>
                        </ul>
                    </div>
                    <div className="position-content quality">
                        <p><Image src="/images/sub/career/position/position-01-01.jpg" alt="" width={1420} height={430}/></p><br/><br/>
                        <p><Image src="/images/common/logobarwide.png" alt="" width={1600} height={24}/></p>
                        {/* <div className="quality-wrap"> */}
                        <dl className="quality-01">
                            <dt>{language?.position_01_10}<span>{language?.position_01_11}</span></dt>
                            <dd>
                                <p>{language?.position_01_12}</p>
                                <ul>
                                    <li>{language?.position_01_13}</li>
                                    <li>{language?.position_01_14}</li>
                                    <li>{language?.position_01_15}</li>
                                    <li>{language?.position_01_16}</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl className="quality-02">
                            <dt>{language?.position_01_17}<span>{language?.position_01_17_02}</span></dt>
                            <dd>
                                <p>{language?.position_01_18}</p>
                                <ul>
                                    <li>{language?.position_01_19}</li>
                                    <li>{language?.position_01_20}</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl className="quality-03">
                            <dt>{language?.position_01_21}<span>{language?.position_01_22}</span></dt>
                            <dd>
                                <p>{language?.position_01_23}</p>
                                <ul>
                                    <li>{language?.position_01_24}</li>
                                    <li>{language?.position_01_25}</li>
                                    <li>{language?.position_01_26}</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl className="quality-04">
                            <dt>{language?.position_01_27}<span>{language?.position_01_28}</span></dt>
                            <dd>
                                <p>{language?.position_01_29}</p>
                                <ul>
                                    <li>{language?.position_01_30}</li>
                                    <li>{language?.position_01_31}</li>
                                    <li>{language?.position_01_32}</li>
                                </ul>
                            </dd>
                        </dl>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            <Footer language={language}/>
        </>
    )
}
