'use client'

import "@/app/assets/sustainability/esg.scss";
import Link from "next/link";
import {useEffect} from "react";

interface Props {
    language?: any;
}

export default function WhistleblowerComplaintGuide({ language }: Props) {
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
                    <h2>{language?.esg_text_08_39_01}</h2>
                    <ul className="location">
                        <li>{language?.header_4}</li>
                        <li>{language?.esg_text_08_39_01}</li>
                    </ul>
                </div>
                <div className="banner-area2">
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
                        <li>
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
                        <li className="active">
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
                <ul>
                    <li>
                        <Link href="/sustainability/esg-management">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_03}</p>}
                                <p>{language?.esg_text_04}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
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
                    <li className="active">
                        <Link href="/sustainability/whistleblower-complaint">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_17}</p>}
                                <p>{language?.esg_text_18}</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="esg-container">
                <section className="esg-section-01">
                    <h3>{language?.esg_text_08_39_01}</h3>
                    <div className="whistleblower-table">
                        <h4>{language?.esg_text_08_39} <Link href="/sustainability/whistleblower-complaint">{language?.esg_text_08_40}</Link></h4>
                        <table>
                            <tbody>
                            <tr>
                                <td style={{border: "none", padding: "30px 0"}}>
                                    <ul>
                                        <li>{language?.esg_text_08_41}</li>
                                        <li>{language?.esg_text_08_42}</li>
                                        <li>{language?.esg_text_08_43}</li>
                                        <li>{language?.esg_text_08_44}</li>
                                        <li>{language?.esg_text_08_45}</li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="esg-section-01">
                    <div className="whistleblower-table">
                        <h4>{language?.esg_text_08_46}</h4>
                        <table>
                            <tbody>
                            <tr>
                                <th scope="row">{language?.esg_text_08_47}</th>
                                <td>{language?.esg_text_08_48}</td>
                            </tr>
                            <tr>
                                <th scope="row">{language?.esg_text_08_49}</th>
                                <td><span style={{color: "#FE0416"}}>{language?.esg_text_08_50}</span></td>
                            </tr>
                            <tr>
                                <th scope="row">{language?.esg_text_08_51}</th>
                                <td>{language?.esg_text_08_52}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="esg-section-05">
                    <div className="whistleblower-table">
                        <h4>{language?.esg_text_08_53}</h4>
                        <table>
                            <tbody>
                            <tr>
                                <td style={{border: "none", padding: "30px 0"}}>
                                    <ul>
                                        <li>{language?.esg_text_08_54}</li>
                                        <li>{language?.esg_text_08_55}</li>
                                        <li>{language?.esg_text_08_56}</li>
                                        <li>{language?.esg_text_08_57}</li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}
