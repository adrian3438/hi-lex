import Link from "next/link";
import Image from "next/image";

interface Props {
    language?: any;
}

export default function Footer({language}: Props) {
    return (
        <footer>
            <div className="footer-area1">
                <div className="footer-logo-area">
                    <p className="footer-logo"><Image src="/images/common/footer-logo.png" alt="Valmax" width={1000} height={272} style={{width: "104px", height: "auto"}}/></p>
                    <p className="footer-text">{language.footer_7}</p>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li>
                            <p>{language.footer_1}</p>
                            <ul>
                                <li><Link href="/company/introduce">{language.footer_1_1}</Link></li>
                                <li><Link href="/company/greeting">{language.footer_1_2}</Link></li>
                                <li><Link href="/company/history">{language.footer_1_3}</Link></li>
                                <li><Link href="/company/research">{language.footer_1_4}</Link></li>
                            </ul>
                        </li>
                        <li>
                            <p>{language.footer_2}</p>
                            <ul>
                                <li><Link href="/business-area/green-energy/electrolysis">{language.footer_2_1}</Link></li>
                                <li><Link href="/business-area/plant-solution/fgss">{language.footer_2_2}</Link></li>
                                <li><Link href="/business-area/instrumentation/high-pressure-natural-gas-flow-meter">{language.footer_2_3}</Link></li>
                                <li><Link href="/business-area/marine-solution/fuel-gas-supply-system">{language.footer_2_4}</Link></li>
                            </ul>
                        </li>
                        <li>
                            <p>{language.footer_3}</p>
                            <ul>
                                <li><Link href="/promotion-center/portfolio">{language.footer_3_1}</Link></li>
                                <li><Link href="/promotion-center/news">{language.footer_3_2}</Link></li>
                                <li><Link href="/promotion-center/inquiry">{language.footer_3_3}</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/recruit">{language.footer_4}</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-area2">
                <div>
                    <div className="copyright-address">
                        <div className="copyright">
                            <p className="copyright1">{language.footer_6}</p>
                            <p className="copyright2">Copyright (C) Valmax. All Rights Reserved.</p>
                        </div>
                        <div className="address">
                            <address>{language.footer_8}</address>
                            <div className="tel">
                                <p className="tel-number">+82 31 478 4020~3</p>
                                <p className="email">sales@valmax.co.kr</p>
                            </div>
                        </div>
                    </div>
                    <div className="policy">
                        <Link href="#">{language.footer_5}</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
