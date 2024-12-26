import '@/app/assets/company/about.scss';
import AboutSwiper from "@/components/company/AboutSwiper";
import AboutVision from "@/components/company/AboutVision";
import Link from "next/link";
import Image from "next/image";

interface Props {
    language?: any
}

export default function AboutUs({language}: Props) {
    return (
        <div className="about-us">
            <AboutSwiper language={language} />
            <AboutVision language={language} />
            <div className="about-container">
                <div className="business">
                    <h2>{language?.about_23}</h2>
                    <div>
                        <div>
                            <p>{language?.about_24}</p>
                            <div className="text-area">
                                {language?.about_25}
                            </div>
                            <ul>
                                <li>
                                    <dl>
                                        <dt>{language?.about_26}</dt>
                                        <dd>
                                            <ul>
                                                <li><Link href="#">{language?.about_27}</Link></li>
                                                <li><Link href="#">{language?.about_28}</Link></li>
                                                <li><Link href="#">{language?.about_29}</Link></li>
                                                <li><Link href="#">{language?.about_30}</Link></li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>{language?.about_31}</dt>
                                        <dd>
                                            <ul>
                                                <li><Link href="#">{language?.about_32}</Link></li>
                                                <li><Link href="#">{language?.about_33}</Link></li>
                                                <li><Link href="#">{language?.about_34}</Link></li>
                                                <li><Link href="#">{language?.about_35}</Link></li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>{language?.about_36}</dt>
                                        <dd>&nbsp;</dd>
                                    </dl>
                                </li>
                            </ul>
                            <div className="button">
                                <Link href="#">{language?.about_37}</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="financial">
                    <h2>{language?.about_38}</h2>
                    <div className="table">
                        <p>{language?.about_47}</p>
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col" className="blue">2023</th>
                                <th scope="col">2022</th>
                                <th scope="col">2021</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row" className="blue bold">{language?.about_39}</th>
                                <td className="blue">279,974</td>
                                <td>270,819</td>
                                <td>222,282</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue">{language?.about_40}</th>
                                <td className="blue">107,337</td>
                                <td>110,411</td>
                                <td>89,398</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue">{language?.about_41}</th>
                                <td className="blue">172,638</td>
                                <td>160,408</td>
                                <td>133,484</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue bold">{language?.about_42}</th>
                                <td className="blue">540,550</td>
                                <td>444,504</td>
                                <td>399,565</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue">{language?.about_43}</th>
                                <td className="blue">70,362</td>
                                <td>51,829</td>
                                <td>45,951</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue bold">{language?.about_44}</th>
                                <td className="blue">28,090</td>
                                <td>18,787</td>
                                <td>14,600</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue">{language?.about_45}</th>
                                <td className="blue">30,594</td>
                                <td>30,965</td>
                                <td>18,842</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue">{language?.about_46}</th>
                                <td className="blue">30,565</td>
                                <td>20,233</td>
                                <td>14,537</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="graph">
                        <p>{language?.about_47}</p>
                        <dl>
                            <dt>{language?.about_48}</dt>
                            <dd>
                                <ul>
                                    <li><span>2023</span> <span className="bar" style={{width: "40%"}}></span> <span>279,974</span></li>
                                    <li><span>2022</span> <span className="bar" style={{width: "38%"}}></span> <span>270,819</span></li>
                                    <li><span>2021</span> <span className="bar" style={{width: "36%"}}></span> <span>222,882</span></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>{language?.about_49}</dt>
                            <dd>
                                <ul>
                                    <li><span>2023</span> <span className="bar" style={{width: "80%"}}></span> <span>540,550</span></li>
                                    <li><span>2022</span> <span className="bar" style={{width: "73%"}}></span> <span>444,504</span></li>
                                    <li><span>2021</span> <span className="bar" style={{width: "72%"}}></span> <span>399,565</span></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>{language?.about_50}</dt>
                            <dd>
                                <ul>
                                    <li><span>2023</span> <span className="bar" style={{width: "15%"}}></span> <span>28,090</span></li>
                                    <li><span>2022</span> <span className="bar" style={{width: "13%"}}></span> <span>18,787</span></li>
                                    <li><span>2021</span> <span className="bar" style={{width: "11%"}}></span> <span>14,600</span></li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>

                <div className="ci">
                    <h2>{language?.about_51}</h2>
                    <p>{language?.about_52}<br/>{language?.about_52_02}</p>
                    <div className="ci-image">
                        <h3>{language?.about_53}</h3>
                        <p>{language?.about_54}</p>
                        <Image src="/images/sub/company/about/ci.png" alt="HI-LEX DAEDONG DOOR" width={1600} height={471}/>
                    </div>
                    <div className="ci-image">
                        <h3>{language?.about_55}</h3>
                        <p>{language?.about_56}</p>
                        <Image src="/images/sub/company/about/ci-symbol.png" alt="HI-LEX DAEDONG DOOR" width={1600} height={471}/>
                    </div>
                    <div className="ci-image">
                        <h3>{language?.about_57}</h3>
                        <p>{language?.about_58}</p>
                        <Image src="/images/sub/company/about/ci-size.png" alt="HI-LEX DAEDONG DOOR" width={1600} height={384}/>
                    </div>
                    <div className="ci-color">
                        <h3>{language?.about_59}</h3>
                        <p>{language?.about_60}</p>
                        <ul>
                            <li>
                                <h4>{language?.about_61}</h4>
                                <p className="bar"></p>
                                <ul>
                                    <li>{language?.about_62}</li>
                                    <li>{language?.about_63}</li>
                                    <li>{language?.about_64}</li>
                                </ul>
                            </li>
                            <li>
                                <h4>{language?.about_65}</h4>
                                <p className="bar2">
                                    <div>
                                        <span></span>
                                        <ul>
                                            <li>{language?.about_66}</li>
                                            <li>{language?.about_67}</li>
                                            <li>{language?.about_68}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <span></span>
                                        <ul>
                                            <li>{language?.about_69}</li>
                                            <li>{language?.about_70}</li>
                                            <li>{language?.about_71}</li>
                                        </ul>
                                    </div>
                                </p>

                            </li>
                        </ul>
                    </div>
                    <div className="ci-download">
                        <dl>
                            <dt>{language?.about_72}</dt>
                            <dd>
                                <ul>
                                    <li><a href="/download/대동도어_CI_세로형.ai" download>{language?.about_74}</a></li>
                                    <li><a href="/download/대동도어_CI_세로형.png" download>{language?.about_75}</a></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>{language?.about_73}</dt>
                            <dd>
                                <ul>
                                    <li><a href="/download/대동도어_CI_가로형.ai" download>{language?.about_74}</a></li>
                                    <li><a href="/download/대동도어_CI_가로형.png" download>{language?.about_75}</a></li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
