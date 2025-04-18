import "@/app/assets/sitemap/sitemap.scss";
import { fetchLanguage } from "@/util/fetchLanguage";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Link from "next/link";

export default async function Home({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);

    return (
        <>
            <Header language={language}/>
            <div className="sitemap-container">
                <h2>Sitemap</h2>
                <div>
                    <dl>
                        <dt>{language?.header_1}</dt>
                        <dd>
                            <ul>
                                <li><Link href="/company/greeting">{language.header_1_1}</Link></li>
                                <li><Link href="/company/about-us">{language.header_1_2}</Link></li>
                                <li><Link href="/company/management-philosopy">{language.header_1_3}</Link></li>
                                <li><Link href="/company/history">{language.header_1_4}</Link></li>
                                <li><Link href="/company/affiliate-companies">{language.header_1_5}</Link></li>
                                <li><Link href="/company/domestic">{language.header_1_6_0}</Link></li>
                                <li><Link href="/company/location">{language.header_1_6}</Link></li>
                                <li><Link href="/company/contact-us">{language.header_1_7}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>{language?.header_2}</dt>
                        <dd>
                            <ul>
                                <li><Link href="/products/latching-systems">{language.header_2_1}</Link></li>
                                <li><Link href="/products/power-closures">{language.header_2_2}</Link></li>
                                <li><Link href="/products/door-checks">{language.header_2_3}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>

                <div>
                    <dl>
                        <dt>{language?.header_3}</dt>
                        <dd>
                            <ul>
                                <li><Link href="/research/e-latch">{language.header_3_1}</Link></li>
                                <li><Link href="/research/pds">{language.header_3_2}</Link></li>
                                <li><Link href="/research/power-lift-gate">{language.header_3_3}</Link></li>
                                <li><Link href="/research/power-hood">{language.header_3_4}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>{language?.header_4}</dt>
                        <dd>
                            <ul>
                                <li><Link href="/sustainability/esg-management">{language.header_4_1}</Link></li>
                                <li><Link href="/sustainability/climate-change">{language.header_4_2}</Link></li>
                                <li><Link href="/sustainability/ethical-business">{language.header_4_3}</Link></li>
                                <li><Link href="/sustainability/ehs">{language.header_4_4}</Link></li>
                                <li><Link href="/sustainability/supply-chain">{language.header_4_5}</Link></li>
                                <li><Link href="/sustainability/quality-management">{language.header_4_6}</Link></li>
                                <li><Link href="/sustainability/sustainability-report">{language.header_4_7}</Link></li>
                                <li><Link href="/sustainability/whistleblower-complaint">{language.header_4_8}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>{language?.header_5}</dt>
                        <dd>
                            <ul>
                                <li><Link href="/career/position/quality">{language.header_5_1}</Link></li>
                                <li><Link href="/career/welfare">{language.header_5_2}</Link></li>
                                <li><Link href="/career/candidate">{language.header_5_3}</Link></li>
                                {language?.language === 'kr' && <li><Link href="/career/application">{language.header_5_4}</Link></li>}
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>{language?.header_6}</dt>
                        <dd>
                            <ul>
                                <li><Link href="/news/press-release">{language.header_6_1}</Link></li>
                                <li><Link href="/news/story">{language.header_6_2}</Link></li>
                                <li><Link href="/news/events">{language.header_6_3}</Link></li>
                                <li><Link href="/news/media">{language.header_6_4}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
