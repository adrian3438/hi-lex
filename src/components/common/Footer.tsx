import Image from "next/image";
import Link from "next/link";

interface Props {
    language?: any;
}

export default function Footer({language}: Props) {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-area-1">
                    <p className="footer-logo"><Image src="/images/common/footer-logo.png" alt="HI-LEX DAEDONG DOOR" width={264} height={43}/></p>
                    <div>
                        <p>{language?.footer_1}</p>
                        <p>{language?.footer_2}</p>
                        <p>{language?.footer_3}</p>
                    </div>
                    <p className="copyright">{language?.footer_4}</p>
                </div>
                <div className="footer-area-2">
                    <dl>
                        <dt>{language?.footer_5}</dt>
                        <dd>
                            <ul>
                                <li><Link href="">{language?.footer_6}</Link></li>
                                <li><Link href="">{language?.footer_7}</Link></li>
                                <li><Link href="">{language?.footer_8}</Link></li>
                                <li><Link href="">{language?.footer_9}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div className="footer-area-3">
                    <dl>
                        <dt>{language?.footer_10}</dt>
                        <dd>
                            <ul>
                                <li><Link href="">{language?.footer_11}</Link></li>
                                <li><Link href="">{language?.footer_12}</Link></li>
                                <li><Link href="">{language?.footer_13}</Link></li>
                                <li><Link href="">{language?.footer_14}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div className="footer-area-4">
                    <p>{language?.footer_15}</p>
                    <div className="footer-email">
                        <label htmlFor="inputEmail">{language?.footer_16}</label>
                        <input type="text" placeholder={language?.footer_17} id="inputEmail"/>
                        <button>{language?.footer_18}</button>
                    </div>
                    <div className="footer-link">
                        <dl className="sitemap">
                            <dt>{language?.footer_19}</dt>
                            <dd><Link href="#">{language?.footer_20}</Link></dd>
                        </dl>
                        <dl className="sns-link">
                            <dt>{language?.footer_21}</dt>
                            <dd>
                                <ul>
                                    <li><Link href="#">{language?.footer_22}</Link></li>
                                    <li><Link href="#">{language?.footer_23}</Link></li>
                                    <li><Link href="#">{language?.footer_24}</Link></li>
                                    <li><Link href="#">{language?.footer_25}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </footer>
    )
}
