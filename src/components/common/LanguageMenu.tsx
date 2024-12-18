'use client';

import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
interface Props {
    language?: any;
}

export default function LanguageMenu({language}: Props) {
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
    const [menuNumber, setMenuNumber] = useState<number>(0);
    const openMobileMenu = () => {
        setVisibleMenu(true);
    }
    const closeMobileMenu = () => {
        setVisibleMenu(false);
    }
    const handleMobileMenu = (index: number) => {
        setMenuNumber(index);
        if(menuNumber === index) {
            setMenuNumber(0);
        }
    }

    const router = useRouter();
    const query = useSearchParams();
    const currentRoute = usePathname();
    const [cookie , setCookie] = useCookies(['LANG']);
    const [lang , setLang] = useState<any>('kr');

    function handleLang (e : any, lang : string) {
        e.preventDefault();
        setCookie('LANG', lang, {path : '/'});

        // 언어 변경 시 , url 변경
        const newParams = new URLSearchParams(query.toString());
        newParams.set('lang', lang);
        router.push(`${currentRoute}?${newParams?.toString()}`);
    }

    useEffect(()=>{setLang(cookie.LANG)} , [setCookie, cookie]);

    return (
        <div className="language">
            <Link href="#" className="language-button" onClick={(e) => handleLang(e, lang === 'en' ? 'kr' : 'en')}>{lang === 'en' ? 'KR' : "EN"}</Link>
            <div>
                <button className="menu-button" onClick={openMobileMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
                <nav className={visibleMenu ? "on" : ''}>
                    <div className="nav-header">
                        <Image src="/images/common/logo.png" alt="Technology Corporation Valmax" width={1000} height={272} style={{width: "167px", height: "auto"}}/>
                        <button className="close" onClick={closeMobileMenu}></button>
                    </div>
                    <ul>
                        <li className={menuNumber === 1 ? 'on' : ''}>
                            <button onClick={() => handleMobileMenu(1)}>{language.header_1}</button>
                            <ul>
                                <li><Link href="#">- {language.header_1_1}</Link></li>
                                <li><Link href="#">- {language.header_1_2}</Link></li>
                                <li><Link href="#">- {language.header_1_3}</Link></li>
                                <li><Link href="/company/history">- {language.header_1_4}</Link></li>
                                <li><Link href="#">- {language.header_1_5}</Link></li>
                                <li><Link href="/company/location">- {language.header_1_6}</Link></li>
                                <li><Link href="/company/contact-us">- {language.header_1_7}</Link></li>
                            </ul>
                        </li>
                        <li className={menuNumber === 2 ? 'on' : ''}>
                            <button onClick={() => handleMobileMenu(2)}>{language.header_2}</button>
                        </li>
                        <li>
                            <Link href="#">{language.header_3}</Link>
                        </li>
                        <li className={menuNumber === 3 ? 'on' : ''}>
                            <button onClick={() => handleMobileMenu(3)}>{language.header_4}</button>
                            <ul>
                                <li><Link href="#">- {language.header_4_1}</Link></li>
                                <li><Link href="#">- {language.header_4_2}</Link></li>
                                <li><Link href="/sustainability/esg">- {language.header_4_3}</Link></li>
                                <li><Link href="#">- {language.header_4_4}</Link></li>
                                <li><Link href="#">- {language.header_4_5}</Link></li>
                                <li><Link href="#">- {language.header_4_6}</Link></li>
                            </ul>
                        </li>
                        <li className={menuNumber === 4 ? 'on' : ''}>
                            <button onClick={() => handleMobileMenu(4)}>{language.header_5}</button>
                            <ul>
                                <li><Link href="#">- {language.header_5_1}</Link></li>
                                <li><Link href="#">- {language.header_5_2}</Link></li>
                                <li><Link href="#">- {language.header_5_3}</Link></li>
                                <li><Link href="#">- {language.header_5_4}</Link></li>
                            </ul>
                        </li>
                        <li className={menuNumber === 5 ? 'on' : ''}>
                            <button onClick={() => handleMobileMenu(5)}>{language.header_6}</button>
                            <ul>
                                <li><Link href="/news/press-release">- {language.header_6_1}</Link></li>
                                <li><Link href="/news/story">- {language.header_6_2}</Link></li>
                                <li><Link href="/news/events">- {language.header_6_3}</Link></li>
                                <li><Link href="/news/media">- {language.header_6_4}</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
