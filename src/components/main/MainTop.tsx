'use client';

import Image from "next/image";
import {useEffect, useRef} from "react";
import { gsap } from 'gsap';
import Player from '@vimeo/player';

interface Props {
    language: any
}

export default function MainTop({language}: Props): JSX.Element {
    const mainTopDiv = useRef<HTMLDivElement>(null);

    const textRef = useRef<HTMLDivElement>(null);
    const image01Ref = useRef<HTMLImageElement | null>(null);
    const image03Ref = useRef<HTMLImageElement | null>(null);
    const image05Ref = useRef<HTMLImageElement | null>(null);
    const image06Ref = useRef<HTMLImageElement | null>(null);


    const iframeWrapRef = useRef<HTMLDivElement | null>(null);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        if (textRef.current) {
            gsap.to(textRef.current, {
                x: 350,
                y: 320,
                duration: 1,
                color: "#fff",
                onComplete: () => {
                    if(image06Ref.current) {
                        gsap.to(image06Ref.current, {
                            x: 180,
                            opacity: 1,
                            duration: 1,
                        });
                    }
                    if(textRef.current) {
                        textRef.current.innerHTML = `<span>Valmax offer</span> <em>customized total energy solution</em>`;
                        const spans = textRef.current.querySelectorAll("span, em");
                        gsap.fromTo(spans,
                            { opacity: 0 },
                            { opacity: 1, duration: 1, stagger: 0.2 }
                        );
                    }
                }
            });
        }

        if (image03Ref.current) {
            image03Ref.current?.classList.add('on');
        }

        if (image01Ref.current) {
            gsap.to(image01Ref.current, {
                x: 540,
                y: -150,
                duration: 1,
                opacity: 0,
                color: "#fff",
                rotation: 90
            });
        }

        if (image05Ref.current) {
            gsap.to(image05Ref.current, {
                opacity: 1,
                duration: 1,
                onComplete: () => {
                    if (iframeRef.current) {
                        iframeWrapRef.current?.classList.add('on');
                    }
                }
            });
        }
    }, []);

    useEffect(() => {
        if (iframeRef.current) {
            const player = new Player(iframeRef.current);
            player.on('ended', () => {
                iframeWrapRef.current?.classList.remove('on');
                mainTopDiv.current?.classList.add('off');
                if(textRef.current) textRef.current.innerHTML = `<span>${language.main_text_01_1}</span> <em>${language.main_text_01_2}</em>`;
            });
        }
    }, []);

    function handleClick() {
        iframeWrapRef.current?.classList.remove('on');
        mainTopDiv.current?.classList.add('off');
        if(textRef.current) textRef.current.innerHTML = `<span>${language.main_text_01_1}</span> <em>${language.main_text_01_2}</em>`;
    }

    return (
        <div style={{position: "relative", margin: "0 -20px"}} ref={mainTopDiv}>
            <div ref={iframeWrapRef} className="main-video" style={{padding: "56.25% 0 0 0"}}>
                <iframe
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/782381466?badge=0&amp;autopause=0&autoplay=1&amp;player_id=0&amp;app_id=58479&controls=0&muted=1"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                    title="onshore-plant"
                />
                <button onClick={handleClick} />
            </div>
            <section className="section-01">
                <p className="text-01" ref={textRef}><span>{language.main_text_01_1}</span> <em>{language.main_text_01_2}</em></p>
                <div className="text-02">
                    <Image ref={image01Ref} src="/images/main/main-top-01.png" alt="" width={191} height={472} className="image-01"/>
                    <Image src="/images/main/main-top-02.png" alt="" width={1301} height={499} className="image-02"/>
                    <Image ref={image03Ref} src="/images/main/main-top-03.png" alt="" width={1301} height={499} className="image-03"/>
                    <Image ref={image05Ref} src="/images/main/main-top-text-01.png" alt="" width={191} height={472} className="text-02"/>
                    <Image ref={image06Ref} src="/images/main/main-top-text-02.png" alt="" width={191} height={472} className="text-03"/>
                </div>
            </section>
        </div>
    )
}
