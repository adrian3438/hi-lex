'use client';
import Link from "next/link";
import Image from "next/image";
import LanguageMenu from "@/components/common/LanguageMenu";
import MainMenu from "@/components/common/MainMenu";
import {useEffect, useState} from "react";

interface Props {
    language?:any
}

export default function Header({language}: Props) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [headerLeave, setHeaderLeave] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup
        };
    }, []);

    const handleMouseLeave = () => {
        setHeaderLeave(true);
    }
    const handleMouseOver = () => {
        setHeaderLeave(false);
    }
    return (
        <header className={isScrolled ? 'on' : `${!headerLeave ? 'on' : ''}`} onMouseLeave={() => handleMouseLeave()} onMouseOver={() => handleMouseOver()}>
            <div>
                <h1><Link href="/"><Image src="/images/common/logo.png" alt="Technology Corporation Valmax" width={216} height={35} style={{width: "216.37px", height: "auto"}}/></Link></h1>
                <MainMenu headerLeave={headerLeave} language={language}/>{/* 헤더 메뉴 */}
                <LanguageMenu language={language}/>{/* 언어 선택 및 모바일 메뉴 */}
            </div>
        </header>
    )
}
