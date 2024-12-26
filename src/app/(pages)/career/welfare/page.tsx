import "@/app/assets/career/welfare.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import CareerHeader from "@/components/career/CareerHeader";

export default async function WelfarePage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="career">
                <CareerHeader language={language} activeIndex={1}/>
                <div className="welfare">
                    <div className="title-area">
                        <h3>{language?.welfare_01}</h3>
                    </div>
                    <div className="bg-area">
                        <div>
                            <p>{language?.welfare_02}</p>
                            <p>{language?.welfare_03}</p>
                            <p>{language?.welfare_04}</p>
                        </div>
                    </div>
                    <section className="welfare-01">
                        <h4>{language?.welfare_05}</h4>
                        <div>
                            <dl>
                                <dt>{language?.welfare_06}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-01.png) no-repeat 50% 0"}}>{language?.welfare_07}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-02.png) no-repeat 50% 0"}}>{language?.welfare_08}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-03.png) no-repeat 50% 0"}}>{language?.welfare_09}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_10}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-04.png) no-repeat 50% 0"}}>{language?.welfare_11}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-05.png) no-repeat 50% 0"}}>{language?.welfare_12}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-06.png) no-repeat 50% 0"}}>{language?.welfare_13}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_14}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-07.png) no-repeat 50% 0"}}>{language?.welfare_15}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-08.png) no-repeat 50% 0"}}>{language?.welfare_16}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-09.png) no-repeat 50% 0"}}>{language?.welfare_17}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-10.png) no-repeat 50% 0"}}>{language?.welfare_18}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_19_01}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-11.png) no-repeat 50% 0"}}>{language?.welfare_24}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-12.png) no-repeat 50% 0"}}>{language?.welfare_25}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </section>
                    <section className="welfare-02">
                        <h4>{language?.welfare_26}</h4>
                        <div>
                            <dl>
                                <dt>{language?.welfare_27}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-13.png) no-repeat 50% 0"}}>{language?.welfare_28}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_29}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-14.png) no-repeat 50% 0"}}>{language?.welfare_30}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-15.png) no-repeat 50% 0"}}>{language?.welfare_31}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-16.png) no-repeat 50% 0"}}>{language?.welfare_32}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_33}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-17.png) no-repeat 50% 0"}}>{language?.welfare_34}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-18.png) no-repeat 50% 0"}}>{language?.welfare_35}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_21}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-19.png) no-repeat 50% 0"}}>{language?.welfare_22}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </section>
                    <section className="welfare-03">
                        <h4>{language?.welfare_36}</h4>
                        <div>
                            <dl>
                                <dt>{language?.welfare_37}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-20.png) no-repeat 50% 0"}}>{language?.welfare_38}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-21.png) no-repeat 50% 0"}}>{language?.welfare_39}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_40}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-22.png) no-repeat 50% 0"}}>{language?.welfare_41}</li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-24.png) no-repeat 50% 0"}}>{language?.welfare_43}</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </section>
                    <p>{language?.welfare_44}<span>{language?.welfare_45}</span>{language?.welfare_46}</p>
                </div>
            </div>
            <Footer language={language}/>
        </>
    )
}
