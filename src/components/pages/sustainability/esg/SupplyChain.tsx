'use client';

import "@/app/assets/sustainability/esg.scss";
import Link from "next/link";
import Image from "next/image";
import {useEffect} from "react";

interface Props {
    language?: any;
}

export default function SupplyChain({ language }: Props) {
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
                    <h2>{language?.header_4_5}</h2>
                    <ul className="location">
                        <li>{language?.header_4}</li>
                        <li>{language?.header_4_5}</li>
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
                        <li className="active">
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
                    <li className="active">
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
            <div className="supply-chain-container">
                <section className="esg-section-01">
                    <h2>{language?.esg_text_05_01}</h2>
                    <p>{language?.esg_text_05_02}<br/>{language?.esg_text_05_03}</p>
                </section>
                <section className="esg-section-02">
                    <h2>{language?.esg_text_05_04}</h2>
                    <ul>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_05_05}<br/>{language?.esg_text_05_06}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_05_07}</li>
                                        <li>{language?.esg_text_05_08}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_05_09}<br/>{language?.esg_text_05_10}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_05_11}</li>
                                        <li>{language?.esg_text_05_12}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_05_13}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_05_14}</li>
                                        <li>{language?.esg_text_05_15}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_05_16}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_05_17}</li>
                                        <li>{language?.esg_text_05_18}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>
                <section className="esg-section-03">
                    <h2>{language?.esg_text_05_19}</h2>
                    <ul>
                        <li>{language?.esg_text_05_20}<br/>{language?.esg_text_05_21}</li>
                        <li>{language?.esg_text_05_22}<br/>{language?.esg_text_05_23}</li>
                        <li>{language?.esg_text_05_24}<br/>{language?.esg_text_05_25}</li>
                        <li>{language?.esg_text_05_26}</li>
                        <li>{language?.esg_text_05_27}<br/>{language?.esg_text_05_28}</li>
                        <li>{language?.esg_text_05_29}<br/>{language?.esg_text_05_30}</li>
                        <li>{language?.esg_text_05_31}<br/>{language?.esg_text_05_32}</li>
                    </ul>
                    <div>
                        <Image src="/images/sub/sustainability/esg/supply-chain-01.png" alt="" width={830} height={656}/>
                        <div>
                            <p>{language?.esg_text_05_33}</p>
                            <Link href="#">{language?.esg_text_05_34}</Link>
                        </div>
                    </div>
                </section>
                <section className="esg-section-04">
                    <h2>{language?.esg_text_05_35}</h2>
                    <ul>
                        <li>
                            <dl>
                                <dt>01</dt>
                                <dd>
                                    {language?.esg_text_05_36}
                                    <Link href="#">{language?.esg_text_05_40}</Link>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>02</dt>
                                <dd>
                                    {language?.esg_text_05_37}
                                    <Link href="#">{language?.esg_text_05_40}</Link>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>03</dt>
                                <dd>
                                    {language?.esg_text_05_38}
                                    <Link href="#">{language?.esg_text_05_40}</Link>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>04</dt>
                                <dd>
                                    {language?.esg_text_05_39}
                                    <Link href="#">{language?.esg_text_05_40}</Link>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}
