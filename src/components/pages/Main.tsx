import "@/app/assets/main.scss";
import Link from "next/link";
import Image from "next/image";
import MainSwiper from "@/components/main/MainSwiper";
import api from "@/lib/api";
import ContactImg from "@/components/main/ContactImg";
import MainTop from "@/components/main/MainTop";

interface Props {
    language?: any
}

export default async function Main({language} : Props) {
    const response = await api.get(`/user/promotion/getContentsList.php?contentType=1&businessDivisionType=0&userLang=${language.language === 'KR' ? 'EN' : 'KR'}&page=1&size=3&keyword=&sortColumn=date&sortOrder=desc`);
    const newsList = response?.data?.List;

    return (
        <>
            <main>
                <MainTop language={language}/>
                <section className="section-02">
                    <div className="business">
                        <div className="image-area">
                            <Image src="/images/main/main-bg-02.png" alt="Valmax" width={562} height={307}/>
                        </div>
                        <div className="text-area">
                            <h3>{language.main_text_02_2}<br/>{language.main_text_02_2_1}</h3>
                        </div>
                    </div>
                    <ul>
                        <li className="business-01">
                            <dl>
                                <dt>{language.main_text_02_4}</dt>
                                <dd>
                                    {language.main_text_02_5_1}<br/>
                                    {language.main_text_02_5_2}<br/>
                                    {language.main_text_02_5_3}
                                </dd>
                            </dl>
                        </li>
                        <li className="business-02">
                            <dl>
                                <dt>{language.main_text_02_6}</dt>
                                <dd>
                                    {language.main_text_02_7_1}<br/>
                                    {language.main_text_02_7_2}<br/>
                                    {language.main_text_02_7_3}<br/>
                                    {language.main_text_02_7_4}
                                </dd>
                            </dl>
                        </li>
                        <li className="business-03">
                            <dl>
                                <dt>{language.main_text_02_8}</dt>
                                <dd>
                                    {language.main_text_02_9_1}<br/>
                                    {language.main_text_02_9_2}<br/>
                                    {language.main_text_02_9_3}
                                </dd>
                            </dl>
                        </li>
                        <li className="business-04">
                            <dl>
                                <dt>{language.main_text_02_10}</dt>
                                <dd>
                                    {language.main_text_02_11_1}<br/>
                                    {language.main_text_02_11_2}<br/>
                                    {language.main_text_02_11_3}<br/>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>
                <section className="section-03">
                    <div>
                        <ContactImg/>
                        <div className="text-area">
                            <h3>{language.main_text_03_2}<br/>{language.main_text_03_3}</h3>
                            <p>{language.main_text_03_4}</p>
                            <Link href="/promotion-center/inquiry">{language.main_text_03_5}</Link>
                        </div>
                    </div>
                </section>
                <section className="section-04">
                    <p><span>{language.main_text_04_2}</span><br/> {language.main_text_04_3}</p>
                    <ul>
                        <li><Image src="/images/main/sk_ecoplant.png" alt="sk ecoplant" width={658} height={268}/></li>
                        <li><Image src="/images/main/sk_ecoengineering.png" alt="sk ecoengineering" width={658} height={268}/></li>
                        <li><Image src="/images/main/samsung_enc_logo.png" alt="samsung enc logo" width={658} height={268}/></li>
                        <li><Image src="/images/main/lotte_enc_logo.png" alt="lotte enc logo" width={658} height={268}/></li>
                        <li><Image src="/images/main/hanwah_solution_logo.png" alt="hanwah solution_logo" width={658} height={268}/></li>
                        <li><Image src="/images/main/hanwah_ocean_logo.png" alt="hanwah ocean" width={658} height={268}/></li>
                        <li><Image src="/images/main/doosan_enerbility_logo.png" alt="doosan enerbility logo" width={658} height={268}/></li>
                        <li><Image src="/images/main/hyuindai_enc_logo.png" alt="hyuindai enc" width={658} height={268}/></li>
                    </ul>
                </section>
                <section className="section-05">
                    <div className="title-area">
                        <h3>{language.main_text_05_2}</h3>
                        {/*<p>{language.main_text_05_3}<br/> {language.main_text_05_4}<br/> {language.main_text_05_5}</p>*/}
                    </div>
                    <MainSwiper/>
                </section>
                <section className="section-06">
                    <h3>{language.main_text_06_2}</h3>
                    <ul>
                        {newsList?.map((item: any, index: number) => (
                            <li key={index}>
                                <Link href={`/promotion-center/news/${item.ID}`}>
                                    <Image src={item.thumnailFile ? item.thumnailFile : "/images/@temp/blog-list-sample.png"} alt="Sample" width={450} height={354} />
                                    <p>{item.promSubject}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="section-07">
                    <Link href="/promotion-center/inquiry">{language.main_text_07_3}</Link>
                    <Link href="/file/Brochure_2021-valmax.pdf" download>{language.main_text_07_4}</Link>
                </section>
            </main>
        </>
    )
}
