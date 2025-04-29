'use client';

import "@/app/assets/main.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import MainPopup from "@/components/main/MainPopup";

interface Props {
    language?: any;
}

export default function Main({ language }: Props) {
    const [activeSection, setActiveSection] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("div[class^='main-section']");
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    setActiveSection(index + 1);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavigationClick = (sectionIndex: number) => {
        const targetSection = document.querySelector(`.main-section-0${sectionIndex}`);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionIndex); // Update active section manually
        }
    };

    return (
        <>
            <main>
                <ol className="main-section-navigation">
                    {Array(5)
                        .fill(null)
                        .map((_, index) => (
                            <li key={index}>
                                <button onClick={() => handleNavigationClick(index + 1)}>
                                    <Image
                                        src={
                                            activeSection === index + 1
                                                ? "/images/main/section-navi-on.png"
                                                : "/images/main/section-navi-off.png"
                                        }
                                        alt=""
                                        width={18}
                                        height={18}
                                    />
                                </button>
                            </li>
                        ))}
                </ol>
                <div className="main-section-01">
                    <div>
                        <p className="main-section-text-01">{language?.main_01}</p>
                        <p className="main-section-text-02">{language?.main_02}</p>
                        <Link href="/company/contact-us">{language?.main_03}</Link>
                    </div>
                    <p>{language?.main_04}</p>
                </div>
                <div className="main-section-02">
                    <div>
                        <p className="main-section-text-01">{language?.main_05}</p>
                        <p className="main-section-text-02">
                            {language?.main_06}
                        </p>
                        <Link href="/products/latching-systems">{language?.main_08}</Link>
                    </div>
                </div>
                <div className="main-section-03">
                    <div>
                        <p className="main-section-text-01">{language?.main_09}</p>
                        <p className="main-section-text-02">
                            {language?.main_10}
                            <br />
                            {language?.main_11}
                        </p>
                        <Link href="/research">{language?.main_12}</Link>
                    </div>
                </div>
                <div className="main-section-04">
                    <div>
                        <p className="main-section-text-01">{language?.main_13}</p>
                        <p className="main-section-text-02">{language?.main_14}</p>
                        <Link href="/news/story">{language?.main_15}</Link>
                    </div>
                </div>
                <div className="main-section-05">
                    <div>
                        <p className="main-section-text-01">{language?.main_16}</p>
                        <p className="main-section-text-02">
                            {language?.main_17}
                            <br />
                            {language?.main_18}
                        </p>
                        <Link href="/career/position/quality">{language?.main_19}</Link>
                    </div>
                </div>
            </main>
            <MainPopup/>
        </>
    );
}
