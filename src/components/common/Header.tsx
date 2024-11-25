'use client';
import Link from "next/link";
import Image from "next/image";
import LanguageMenu from "@/components/common/LanguageMenu";
import MainMenu from "@/components/common/MainMenu";
import {useState} from "react";

interface Props {
    language?:any
}

export default function Header({language}: Props) {
    const [headerLeave, setHeaderLeave] = useState(false);
    const handleMouseLeave = () => {
        setHeaderLeave(true);
    }
    const handleMouseOver = () => {
        setHeaderLeave(false);
    }
    return (
        <header onMouseLeave={() => handleMouseLeave()} onMouseOver={() => handleMouseOver()}>
            <div>
                <h1><Link href="/"><Image src="/images/common/logo.png" alt="Technology Corporation Valmax" width={1000} height={272} style={{width: "167px", height: "auto"}}/></Link></h1>
                <MainMenu headerLeave={headerLeave} language={language}/>{/* 헤더 메뉴 */}
                <LanguageMenu language={language}/>{/* 언어 선택 및 모바일 메뉴 */}
            </div>
        </header>
    )
}
