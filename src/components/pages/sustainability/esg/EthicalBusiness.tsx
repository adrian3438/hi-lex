'use client';
import "@/app/assets/sustainability/esg.scss";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

interface Props {
    language?: any;
}

export default function EthicalBusiness({ language }: Props) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

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
                        <li className="active">
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
            </div>
            <div className="ethical-tab">
                <div>
                    <button onClick={() => setActiveIndex(0)} className={activeIndex === 0 ? 'active' : ''}>{language?.esg_text_03_82}</button>
                    <button onClick={() => setActiveIndex(1)} className={activeIndex === 1 ? 'active' : ''}>{language?.esg_text_03_83}</button>
                    <Link href="/sustainability/whistleblower-complaint">{language?.esg_text_03_84} <Image src="/images/sub/sustainability/arrow-right.png" alt="" width={20} height={20}/></Link>
                </div>
            </div>
            {activeIndex === 0 && (
                <div className="ethical-container">
                    <section className="ethical-01">
                        <h2>{language?.esg_text_03_85}</h2>
                        <ul>
                            <li>
                                <dl>
                                    <dt>{language?.esg_text_03_01} <br/>{language?.esg_text_03_02}</dt>
                                    <dd>
                                        <ul>
                                            <li>
                                                <p>{language?.esg_text_03_03}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_04}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <p>{language?.esg_text_03_05}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_06}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <p>{language?.esg_text_03_07}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_08}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.esg_text_03_09}</dt>
                                    <dd>
                                        <ul>
                                            <li>
                                                <p>{language?.esg_text_03_10}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_11}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <p>{language?.esg_text_03_12}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_13}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <p>{language?.esg_text_03_14}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_15}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.esg_text_03_16}</dt>
                                    <dd>
                                        <ul>
                                            <li>
                                                <p>{language?.esg_text_03_17}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_18}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.esg_text_03_19} <br/>{language?.esg_text_03_19_02}</dt>
                                    <dd>
                                        <ul>
                                            <li>
                                                <p>{language?.esg_text_03_20}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_21}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <p>{language?.esg_text_03_22}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_23}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <p>{language?.esg_text_03_24}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_25}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.esg_text_03_26}</dt>
                                    <dd>
                                        <ul>
                                            <li>
                                                <p>{language?.esg_text_03_27}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_28}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.esg_text_03_29}</dt>
                                    <dd>
                                        <ul>
                                            <li>
                                                <p>{language?.esg_text_03_30}</p>
                                                <div>
                                                    <p>{language?.esg_text_03_31}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </section>
                    <section className="ethical-02">
                        <h2>{language?.esg_text_03_32}</h2>
                        <ul>
                            <li>{language?.esg_text_03_33}</li>
                            <li>{language?.esg_text_03_34}</li>
                            <li>{language?.esg_text_03_35}</li>
                            <li>{language?.esg_text_03_36}</li>
                            <li>{language?.esg_text_03_37}</li>
                            <li>{language?.esg_text_03_38}</li>
                            <li>{language?.esg_text_03_39}</li>
                            <li>{language?.esg_text_03_40}</li>
                            <li>{language?.esg_text_03_41}</li>
                        </ul>
                    </section>
                    <section className="ethical-03">
                        <h2>{language?.esg_text_03_42}</h2>
                        <p>{language?.esg_text_03_43}<br/>{language?.esg_text_03_43_01}</p>
                        <ul>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_45}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_46}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_47}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_48}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_49}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_50}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_51}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_52}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_53}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_54}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_55}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_56}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_57}
                                </div>
                            </li>
                            <li>
                                <p>{language?.esg_text_03_44}</p>
                                <div>
                                    {language?.esg_text_03_58}
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="ethical-04">
                        <p>{language?.esg_text_03_59}</p>
                        <Image src="/images/common/logo.png" alt="대동 하이렉스" width={217} height={36}/>
                    </section>
                </div>
            )}
            {activeIndex === 1 && (
                <div className="ethical-container">
                    <section className="ethical-01">
                        <h2>{language?.esg_text_03_86}</h2>
                        <p className="text">{language?.esg_text_03_87}<br/>{language?.esg_text_03_88}</p>
                    </section>
                    <section className="ethical-01">
                        <h2>{language?.esg_text_03_89}</h2>
                        <p className="text">{language?.esg_text_03_90}</p>
                        <p className="image-01"><Image src={`/images/sub/sustainability/unfair-01-${language?.language}.png`} alt="" width={648} height={346}/></p>
                    </section>
                    <section className="ethical-01">
                        <h2>{language?.esg_text_03_91}</h2>
                        <p className="image-02"><Image src={`/images/sub/sustainability/unfair-02-${language?.language}.png`} alt="" width={1402} height={494}/></p>
                    </section>
                    <div className="button">
                        <Link href="/sustainability/whistleblower-complaint">{language?.esg_text_03_92}</Link>
                    </div>
                </div>
            )}
        </div>
    )
}
