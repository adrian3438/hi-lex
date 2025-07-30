'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from "next/image";

interface Props {
    language?: any
}

export default function AboutSwiper({language}: Props) {
    return (
        <Swiper
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay]}
            className="about-swiper"
        >
            <SwiperSlide>
                <Image src="/images/sub/company/about/about-01.png" alt="" width={1600} height={800}/>
                <div>
                    <div>
                        <p>{language?.about_08}</p>
                        <p>{language?.about_09}<br/>{language?.about_10}</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/sub/company/about/about-02.png" alt="" width={1600} height={800}/>
                <div>
                    <div>
                        <p>{language?.about_03}</p>
                        <p>{language?.about_04}<br/>{language?.about_05}</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/sub/company/about/about-03.png" alt="" width={1600} height={800}/>
                <div>
                    <div>
                        <p>{language?.about_06}</p>
                        <p>{language?.about_07}<br/>{language?.about_07_02}</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/sub/company/about/about-04.png" alt="" width={1600} height={800}/>
                <div>
                    <div>
                        <p>{language?.about_08}</p>
                        <p>{language?.about_09}<br/>{language?.about_10}</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
