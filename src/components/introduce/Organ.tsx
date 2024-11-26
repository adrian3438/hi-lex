'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Organ() {
    return (
        <Swiper
            slidesPerView={5}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
        >
            <SwiperSlide><Image src="/images/introduce/KOMERI.png" alt="" width={240} height={132}/></SwiperSlide>
            <SwiperSlide><Image src="/images/introduce/hanwah_ocean_logo.png" alt="" width={240} height={132}/></SwiperSlide>
            <SwiperSlide><Image src="/images/introduce/KRISO.png" alt="" width={240} height={132}/></SwiperSlide>
            <SwiperSlide><Image src="/images/introduce/IAE.png" alt="" width={240} height={132}/></SwiperSlide>
            <SwiperSlide><Image src="/images/introduce/KIMM.png" alt="" width={240} height={132}/></SwiperSlide>
            <SwiperSlide><Image src="/images/introduce/gas.jpg" alt="" width={240} height={132}/></SwiperSlide>
            <SwiperSlide><Image src="/images/introduce/kist.png" alt="" width={240} height={132}/></SwiperSlide>
        </Swiper>
    )
}
