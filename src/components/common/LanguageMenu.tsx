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
                                <li><Link href="/company/introduce">- {language.header_1_1}</Link></li>
                                <li><Link href="/company/greeting">- {language.header_1_2}</Link></li>
                                <li><Link href="/company/history">- {language.header_1_3}</Link></li>
                                <li><Link href="/company/research">- {language.header_1_4}</Link></li>
                            </ul>
                        </li>
                        <li className={menuNumber === 2 ? 'on' : ''}>
                            <button onClick={() => handleMobileMenu(2)}>{language.header_2}</button>
                            <ul>
                                <li><Link href="/business-area/green-energy/electrolysis">- {language.header_2_1}</Link></li>
                                <li><Link href="/business-area/plant-solution/fgss">- {language.header_2_2}</Link></li>
                                <li><Link href="/business-area/instrumentation/high-pressure-natural-gas-flow-meter">- {language.header_2_3}</Link></li>
                                <li><Link href="/business-area/marine-solution/fuel-gas-supply-system">- {language.header_2_4}</Link></li>
                            </ul>
                        </li>
                        <li className={menuNumber === 3 ? 'on' : ''}>
                            <button onClick={() => handleMobileMenu(3)}>{language.header_3}</button>
                            <ul>
                                <li><Link href="/promotion-center/portfolio">- {language.header_3_1}</Link></li>
                                <li><Link href="/promotion-center/news">- {language.header_3_2}</Link></li>
                                <li><Link href="/promotion-center/inquiry">- {language.header_3_3}</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/recruit">{language.header_4}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
