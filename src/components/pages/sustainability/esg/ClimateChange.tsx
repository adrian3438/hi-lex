'use client';

import "@/app/assets/sustainability/esg.scss";
import Link from "next/link";
import Image from "next/image";
import {useEffect} from "react";

interface Props {
    language?: any;
}

export default function ClimateChange({ language }: Props) {
    useEffect(() => {
        const element = document.querySelector('#esgMenus');
        if (element) {
            const rect = element.getBoundingClientRect();
            const offset = 100; // 100px 덜 스크롤
            window.scrollTo({
                top: window.scrollY + rect.top - offset,
                behavior: 'smooth',
            });
        }
    }, []);



    return (
        <div className="esg">
            <div className="esg-banner">
                <div className="banner-area1">
                    <ul className="location">
                        <li>{language?.header_4}</li>
                        <li>{language?.header_4_2}</li>
                    </ul>
                    <h2>{language?.header_4_2}</h2>
                        <p>{language?.esg_text_01}</p>
                        <p>{language?.esg_text_02}</p>
                </div>
                {/*<div className="esg-menu">
                    <ul>
                        <li>
                            <Link href="/sustainability/esg-management">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_03}</p>}
                                    <p>{language?.esg_text_04}</p>
                                </div>
                            </Link>
                        </li>
                        <li className="active">
                            <Link href="/sustainability/climate-change">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_05}</p>}
                                    <p>{language?.esg_text_06}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/ethical-business">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_07}</p>}
                                    <p>{language?.esg_text_08}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/ehs">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_09}</p>}
                                    <p>{language?.esg_text_10}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/supply-chain">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_11}</p>}
                                    <p>{language?.esg_text_12}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/quality-management">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_13}</p>}
                                    <p>{language?.esg_text_14}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/sustainability-report">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_15}</p>}
                                    <p>{language?.esg_text_16}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/whistleblower-complaint">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_17}</p>}
                                    <p>{language?.esg_text_18}</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>*/}
            </div>
           
           
           {/* <div className="esg-menus" id="esgMenus"> */}
            <div className="esg-menus">
                <ul className="esg-menu-list">
                    <li>
                        <Link href="/sustainability/esg-management">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_03}</p>}
                                <p>{language?.esg_text_04}</p>
                            </div>
                        </Link>
                    </li>
                    <li className="active">
                        <Link href="/sustainability/climate-change">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_05}</p>}
                                <p>{language?.esg_text_06}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/ethical-business">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_07}</p>}
                                <p>{language?.esg_text_08}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/ehs">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_09}</p>}
                                <p>{language?.esg_text_10}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/supply-chain">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_11}</p>}
                                <p>{language?.esg_text_12}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/quality-management">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_13}</p>}
                                <p>{language?.esg_text_14}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/sustainability-report">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_15}</p>}
                                <p>{language?.esg_text_16}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/whistleblower-complaint">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_17}</p>}
                                <p>{language?.esg_text_18}</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="climate-container">
                <section className="esg-section-01">
                    <div className="climate-container-section-01">
                    <h3>{language?.esg_text_02_01}</h3>
                    <p>{language?.esg_text_02_02}{language?.esg_text_02_02_01}</p>
                    </div>
                    <div className="image-wrapper">
                    <Image src={`/images/sub/sustainability/esg/esg-02-img-01-${language?.language}.png`} alt="" width={1562} height={917}/>
                    </div>
                    
                    {/* <div className="carbon-table-wrap">
                    <table className="carbon-table">
                        <thead>
                        <tr>
                            <th>Year</th>
                            <th>2024</th>
                            <th>2030</th>
                            <th>2035</th>
                            <th>2040</th>
                            <th>2045</th>
                            <th>2050</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SCOPE-1</td>
                            <td>78</td>
                            <td>70</td>
                            <td>55</td>
                            <td>32</td>
                            <td>16</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>SCOPE-2</td>
                            <td>3,806</td>
                            <td>3,424</td>
                            <td>2,664</td>
                            <td>1,522</td>
                            <td>761</td>
                            <td>0</td>
                        </tr>
                        <tr className="total-row">
                            <td>TOTAL</td>
                            <td>3,884</td>
                            <td>3,494</td>
                            <td>2,719</td>
                            <td>1,554</td>
                            <td>777</td>
                            <td>0</td>
                        </tr>
                        </tbody>
                    </table>
                    </div> */}
                </section>


                <section className="esg-section-02">
                    <div className="subject">
                        <h3>{language?.esg_text_02_05}</h3>
                    </div>
                     <div className="text">
                        <h2>{language?.esg_text_02_06}</h2>
                        <p>{language?.esg_text_02_07}</p>
                        <p>{language?.esg_text_02_08}</p>
                        <p>{language?.esg_text_02_09}</p>
                        <p>{language?.esg_text_02_10}</p>
                         <Link href="#">{language?.esg_text_02_11}</Link>
                         <Image src="/images/sub/sustainability/esg/esg-02-img-03.png" alt="" width={1107} height={612}/>
                    </div>
                </section>

                 <section className="esg-section-02">
                    <div className="subject">
                        <h3>{language?.esg_text_02_12}</h3>
                    </div>
                     <div className="text">
                        <h2>{language?.esg_text_02_14}</h2>
                        <p>{language?.esg_text_02_16}</p>
                        <p>{language?.esg_text_02_17}</p>
                        <p>{language?.esg_text_02_18}</p>
                        <p>{language?.esg_text_02_19}</p>
                        <Link href="#">{language?.esg_text_02_20}</Link>
                         <Image src="/images/sub/sustainability/esg/esg-02-img-05.png" alt="" width={1107} height={612}/>
                    </div>
                </section>

                 <section className="esg-section-02">
                    <div className="subject">
                        <h3>{language?.esg_text_02_21}</h3>
                    </div>
                     <div className="text">
                        <h2>{language?.esg_text_02_22}</h2>
                        <p>{language?.esg_text_02_24}</p>
                        <Link href="#">{language?.esg_text_02_25}</Link>
                         <Image src="/images/sub/sustainability/esg/esg-02-img-07.png" alt="" width={1107} height={612}/>
                    </div>
                </section>


                <section className="philosopy-03">
                        <Image className="left" src="/images/sub/company/management-philosopy/dddr-vertical-left.png" alt="" width={24} height={296}/>
                        <div>
                        <h3>{language?.esg_text_02_26}<br/>{language?.esg_text_02_27}</h3><br/>
                        <p>{language?.esg_text_02_28}</p><br/>
                        <p>{language?.esg_text_02_29}</p>
                        </div>
                        <Image className="right" src="/images/sub/company/management-philosopy/dddr-vertical-right.png" alt="" width={24} height={296}/>
                </section>

                <section className="esg-section-04">
                    <p className="text">{language?.esg_text_02_30}</p>
                    <div className="button">
                        <Link href="/company/contact-us">{language?.esg_text_02_31}</Link>
                    </div>
                </section>
            </div>
        </div>
    )
}
