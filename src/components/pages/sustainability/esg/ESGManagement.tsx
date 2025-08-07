'use client';

import "@/app/assets/sustainability/esg.scss";
import Link from "next/link";
import {useEffect} from "react";
import Image from "next/image";

interface Props {
    language?: any;
}

export default function ESGManagement({ language }: Props) {
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
                        <li>{language?.header_4_1}</li>
                    </ul>
                    <h2>{language?.header_4_1}</h2>
                    <p>{language?.esg_text_01}</p>
                    <p>{language?.esg_text_02}</p>
                </div>
            </div>

            {/* <div className="esg-menus" id="esgMenus"> */}
            <div className="esg-menus">
                <ul className="esg-menu-list">
                    <li className="active">
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


            <div className="esg-container">
                <section className="esg-section-01">
                    <div className="esg-section-header">
                    <h3>{language?.esg_text_01_01}</h3>
                    <p>{language?.esg_text_01_02}</p>
                    </div>
                    <ul>
                        <li>
                            <p>{language?.esg_text_01_03}</p>
                            <div>
                            </div>
                            <dl>
                                <dt>{language?.esg_text_01_05}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_01_06}</li>
                                        <li>{language?.esg_text_01_07}</li>
                                        <li>{language?.esg_text_01_08}</li>
                                        <li>{language?.esg_text_01_09}</li>
                                        <li>{language?.esg_text_01_10}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <p>{language?.esg_text_01_11}</p>
                            <div>
                            </div>
                            <dl>
                                <dt>{language?.esg_text_01_13_01}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_01_13}</li>
                                        <li>{language?.esg_text_01_14}</li>
                                        <li>{language?.esg_text_01_15}</li>
                                        <li>{language?.esg_text_01_16}</li>
                                        <li>{language?.esg_text_01_17}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <p>{language?.esg_text_01_19}</p>
                            <div>
                            </div>
                            <dl>
                                <dt>{language?.esg_text_01_20}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_01_21}</li>
                                        <li>{language?.esg_text_01_22}</li>
                                        <li>{language?.esg_text_01_23}</li>
                                        <li>{language?.esg_text_01_24}</li>
                                        <li>{language?.esg_text_01_25}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>

                <section className="esg-section-02">
                    <h3>{language?.esg_text_01_26}</h3>
                    <ul>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_01_27}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_01_28}</li>
                                        <li>{language?.esg_text_01_29}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_01_30}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_01_31}</li>
                                        <li>{language?.esg_text_01_32}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_01_33}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_01_34}</li>
                                        <li>{language?.esg_text_01_35}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_01_36}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_01_37}</li>
                                        <li>{language?.esg_text_01_38}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_01_39}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_01_40}</li>
                                        <li>{language?.esg_text_01_41}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>{language?.esg_text_01_42}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.esg_text_01_43}</li>
                                        <li>{language?.esg_text_01_44}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>

                {/*<section className="esg-section-03">
                    <h3>{language?.esg_text_01_45}</h3>
                    <div>
                        <p className="esg-section-text-01">{language?.esg_text_01_46}</p>
                        <p className="esg-section-text-02">{language?.esg_text_01_46_01}</p>
                        <p className="esg-section-text-03">{language?.esg_text_01_47}</p>
                        <ul>
                            <li className="esg-section-text-04">{language?.esg_text_01_48}</li>
                            <li className="esg-section-text-05">{language?.esg_text_01_49}</li>
                            <li className="esg-section-text-06">{language?.esg_text_01_50}</li>
                            <li className="esg-section-text-07">{language?.esg_text_01_51}</li>
                            <li className="esg-section-text-08">{language?.esg_text_01_52}</li>
                        </ul>
                    </div>
                </section>*/}

                <section className="esg-section-04">
                    <h3>{language?.esg_text_01_53}</h3>
                    <div>
                        <p className="esg-section-text-01">
                            <Image src="/images/sub/sustainability/esg/esg-01-bg-02.png" alt="" width={60} height={60} />
                            {language?.esg_text_01_54}<br/>({language?.esg_text_01_55})
                        </p>
                        <ul>
                            <li className="esg-section-text-04">
                                <Image src="/images/sub/sustainability/esg/esg-01-bg-04.png" alt="" width={60} height={60} />
                                <p>{language?.esg_text_01_56}</p>
                                <ul>
                                    <li>{language?.esg_text_01_57}</li>
                                    <li>{language?.esg_text_01_58}</li>
                                    <li>{language?.esg_text_01_59}</li>
                                    <li>{language?.esg_text_01_60}</li>
                                    <li>{language?.esg_text_01_61}</li>
                                </ul>
                            </li>
                            <li className="esg-section-text-05">
                                <Image src="/images/sub/sustainability/esg/esg-01-bg-13.png" alt="" width={60} height={60} />
                                <p>{language?.esg_text_01_62}</p>
                                <ul>
                                    <li>{language?.esg_text_01_63}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}
