'use client';

import Link from "next/link";
import {useEffect, useState} from "react";
interface Props {
    headerLeave : boolean
    language?:any
}

export default function MainMenu({headerLeave, language}: Props): JSX.Element {
    // const [navOn, setNavOn] = useState(false);
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
                    <Link href="/company/introduce" onMouseOver={() => handleMouseOver(0)}>{language.header_1}</Link>
                    <ul>
                        <li><Link href="/company/introduce">{language.header_1_1}</Link></li>
                        <li><Link href="/company/greeting">{language.header_1_2}</Link></li>
                        <li><Link href="/company/history">{language.header_1_3}</Link></li>
                        <li><Link href="/company/research">{language.header_1_4}</Link></li>
                    </ul>
                </li>
                <li className={`business-area ${activeMenu === 1 && !headerLeave ? 'on' : ''}`}>
                    <Link href="#" onMouseOver={() => handleMouseOver(1)}>{language.header_2}</Link>
                    <ul>
                        <li><Link href="/business-area/green-energy/electrolysis">{language.header_2_1}</Link>
                            <ul>
                                <li><Link href="/business-area/green-energy/electrolysis">{language.header_2_1_1}</Link></li>
                                <li><Link href="/business-area/green-energy/hydrogen-refueling-station">{language.header_2_1_2}</Link></li>
                                <li><Link href="/business-area/green-energy/hydrogen-dispenser">{language.header_2_1_3}</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/business-area/plant-solution/fgss">{language.header_2_2}</Link>
                            <ul>
                                <li><Link href="/business-area/plant-solution/fgss">{language.header_2_2_1}</Link></li>
                                <li><Link href="/business-area/plant-solution/analyzer">{language.header_2_2_2}</Link></li>
                                <li><Link href="/business-area/plant-solution/metering-system">{language.header_2_2_3}</Link></li>
                                <li><Link href="/business-area/plant-solution/lng-satellite-station">{language.header_2_2_4}</Link></li>
                                <li><Link href="/business-area/plant-solution/lng-fueling-station">{language.header_2_2_5}</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/business-area/instrumentation/high-pressure-natural-gas-flow-meter">{language.header_2_3}</Link>
                            <ul>
                                <li><Link href="/business-area/instrumentation/high-pressure-natural-gas-flow-meter">{language.header_2_3_1}</Link></li>
                                <li><Link href="/business-area/instrumentation/ultrasonic-flow-transmitter">{language.header_2_3_2}</Link></li>
                                <li><Link href="/business-area/instrumentation/gas-detector">{language.header_2_3_3}</Link></li>
                                <li><Link href="/business-area/instrumentation/low-pressure-natural-gas-flow-meter">{language.header_2_3_4}</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/business-area/marine-solution/fuel-gas-supply-system">{language.header_2_4}</Link>
                            <ul>
                                <li><Link href="/business-area/marine-solution/fuel-gas-supply-system">{language.header_2_4_1}</Link></li>
                                <li><Link href="/business-area/marine-solution/lng-reliquefaction-system">{language.header_2_4_2}</Link></li>
                                <li><Link href="/business-area/marine-solution/lng-cargo-handling-system">{language.header_2_4_3}</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className={activeMenu === 2 && !headerLeave ? 'on' : ''}>
                    <Link href="/promotion-center/portfolio" onMouseOver={() => handleMouseOver(2)}>{language.header_3}</Link>
                    <ul>
                        <li><Link href="/promotion-center/portfolio">{language.header_3_1}</Link></li>
                        <li><Link href="/promotion-center/news">{language.header_3_2}</Link></li>
                        <li><Link href="/promotion-center/inquiry">{language.header_3_3}</Link></li>
                    </ul>
                </li>
                <li className={activeMenu === 3 && !headerLeave ? 'on' : ''}>
                    <Link href="/recruit" onMouseOver={() => handleMouseOver(3)}>{language.header_4}</Link>
                </li>
            </ul>
        </nav>
    )
}
