'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ClientSlide() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-01.png" alt="" width={335} height={186}/>
                </div>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-02.png" alt="" width={335} height={186}/>
                </div>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-03.png" alt="" width={335} height={186}/>
                </div>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-04.png" alt="" width={335} height={186}/>
                </div>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-05.png" alt="" width={335} height={186}/>
                </div>
                <div>
                    <Image src="/images/sub/products/clients/client-slide-06.png" alt="" width={335} height={186}/>
                </div>
            </Slider>
        </div>
    )
}
