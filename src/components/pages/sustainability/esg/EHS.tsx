import "@/app/assets/sustainability/esg.scss";
import Link from "next/link";
import Image from "next/image";

interface Props {
    language?: any;
}

export default function EHS({ language }: Props) {
    return (
        <div className="esg">
            <div className="esg-banner">
                <div className="banner-area1">
                    <h2>{language?.header_4_3}</h2>
                    <ul className="location">
                        <li>{language?.header_4}</li>
                        <li>{language?.header_4_3}</li>
                    </ul>
                </div>
                <div className="banner-area2">
                    <p>{language?.esg_text_01}</p>
                    <p>{language?.esg_text_02}</p>
                </div>
                <div className="esg-menu">
                    <ul>
                        <li>
                            <Link href="/sustainability/esg/esg-management">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_03}</p>}
                                    <p>{language?.esg_text_04}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/esg/climate-change">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_05}</p>}
                                    <p>{language?.esg_text_06}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/esg/ethical-business">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_07}</p>}
                                    <p>{language?.esg_text_08}</p>
                                </div>
                            </Link>
                        </li>
                        <li className="active">
                            <Link href="/sustainability/esg/ehs">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_09}</p>}
                                    <p>{language?.esg_text_10}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/esg/supply-chain">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_11}</p>}
                                    <p>{language?.esg_text_12}</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="ehs-container">
                <section className="esg-section-01">
                    <h3>{language?.esg_text_03_60}</h3>
                    <p>{language?.esg_text_03_61}</p>
                </section>
                <section className="esg-section-02">
                    <Image src="/images/sub/sustainability/esg/ehs-02.png" alt="" width={1600} height={2133}/>
                    <div className="top">
                        <div className="image-area1">
                            <p>
                                {language?.esg_text_03_62}<br/>
                                {language?.esg_text_03_63}
                            </p>
                        </div>
                        <div className="image-area2">
                            <div>
                                <h3>{language?.esg_text_03_64}</h3>
                                <p>{language?.esg_text_03_65}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>{language?.esg_text_03_66}</p>
                        <Link href="#">{language?.esg_text_03_67}</Link>
                    </div>
                </section>
                <section className="esg-section-02">
                    <Image src="/images/sub/sustainability/esg/ehs-04.png" alt="" width={1600} height={1067}/>
                    <div className="top">
                        <div className="image-area1">
                            <p>
                                {language?.esg_text_03_68}<br/>
                                {language?.esg_text_03_69}
                            </p>
                        </div>
                        <div className="image-area2">
                            <div>
                                <h3>{language?.esg_text_03_70}</h3>
                                <p>{language?.esg_text_03_71}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>{language?.esg_text_03_72}</p>
                        <p>{language?.esg_text_03_73}</p>
                        <Link href="#">{language?.esg_text_03_74}</Link>
                    </div>
                </section>

                <section className="esg-section-02">
                    <Image src="/images/sub/sustainability/esg/ehs-06.png" alt="" width={1600} height={1600}/>
                    <div className="top">
                        <div className="image-area1">
                            <p>
                                {language?.esg_text_03_75}<br/>
                                {language?.esg_text_03_76}
                            </p>
                        </div>
                        <div className="image-area2">
                            <div>
                                <h3>{language?.esg_text_03_77}</h3>
                                <p>{language?.esg_text_03_78}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>{language?.esg_text_03_79}</p>
                        <p>{language?.esg_text_03_80}</p>
                        <Link href="#">{language?.esg_text_03_81}</Link>
                    </div>
                </section>
            </div>
        </div>
    )
}
