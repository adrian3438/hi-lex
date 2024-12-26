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
        <nav className={(activeMenu || activeMenu === 0)? 'on' : ''}>
            <div className={"nav-bg"}></div>
            <ul>
                <li className={activeMenu === 0 && !headerLeave ? 'on' : ''}>
                    <Link href="#" onMouseOver={() => handleMouseOver(0)}>{language.header_1}</Link>
                    <ul>
                        <li><Link href="/company/greeting">{language.header_1_1}</Link></li>
                        <li><Link href="/company/about-us">{language.header_1_2}</Link></li>
                        <li><Link href="/company/management-philosopy">{language.header_1_3}</Link></li>
                        <li><Link href="/company/history">{language.header_1_4}</Link></li>
                        <li><Link href="/company/affiliate-companies">{language.header_1_5}</Link></li>
                        <li><Link href="/company/location">{language.header_1_6}</Link></li>
                        <li><Link href="/company/contact-us">{language.header_1_7}</Link></li>
                    </ul>
                </li>
                <li className={activeMenu === 1 && !headerLeave ? 'on' : ''}>
                    <Link href="#" onMouseOver={() => handleMouseOver(1)}>{language.header_2}</Link>
                    <ul>
                        <li><Link href="/products/latching-systems">{language.header_2_1}</Link></li>
                        <li><Link href="/products/power-closures">{language.header_2_2}</Link></li>
                        <li><Link href="/products/door-checks">{language.header_2_3}</Link></li>
                    </ul>
                </li>
                <li className={activeMenu === 2 && !headerLeave ? 'on' : ''}>
                    <Link href="/research" onMouseOver={() => handleMouseOver(2)}>{language.header_3}</Link>
                    <ul>
                        <li><Link href="/research/e-latch">{language.header_3_1}</Link></li>
                        <li><Link href="/research/pds">{language.header_3_2}</Link></li>
                        <li><Link href="/research/power-lift-gate">{language.header_3_3}</Link></li>
                        <li><Link href="/research/power-hood">{language.header_3_4}</Link></li>
                    </ul>
                </li>
                <li className={activeMenu === 3 && !headerLeave ? 'on' : ''}>
                    <Link href="#" onMouseOver={() => handleMouseOver(3)}>{language.header_4}</Link>
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
                </li>
                <li className={activeMenu === 4 && !headerLeave ? 'on' : ''}>
                    <Link href="#" onMouseOver={() => handleMouseOver(4)}>{language.header_5}</Link>
                    <ul>
                        <li><Link href="/career/position/quality">{language.header_5_1}</Link></li>
                        <li><Link href="/career/welfare">{language.header_5_2}</Link></li>
                        <li><Link href="/career/candidate">{language.header_5_3}</Link></li>
                        {language?.language === 'kr' && <li><Link href="/career/application">{language.header_5_4}</Link></li>}
                    </ul>
                </li>
                <li className={activeMenu === 5 && !headerLeave ? 'on' : ''}>
                    <Link href="#" onMouseOver={() => handleMouseOver(5)}>{language.header_6}</Link>
                    <ul>
                        <li><Link href="/news/press-release">{language.header_6_1}</Link></li>
                        <li><Link href="/news/story">{language.header_6_2}</Link></li>
                        <li><Link href="/news/events">{language.header_6_3}</Link></li>
                        <li><Link href="/news/media">{language.header_6_4}</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
