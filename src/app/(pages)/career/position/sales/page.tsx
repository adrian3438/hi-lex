import "@/app/assets/career/position.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import CareerHeader from "@/components/career/CareerHeader";
import Link from "next/link";
import Image from "next/image";

export default async function SalesPage({searchParams : {lang}} : any) {
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
                            {language.language === 'kr' && <li className="go"><Link href="#">{language?.position_01_03}</Link></li>}

                        </ul>
                    </div>
                    <div className="position-list">
                        <ul>
                            <li><Link href="/career/position/quality">{language?.position_01_04}</Link></li>
                            <li className="active"><Link href="/career/position/sales">{language?.position_01_05}</Link></li>
                            <li><Link href="/career/position/rnd">{language?.position_01_06}</Link></li>
                            <li><Link href="/career/position/production">{language?.position_01_07}</Link></li>
                            <li><Link href="/career/position/procurement">{language?.position_01_08}</Link></li>
                            <li><Link href="/career/position/management">{language?.position_01_09}</Link></li>
                        </ul>
                    </div>
                    <div className="position-content sales">
                        <p><Image src="/images/sub/career/position/position-02.png" alt="" width={1420} height={430}/></p>
                        <dl className="sales-01">
                            <dt>{language?.position_01_33}<span>{language?.position_01_34}</span></dt>
                            <dd>
                                <p>{language?.position_01_35}</p>
                                <ul>
                                    <li>{language?.position_01_36}</li>
                                    <li>{language?.position_01_37}</li>
                                    <li>{language?.position_01_38}</li>
                                    <li>{language?.position_01_39}</li>
                                    <li>{language?.position_01_40}</li>
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
