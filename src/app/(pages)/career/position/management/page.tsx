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
                            {language.language === 'kr' && <li className="go"><Link href="/career/application#job-application-list">{language?.position_01_03}</Link></li>}
                        </ul>
                    </div>
                    <div className="position-list">
                        <ul>
                            <li><Link href="/career/position/quality">{language?.position_01_04}</Link></li>
                            <li><Link href="/career/position/sales">{language?.position_01_05}</Link></li>
                            <li><Link href="/career/position/rnd">{language?.position_01_06}</Link></li>
                            <li><Link href="/career/position/production">{language?.position_01_07}</Link></li>
                            <li><Link href="/career/position/procurement">{language?.position_01_08}</Link></li>
                            <li className="active"><Link href="/career/position/management">{language?.position_01_09}</Link></li>
                        </ul>
                    </div>
                    <div className="position-content management">
                        <p><Image src="/images/sub/career/position/position-06.png" alt="" width={1420} height={430}/></p>
                        <dl className="management-01">
                            <dt>{language?.position_01_84}<span>{language?.position_01_85}</span></dt>
                            <dd>
                                <p>{language?.position_01_86}</p>
                                <ul>
                                    <li>{language?.position_01_87}</li>
                                    <li>{language?.position_01_88}</li>
                                    <li>{language?.position_01_89}</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl className="management-02">
                            <dt>{language?.position_01_90}<span>{language?.position_01_101}</span></dt>
                            <dd>
                                <p>{language?.position_01_102}</p>
                                <ul>
                                    <li>{language?.position_01_103}</li>
                                    <li>{language?.position_01_104}</li>
                                    <li>{language?.position_01_105}</li>
                                    <li>{language?.position_01_106}</li>
                                    <li>{language?.position_01_107}</li>
                                    <li>{language?.position_01_108}</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl className="management-05">
                            <dt>{language?.position_01_130}<span>{language?.position_01_131}</span></dt>
                            <dd>
                                <p>{language?.position_01_132}</p>
                                <ul>
                                    <li>{language?.position_01_133}</li>
                                    <li>{language?.position_01_134}</li>
                                    <li>{language?.position_01_135}</li>
                                    <li>{language?.position_01_136}</li>
                                    <li>{language?.position_01_137}</li>
                                    <li>{language?.position_01_138}</li>
                                </ul>
                            </dd>
                        </dl>

                        <dl className="management-03">
                            <dt>{language?.position_01_109}<span>{language?.position_01_109_02}</span></dt>
                            <dd>
                                <p>{language?.position_01_110}</p>
                                <ul>
                                    <li>{language?.position_01_111}</li>
                                    <li>{language?.position_01_112}</li>
                                    <li>{language?.position_01_113}</li>
                                    <li>{language?.position_01_114}</li>
                                    <li>{language?.position_01_115}</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl className="management-04">
                            <dt>{language?.position_01_116}<span>{language?.position_01_116_02}</span></dt>
                            <dd>
                                <p>{language?.position_01_117}</p>
                                <ul>
                                    <li>{language?.position_01_118}</li>
                                    <li>{language?.position_01_119}</li>
                                    <li>{language?.position_01_120}</li>
                                    <li>{language?.position_01_121}</li>
                                    <li>{language?.position_01_121_2}</li>
                                    <li>{language?.position_01_121_3}</li>
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
