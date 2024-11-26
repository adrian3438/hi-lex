'use client';

import Link from "next/link";
import {useEffect, useState} from "react";
interface Props {
    headerLeave : boolean
    language?:any
}

export default function MainMenu({headerLeave, language}: Props): JSX.Element {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const handleMouseOver = (index: number) => {
        setActiveMenu(index);
    }
    useEffect(() => {
        if (headerLeave)
            setActiveMenu(null);
    }, [headerLeave]);

    return (
        <nav className={(activeMenu || activeMenu === 0) && activeMenu !== 3 ? 'on' : ''}>
            <div className={"nav-bg"}></div>
            <ul>
                <li className={activeMenu === 0 && !headerLeave ? 'on' : ''}>
                    <Link href="#" onMouseOver={() => handleMouseOver(0)}>{language.header_1}</Link>
                    <ul>
                        <li><Link href="#">{language.header_1_1}</Link></li>
                        <li><Link href="#">{language.header_1_2}</Link></li>
                        <li><Link href="#">{language.header_1_3}</Link></li>
                        <li><Link href="#">{language.header_1_4}</Link></li>
                        <li><Link href="#">{language.header_1_5}</Link></li>
                        <li><Link href="#">{language.header_1_6}</Link></li>
                        <li><Link href="#">{language.header_1_7}</Link></li>
                    </ul>
                </li>
                <li className={`business-area ${activeMenu === 1 && !headerLeave ? 'on' : ''}`}>
                    <Link href="#" onMouseOver={() => handleMouseOver(1)}>{language.header_2}</Link>
                </li>
                <li className={`business-area ${activeMenu === 2 && !headerLeave ? 'on' : ''}`}>
                    <Link href="#" onMouseOver={() => handleMouseOver(2)}>{language.header_3}</Link>
                </li>
                <li className={activeMenu === 3 && !headerLeave ? 'on' : ''}>
                    <Link href="/promotion-center/portfolio" onMouseOver={() => handleMouseOver(3)}>{language.header_4}</Link>
                    <ul>
                        <li><Link href="/promotion-center/portfolio">{language.header_4_1}</Link></li>
                        <li><Link href="/promotion-center/news">{language.header_4_2}</Link></li>
                        <li><Link href="/promotion-center/inquiry">{language.header_4_3}</Link></li>
                        <li><Link href="/promotion-center/inquiry">{language.header_4_4}</Link></li>
                        <li><Link href="/promotion-center/inquiry">{language.header_4_5}</Link></li>
                        <li><Link href="/promotion-center/inquiry">{language.header_4_6}</Link></li>
                        <li><Link href="/promotion-center/inquiry">{language.header_4_7}</Link></li>
                    </ul>
                </li>
                <li className={activeMenu === 4 && !headerLeave ? 'on' : ''}>
                    <Link href="/recruit" onMouseOver={() => handleMouseOver(4)}>{language.header_5}</Link>
                    <ul>
                        <li><Link href="/promotion-center/portfolio">{language.header_5_1}</Link></li>
                        <li><Link href="/promotion-center/news">{language.header_5_2}</Link></li>
                        <li><Link href="/promotion-center/inquiry">{language.header_5_3}</Link></li>
                        <li><Link href="/promotion-center/inquiry">{language.header_5_4}</Link></li>
                    </ul>
                </li>
                <li className={activeMenu === 5 && !headerLeave ? 'on' : ''}>
                    <Link href="/recruit" onMouseOver={() => handleMouseOver(5)}>{language.header_6}</Link>
                    <ul>
                        <li><Link href="/promotion-center/portfolio">{language.header_5_1}</Link></li>
                        <li><Link href="/promotion-center/news">{language.header_5_2}</Link></li>
                        <li><Link href="/promotion-center/inquiry">{language.header_5_3}</Link></li>
                        <li><Link href="/promotion-center/inquiry">{language.header_5_4}</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
