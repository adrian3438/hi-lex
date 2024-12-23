import "@/app/assets/career/position.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import CareerHeader from "@/components/career/CareerHeader";
import Link from "next/link";
import Image from "next/image";

export default async function FactoryPage({searchParams : {lang}} : any) {
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
                            <li className="introduce factory"><Link href="/career/position/quality">{language?.position_01_01}</Link></li>
                            {language.language === 'kr' && <li className="go"><Link href="#">{language?.position_01_03}</Link></li>}

                        </ul>
                    </div>
                    <div className="position-list">
                        <ul>
                            <li className="active"><Link href="/career/position/management">{language?.position_01_129}</Link></li>
                        </ul>
                    </div>
                    <div className="position-content factory">
                        <p><Image src="/images/sub/career/position/position-07.png" alt="" width={1420} height={430}/></p>
                        <dl className="factory-01">
                            <dt>{language?.position_01_122}<span>{language?.position_01_123}</span></dt>
                            <dd>
                                <p>{language?.position_01_124}</p>
                                <ul>
                                    <li>{language?.position_01_125}</li>
                                    <li>{language?.position_01_126}</li>
                                    <li>{language?.position_01_127}</li>
                                    <li>{language?.position_01_128}</li>
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
