// 'use client';

// import React, { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import { EffectFade, Navigation } from 'swiper/modules';
// import { Swiper as SwiperType } from 'swiper';
// import Image from "next/image";

// interface Props {
//     language?: any
// }

// export default function AboutVision({ language }: Props) {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const swiperRef = useRef<SwiperType | null>(null);

//     const handleButtonClick = (index: number) => {
//         setActiveIndex(index);
//         swiperRef.current?.slideTo(index);
//     };

//     return (
//         <div className="vision">
//             <div>
//                 <div>
//                 <h2>{language?.about_11}</h2>
//                 <div className="vision-01">
//                     <p>{language?.about_12}</p>
//                     <p>{language?.about_13}</p>
//                 </div>
//                 </div>
//                 <Swiper
//                     onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper 인스턴스 저장
//                     onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // 슬라이드 변경 시 activeIndex 업데이트
//                     navigation={true}
//                     modules={[EffectFade, Navigation]}
//                     effect={'fade'}
//                 >
//                     <SwiperSlide>
//                         <Image src="/images/sub/company/about/about-05.png" alt="" width={1600} height={797} style={{ verticalAlign: 'top' }} />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <Image src="/images/sub/company/about/about-06.jpg" alt="" width={1600} height={797} style={{ verticalAlign: 'top' }} />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <Image src="/images/sub/company/about/about-07.jpg" alt="" width={1600} height={797} style={{ verticalAlign: 'top' }} />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <Image src="/images/sub/company/about/about-08.png" alt="" width={1600} height={797} style={{ verticalAlign: 'top' }} />
//                     </SwiperSlide>
//                 </Swiper>
//                 <div className="vision-btns">
//                     <button onClick={() => handleButtonClick(0)} className={activeIndex === 0 ? 'active' : ''}>
//                         <dl>
//                             <dt>{language?.about_14}</dt>
//                             <dd>{language?.about_15}</dd>
//                         </dl>
//                     </button>
//                     <button onClick={() => handleButtonClick(1)} className={activeIndex === 1 ? 'active' : ''}>
//                         <dl>
//                             <dt>{language?.about_16}</dt>
//                             <dd>{language?.about_17}</dd>
//                         </dl>
//                     </button>
//                     <button onClick={() => handleButtonClick(2)} className={activeIndex === 2 ? 'active' : ''}>
//                         <dl>
//                             <dt>{language?.about_18}</dt>
//                             <dd>{language?.about_19}<br />{language?.about_20}</dd>
//                         </dl>
//                     </button>
//                     <button onClick={() => handleButtonClick(3)} className={activeIndex === 3 ? 'active' : ''}>
//                         <dl>
//                             <dt>{language?.about_21}</dt>
//                             <dd>{language?.about_22}</dd>
//                         </dl>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
