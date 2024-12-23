import "@/app/assets/company/philosopy.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";

export default async function HistoryPage({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="philosopy">
                <div className="container-header-01">
                    <h2>{language?.philosopy_01}</h2>
                    <ul className="location">
                        <li>{language?.header_1}</li>
                        <li>{language?.header_1_3}</li>
                    </ul>
                </div>
                <div className="philosopy-container">
                    <section className="philosopy-01">
                        <Image src="/images/sub/company/management-philosopy/philosopy-01.png" alt="" width={1920} height={1080}/>
                        <p>{language?.philosopy_02}<br/>{language?.philosopy_02_02}</p>
                    </section>
                    <section className="philosopy-02">
                        <h3>{language?.philosopy_03}</h3>
                        <div>
                            <dl>
                                <dt>{language?.philosopy_05}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.philosopy_06}</li>
                                        <li>{language?.philosopy_07}</li>
                                        <li>{language?.philosopy_08}</li>
                                        <li>{language?.philosopy_09}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt>{language?.philosopy_11}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.philosopy_12}</li>
                                        <li>{language?.philosopy_13}</li>
                                        <li>{language?.philosopy_14}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt>{language?.philosopy_16}</dt>
                                <dd>
                                    <ul>
                                        <li>{language?.philosopy_17}</li>
                                        <li>{language?.philosopy_18}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </section>

                    <section className="philosopy-03">
                        <h3>{language?.philosopy_19}</h3>
                        <div>
                            <dl>
                                <dt>{language?.philosopy_20}</dt>
                                <dd>
                                    <ul>
                                        <li>
                                            <p>{language?.philosopy_21}</p>
                                            <p>{language?.philosopy_22}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_23}</p>
                                            <p>{language?.philosopy_24}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_25}</p>
                                            <p>{language?.philosopy_26}</p>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt>{language?.philosopy_27}</dt>
                                <dd>
                                    <ul>
                                        <li>
                                            <p>{language?.philosopy_28}</p>
                                            <p>{language?.philosopy_29}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_30}</p>
                                            <p>{language?.philosopy_31}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_32}</p>
                                            <p>{language?.philosopy_33}</p>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt>{language?.philosopy_34}</dt>
                                <dd>
                                    <ul>
                                        <li>
                                            <p>{language?.philosopy_35}</p>
                                            <p>{language?.philosopy_46}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_37}</p>
                                            <p>{language?.philosopy_38}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_39}</p>
                                            <p>{language?.philosopy_40}</p>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt>{language?.philosopy_41}</dt>
                                <dd>
                                    <ul>
                                        <li>
                                            <p>{language?.philosopy_42}</p>
                                            <p>{language?.philosopy_43}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_44}</p>
                                            <p>{language?.philosopy_45}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_46}</p>
                                            <p>{language?.philosopy_47}</p>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt>{language?.philosopy_48}</dt>
                                <dd>
                                    <ul>
                                        <li>
                                            <p>{language?.philosopy_49}</p>
                                            <p>{language?.philosopy_50}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_51}</p>
                                            <p>{language?.philosopy_52}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_53}</p>
                                            <p>{language?.philosopy_54}</p>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt>{language?.philosopy_55}</dt>
                                <dd>
                                    <ul>
                                        <li>
                                            <p>{language?.philosopy_56}</p>
                                            <p>{language?.philosopy_57}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_58}</p>
                                            <p>{language?.philosopy_59}</p>
                                        </li>
                                        <li>
                                            <p>{language?.philosopy_60}</p>
                                            <p>{language?.philosopy_61}</p>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </section>

                    <section className="philosopy-04">
                        <p>{language?.philosopy_62}</p>
                    </section>
                </div>
            </div>
            <Footer language={language}/>
        </>
    )
}
