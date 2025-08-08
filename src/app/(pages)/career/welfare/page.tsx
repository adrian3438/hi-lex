import "@/app/assets/career/welfare.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import CareerHeader from "@/components/career/CareerHeader";
import Image from "next/image";

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
                        <div>
                            <p>{language?.welfare_02}</p>
                            <p>{language?.welfare_03}</p>
                            <p>{language?.welfare_04}</p>
                        </div>
                    </div>
                    <div className="bg-area">
                        {/* <div>
                            <p>{language?.welfare_02}</p>
                            <p>{language?.welfare_03}</p>
                            <p>{language?.welfare_04}</p>
                        </div> */}
                    </div>
                    <p className="bg-area-2">
                        <Image src="/images/common/logobarwide.png" alt="" width={1600} height={24}/>
                    </p>
                    <section className="welfare-01">
                        <h4>{language?.welfare_05}</h4>
                        <div>
                            <dl>
                                <dt>{language?.welfare_06}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-01.png) no-repeat 50% 0"}}><p>{language?.welfare_07}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-02.png) no-repeat 50% 0"}}><p>{language?.welfare_08}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-03.png) no-repeat 50% 0"}}><p>{language?.welfare_09}</p></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_10}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-04.png) no-repeat 50% 0"}}><p>{language?.welfare_11}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-05.png) no-repeat 50% 0"}}><p>{language?.welfare_12}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-06.png) no-repeat 50% 0"}}><p>{language?.welfare_13}</p></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_14}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-07.png) no-repeat 50% 0"}}><p>{language?.welfare_15}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-08.png) no-repeat 50% 0"}}><p>{language?.welfare_16}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-09.png) no-repeat 50% 0"}}><p>{language?.welfare_17}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-10.png) no-repeat 50% 0"}}><p>{language?.welfare_18}</p></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_19_01}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-11.png) no-repeat 50% 0"}}><p>{language?.welfare_24}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-12.png) no-repeat 50% 0"}}><p>{language?.welfare_25}</p></li>
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
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-13.png) no-repeat 50% 0"}}><p>{language?.welfare_28}</p></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_29}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-14.png) no-repeat 50% 0"}}><p>{language?.welfare_30}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-15.png) no-repeat 50% 0"}}><p>{language?.welfare_31}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-16.png) no-repeat 50% 0"}}><p>{language?.welfare_32}</p></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_33}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-17.png) no-repeat 50% 0"}}><p>{language?.welfare_34}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-18.png) no-repeat 50% 0"}}><p>{language?.welfare_35}</p></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_21}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-19.png) no-repeat 50% 0"}}><p>{language?.welfare_22}</p></li>
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
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-20.png) no-repeat 50% 0"}}><p>{language?.welfare_38}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-21.png) no-repeat 50% 0"}}><p>{language?.welfare_39}</p></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>{language?.welfare_40}</dt>
                                <dd>
                                    <ul>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-22.png) no-repeat 50% 0"}}><p>{language?.welfare_41}</p></li>
                                        <li style={{background: "url(/images/sub/career/welfare/welfare-24.png) no-repeat 50% 0"}}><p>{language?.welfare_43}</p></li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </section>
                    <div className="warefare-inquiry">
                      <p>{language?.welfare_44}{language?.welfare_45}</p>
                      <p>{language?.welfare_46}</p>
                    </div>
                </div>
            </div>
            <Footer language={language}/>
        </>
    )
}
