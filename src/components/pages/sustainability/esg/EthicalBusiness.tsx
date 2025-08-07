'use client';
import "@/app/assets/sustainability/esg.scss";
import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";

interface Props {
    language?: any;
}

export default function EthicalBusiness({ language }: Props) {
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

    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className="esg">
            <div className="esg-banner">
                <div className="banner-area1">
                    <ul className="location">
                        <li>{language?.header_4}</li>
                        <li>{language?.header_4_3}</li>
                    </ul>
                    <h2>{language?.header_4_3}</h2>
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
                </div>*/}
            </div>


            {/* <div className="esg-menus" id="esgMenus"> */}
            <div className="esg-menus">
                <ul className="esg-menu-list">
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

            <div className="ethical-tab">
                <div>
                    <button onClick={() => setActiveIndex(0)} className={activeIndex === 0 ? 'active' : ''}>{language?.esg_text_03_82}</button>
                    <button onClick={() => setActiveIndex(1)} className={activeIndex === 1 ? 'active' : ''}>{language?.esg_text_03_83}</button>
                    <button onClick={() => setActiveIndex(2)} className={activeIndex === 2 ? 'active' : ''}>{language?.esg_text_03_84_01}</button>
                    <Link href="/sustainability/whistleblower-complaint">{language?.esg_text_03_84} <Image src="/images/sub/sustainability/arrow-right.png" alt="" width={20} height={20}/></Link>
                </div>
            </div>
            {activeIndex === 0 && (
                <div className="ethical-container">
                    <section className="ethical-01">
                        <h2>{language?.esg_text_03_85}<br/>{language?.esg_text_03_85_01}</h2>
                        <ul>
                            <li className="ethical-01-01">
                                <dl>
                                    <dt>{language?.esg_text_03_01} {language?.esg_text_03_02}</dt>
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
                            <li className="ethical-01-01">
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
                            <li className="ethical-01-02">
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
                            <li className="ethical-01-01">
                                <dl>
                                    <dt>{language?.esg_text_03_19} {language?.esg_text_03_19_02}</dt>
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
                            <li className="ethical-01-02">
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
                            <li className="ethical-01-02">
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
                        <div>
                        <h2>{language?.esg_text_03_42}</h2>
                        <p>{language?.esg_text_03_43}<br/>{language?.esg_text_03_43_01}</p>
                        </div>
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
                        <Image src="/images/common/logo-white.png" alt="대동 하이렉스" width={217} height={36}/>
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

             {activeIndex === 2 && (
                <div className="ethical-container">
                    <section className="ethical-05">
                    <h3>{language?.esg_text_03_93}</h3><br/>    
                    <h2>{language?.esg_text_03_94}</h2>
                    <p className="text">{language?.esg_text_03_95}</p>
                    <p className="text">{language?.esg_text_03_96}</p>
                    </section>


                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_97}</h2>
                    <p className="text">{language?.esg_text_03_98}</p>
                    <p className="text">{language?.esg_text_03_99}</p>
                    <p className="text">{language?.esg_text_03_100}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_101}</h2>
                    <p className="text">{language?.esg_text_03_102}</p>
                    <p className="text">{language?.esg_text_03_103}</p>
                    <p className="text">{language?.esg_text_03_104}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_105}</h2>
                    <p className="text">{language?.esg_text_03_106}</p>
                    <p className="text">{language?.esg_text_03_107}</p>
                    <p className="text">{language?.esg_text_03_108}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_109}</h2>
                    <p className="text">{language?.esg_text_03_110}</p>
                    <p className="text">{language?.esg_text_03_111}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_112}</h2>
                    <p className="text">{language?.esg_text_03_113}</p>
                    <p className="text">{language?.esg_text_03_114}</p>
                    <p className="text">{language?.esg_text_03_115}</p>
                    <p className="text">{language?.esg_text_03_116}</p>
                    <p className="text">{language?.esg_text_03_117}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_118}</h2>
                    <p className="text">{language?.esg_text_03_119}</p>
                    <p className="text">{language?.esg_text_03_120}</p>
                    <p className="text">{language?.esg_text_03_121}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_122}</h2>
                    <p className="text">{language?.esg_text_03_123}</p>
                    <p className="text">{language?.esg_text_03_124}</p>
                    <p className="text">{language?.esg_text_03_125}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_126}</h2>
                    <p className="text">{language?.esg_text_03_127}</p>
                    <p className="text">{language?.esg_text_03_128}</p>
                    </section>
                    

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_129}</h2>
                    <p className="text">{language?.esg_text_03_130}</p>
                    <p className="text">{language?.esg_text_03_131}</p>
                    <p className="text">{language?.esg_text_03_132}</p>
                    <p className="text">{language?.esg_text_03_133}</p>
                    <p className="text">{language?.esg_text_03_134}</p>
                    <p className="text">{language?.esg_text_03_135}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_136}</h2>
                    <p className="text">{language?.esg_text_03_137}</p>
                    <p className="text">{language?.esg_text_03_138}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_139}</h2>
                    <p className="text">{language?.esg_text_03_140}</p>
                    <p className="text">{language?.esg_text_03_141}</p>
                    <p className="text">{language?.esg_text_03_142}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_143}</h2>
                    <p className="text">{language?.esg_text_03_144}</p>
                    <p className="text">{language?.esg_text_03_145}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_146}</h2>
                    <p className="text">{language?.esg_text_03_147}</p>
                    <p className="text">{language?.esg_text_03_148}</p>
                    </section>


                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_149}</h2>
                    <p className="text">{language?.esg_text_03_151}</p>
                    <p className="text">{language?.esg_text_03_152}</p>
                    <p className="text">{language?.esg_text_03_153}</p>
                    <p className="text">{language?.esg_text_03_154}</p>
                    <p className="text">{language?.esg_text_03_155}</p>
                    <p className="text">{language?.esg_text_03_156}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_157}</h2>
                    <p className="text">{language?.esg_text_03_158}</p>
                    <p className="text">{language?.esg_text_03_159}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_160}</h2>
                    <p className="text">{language?.esg_text_03_161}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_162}</h2>
                    <p className="text">{language?.esg_text_03_163}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_164}</h2>
                    <p className="text">{language?.esg_text_03_165}</p>
                    <p className="text">{language?.esg_text_03_166}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_167}</h2>
                    <p className="text">{language?.esg_text_03_168}</p>
                    </section>

                    <section className="ethical-05">
                    <h3>{language?.esg_text_03_169}</h3><br/>
                    <h2>{language?.esg_text_03_170}</h2>
                    <p className="text">{language?.esg_text_03_171}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_172}</h2>
                    <p className="text">{language?.esg_text_03_173}</p>
                    </section>


                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_174}</h2>
                    <p className="text">{language?.esg_text_03_175}</p>
                    <p className="text">{language?.esg_text_03_176}</p>
                    <p className="text">{language?.esg_text_03_177}</p>
                    <p className="text">{language?.esg_text_03_178}</p>
                    <p className="text">{language?.esg_text_03_179}</p>
                    <p className="text">{language?.esg_text_03_180}</p>
                    <p className="text">{language?.esg_text_03_181}</p>
                    <p className="text">{language?.esg_text_03_182}</p>
                    <p className="text">{language?.esg_text_03_183}</p>
                    <p className="text">{language?.esg_text_03_184}</p>
                    </section>

                    <section className="ethical-05">
                    <p className="text"><span>{language?.esg_text_03_185}</span></p>
                    <p className="text">{language?.esg_text_03_186}</p>
                    <p className="text">{language?.esg_text_03_187}</p>
                    <p className="text">{language?.esg_text_03_188}</p>
                    <p className="text">{language?.esg_text_03_189}</p>
                    <p className="text">{language?.esg_text_03_190}</p>
                    <p className="text">{language?.esg_text_03_191}</p>
                    <p className="text">{language?.esg_text_03_192}</p>
                    <p className="text">{language?.esg_text_03_193}</p>
                    <p className="text">{language?.esg_text_03_194}</p>
                    </section>

                    <section className="ethical-05">
                    <h2>{language?.esg_text_03_195}</h2>
                    <p className="text">{language?.esg_text_03_196}</p>
                    </section>



                </div>
                )}  

        </div>
    )
}
