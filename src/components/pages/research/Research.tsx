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
                    <div>
                        <h2>{language?.research_01}</h2>
                        <p className="text-01">{language?.research_02}<br/>{language?.research_03}</p>
                        <p className="text-02">{language?.research_04}</p>
                    </div>
                </div>
            </div>
            <div className="title-area">
                <Image src="/images/sub/research/research-title.png" alt="Discover Our Technologies" width={1249.08} height={93.75} />
            </div>
            <div className={`link-area ${imageIndex === 0 ? 'link-area1' :  ''} ${imageIndex === 1 ? 'link-area2' :  ''} ${imageIndex === 2 ? 'link-area3' :  ''} ${imageIndex === 3 ? 'link-area4' :  ''}`}

            >
                <ul>
                    <li>
                        <Link href="/research/e-latch" onMouseOver={() => setImageIndex(0)}>
                            <p>{language?.research_06}<span>{language?.research_07}</span></p>
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
            <div className="research-container">
                <section className="research-detail">
                    <h3>{language?.research_16}</h3>
                    <div>
                        {language?.research_17}<br/>
                        {language?.research_18}
                    </div>
                    <div>
                        {language?.research_19}<br/>
                        {language?.research_19_02}
                    </div>
                    <div>
                        {language?.research_20}<br/>
                        {language?.research_21}
                    </div>
                    <div>
                        {language?.research_22}<br/>
                        {language?.research_23}
                    </div>
                    <div>
                        {language?.research_24}<br/>
                        {language?.research_25}<br/>
                        {language?.research_25_02}
                    </div>
                </section>
                <section className="related-contents">
                    <h3>{language?.research_26}</h3>
                    <ul>
                        <li>
                            <Link href="/research/new-technology">
                                <Image src="/images/sub/research/research-01.png" alt="" width={510} height={443}/>
                                <div>
                                    {language?.research_27}<br/>
                                    {language?.research_29}<br/>
                                    {language?.research_30}
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src="/images/sub/research/research-02.png" alt="" width={510} height={443}/>
                                <div>
                                    {language?.research_31}<br/>
                                    {language?.research_32}<br/>
                                    {language?.research_33}
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src="/images/sub/research/research-03.png" alt="" width={510} height={443}/>
                                <div>
                                    {language?.research_34}<br/>
                                    {language?.research_35}<br/>
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
