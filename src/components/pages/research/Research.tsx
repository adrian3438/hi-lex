'use client';

import "@/app/assets/research/research.scss";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

interface Props {
    language: any
}

export default function Research({language}: Props) {
    const [imageIndex, setImageIndex] = useState<number>(0);

    return (
        <div className="research">
            <div className="research-banner">
                    <div>
                    <ul className="location">
                    <li>{language?.header_3}</li>
                    </ul>
                    <h2>{language?.research_01}</h2>
                    </div>

                    <Image src="/images/sub/research/research-banner.png" alt="" width={1620} height={800}/>

                    <div className="research-text">
                    <p className="text-01">{language?.research_02}</p>
                    <p className="text-02">{language?.research_04}</p>
                    </div>
            </div>

            <div className="title-area">
                <h2>Discover Our Technologies</h2>
                {/* <Image src="/images/sub/research/research-title.png" alt="Discover Our Technologies" width={1249.08} height={93.75} /> */}
            </div>
            <div className={`link-area ${imageIndex === 0 ? 'link-area1' : ''} ${imageIndex === 1 ? 'link-area2' :  ''} ${imageIndex === 2 ? 'link-area3' :  ''} ${imageIndex === 3 ? 'link-area4' :  ''}`}

            >
                <ul>
                    <li>
                        <Link href="/research/e-latch" onMouseOver={() => setImageIndex(0)}>
                            <p>{language?.research_06}</p>
                            <div>
                                <dl>
                                    <dt>{language?.research_06}<span>{language?.research_07}</span></dt>
                                    <dd>{language?.research_09}</dd>
                                </dl>
                                <p>{language?.research_05}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/research/pds" onMouseOver={() => setImageIndex(1)}>
                            <p>{language?.research_10}</p>
                            <div>
                                <dl>
                                    <dt>{language?.research_10}</dt>
                                    <dd>{language?.research_11}</dd>
                                </dl>
                                <p>{language?.research_05}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/research/power-lift-gate" onMouseOver={() => setImageIndex(2)}>
                            <p>{language?.research_12}</p>
                            <div>
                                <dl>
                                    <dt>{language?.research_12}</dt>
                                    <dd>{language?.research_13}</dd>
                                </dl>
                                <p>{language?.research_05}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/research/power-hood" onMouseOver={() => setImageIndex(3)}>
                            <p>{language?.research_14}</p>
                            <div>
                                <dl>
                                    <dt>{language?.research_14}</dt>
                                    <dd>{language?.research_15}</dd>
                                </dl>
                                <p>{language?.research_05}</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>


            <div className="research-text-03">
                      <div className="research-text-image-03">
                        <Image src="/images/sub/research/dddr-d-big.svg" alt="" width={500} height={500}/>
                        <div>
                          <h3>{language?.research_16}</h3>
                          <p>{language?.research_17} {language?.research_18}</p>
                          <p>{language?.research_19} {language?.research_19_02}</p>
                          <p>{language?.research_20}<br/>{language?.research_21}</p>
                          <p>{language?.research_22}{language?.research_23}</p>
                          <p>{language?.research_24}{language?.research_25}</p>
                          <p>{language?.research_25_02}</p>
                        </div>
                      </div>
            </div>


            <div className="research-container">
                
                <section className="related-contents">
                    <h3>{language?.research_26}</h3>
                    <ul>
                        <li className="research-01">
                            <Link href="/research/new-technology">
                                <Image src="/images/sub/research/research-01.png" alt="" width={510} height={443}/>
                                <div>
                                    {language?.research_27}
                                    {language?.research_29}
                                    {language?.research_30}
                                </div>
                            </Link>
                        </li>
                        <li className="research-02">
                            <Link href="#">
                                <Image src="/images/sub/research/research-02.png" alt="" width={510} height={443}/>
                                <div>
                                    {language?.research_31}
                                    {language?.research_32}
                                    {language?.research_33}
                                </div>
                            </Link>
                        </li>
                        <li className="research-03">
                            <Link href="#">
                                <Image src="/images/sub/research/research-03.png" alt="" width={510} height={443}/>
                                <div>
                                    {language?.research_34}
                                    {language?.research_35}
                                    {language?.research_36}
                                </div>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}
