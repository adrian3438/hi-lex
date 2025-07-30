'use client';

import React, { useState, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import Image from "next/image";

interface Props {
    language?: any
}

export default function AboutVision({ language }: Props) {


    return (
        <div className="vision">
            <div>
                <div>
                <h2>{language?.about_11}</h2>
                <div className="vision-01">
                    <p>{language?.about_12}</p>
                    <p>{language?.about_13}</p>
                </div>
                </div>
                
                <div className="vision-btns">
                        <div>
                            <Image src="/images/sub/company/about/about-05.png" alt="" width={677} height={336} />
                            <p className='first'>{language?.about_14}</p>
                            <p className="second">{language?.about_15}</p>
                        </div>
                        <div>
                            <Image src="/images/sub/company/about/about-06.jpg" alt="" width={677} height={336} />
                            <p className='first'>{language?.about_16}</p>
                            <p className="second">{language?.about_17}</p>
                        </div>
                        <div>
                            <Image src="/images/sub/company/about/about-07.jpg" alt="" width={677} height={336} />
                            <p className='first'>{language?.about_18}</p>
                            <p className="second">{language?.about_19}<br/>{language?.about_20}</p>
                        </div>
                        <div>
                            <Image src="/images/sub/company/about/about-08.png" alt="" width={677} height={336} />
                            <p className='first'>{language?.about_21}</p>
                            <p className="second">{language?.about_22}</p>
                        </div>
                </div>
            </div>
        </div>
    );
}
