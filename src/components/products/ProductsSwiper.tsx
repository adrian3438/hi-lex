'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from "next/image";

export default function ProductsSwiper() {
    return (
        <Swiper
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay]}
            className="products-swiper"
        >
            <SwiperSlide>
                <div>
                    <Image src="/images/sub/products/products-01-001.png" alt="" width={2000} height={1121}/>
                    <span className="products-01-01"></span>
                    <span className="products-01-02"></span>
                    <span className="products-01-03"></span>
                    <span className="products-01-04"></span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src="/images/sub/products/products-01-25.png" alt="" width={2000} height={1121}/>
                    <span className="products-01-09"></span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src="/images/sub/products/products-01-26.png" alt="" width={2000} height={1121}/>
                    <span className="products-01-10"></span>
                    <span className="products-01-11"></span>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
