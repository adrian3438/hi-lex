'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ClientSlideR() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: true,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-07.png" alt="" width={335} height={186}/>
                </div>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-08.png" alt="" width={335} height={186}/>
                </div>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-09.png" alt="" width={335} height={186}/>
                </div>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-10.png" alt="" width={335} height={186}/>
                </div>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-11.png" alt="" width={335} height={186}/>
                </div>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-12.png" alt="" width={335} height={186}/>
                </div>
            </Slider>
        </div>
    )
}