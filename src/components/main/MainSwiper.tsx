'use client';
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import MainModelingModal from "@/components/modal/MainModelingModal";
import {useState} from "react";

export default function MainSwiper() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={200}
                grabCursor={true}
                className="mySwiper"
            >
                <SwiperSlide onClick={openModal}>
                    <Image src="/images/main/project-00.png" alt="Project" width={360} height={504}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/main/project-01.png" alt="Project" width={360} height={504}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/main/project-02.png" alt="Project" width={360} height={504}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/main/project-03.png" alt="Project" width={360} height={504}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/main/project-04.png" alt="Project" width={360} height={504}/>
                </SwiperSlide>
            </Swiper>
            <MainModelingModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            />
        </>
    )
}
