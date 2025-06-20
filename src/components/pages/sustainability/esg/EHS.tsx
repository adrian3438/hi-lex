'use client';

import "@/app/assets/sustainability/esg.scss";
import Link from "next/link";
import Image from "next/image";
import {useEffect} from "react";

interface Props {
    language?: any;
}

export default function EHS({ language }: Props) {
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
                    <h2>{language?.header_4_4}</h2>
                    <ul className="location">
                        <li>{language?.header_4}</li>
                        <li>{language?.header_4_4}</li>
                    </ul>
                </div>
                <div className="banner-area2">
                    <p>{language?.esg_text_01}</p>
                    <p>{language?.esg_text_02}</p>
                </div>
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
                    <li className="active">
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
            <div className="ehs-container">
                <section className="esg-section-01">
                    <h3>{language?.esg_text_03_60}</h3>
                    <p>{language?.esg_text_03_61}</p>
                    <p>{language?.esg_text_03_61_01}</p>
                </section>
                <section className="esg-section-02">
                    <div>
                        <Image src="/images/sub/sustainability/esg/ehs-02.png" alt="" width={501} height={334}/>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src="/images/sub/sustainability/esg/ehs-04.png" alt="" width={501} height={334}/>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src="/images/sub/sustainability/esg/ehs-06.png" alt="" width={501} height={334}/>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image
                    src={`/images/sub/sustainability/esg/daedong-door-ehs-01-${language?.language.toUpperCase() || 'EN'}.svg`}
                    alt=""
                    width={900}
                    height={700}
                    style={{ display: "block", margin: "0 auto", marginTop: "200px", maxWidth: '900px', width: '100%', height: 'auto'}}
                    />
                </section>

                <section className="esg-section-03">
                    <h3>ACTION PLAN</h3>

                    <Image
                    src="/images/sub/sustainability/esg/daedong-door-ehs-02.svg"
                    alt=""
                    width={1000}
                    height={400}
                    style={{ display: "block", margin: "0 auto", marginBottom: "100px", maxWidth: '1000px', width: '100%', height: 'auto'}}
                    />
                    <ul>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_09_01}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_09_02}</li>
                                        <li>{language?.esg_text_09_03}</li>
                                        <li>{language?.esg_text_09_04}</li>
                                        <li>{language?.esg_text_09_05}</li>
                                        <li>{language?.esg_text_09_06}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_09_07}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_09_08}</li>
                                        <li>{language?.esg_text_09_09}</li>
                                        <li>{language?.esg_text_09_10}</li>
                                        <li>{language?.esg_text_09_11}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_09_12}</dt>
                                <dd>
                                    <ul>
                                    <li>{language?.esg_text_09_13}</li>
                                    <li>{language?.esg_text_09_14}</li>
                                    <li>{language?.esg_text_09_15}</li>
                                    <li>{language?.esg_text_09_16}</li>
                                    <li>{language?.esg_text_09_17}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_09_18}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_09_19}</li>
                                        <li>{language?.esg_text_09_20}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_09_21}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_09_22}</li>
                                        <li>{language?.esg_text_09_23}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_09_24}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_09_25}</li>
                                        <li>{language?.esg_text_09_26}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    )
}
