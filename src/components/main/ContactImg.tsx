'use client'

import Image from "next/image";
import ContactVideoModal from "@/components/main/ContactVideoModal";
import {useState} from "react";

export default function ContactImg() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <>
            <div className="image-area" onClick={() => openModal()} style={{ cursor: "pointer" }} >
                <Image src="/images/main/main-bg-03.png" alt="ship" width={494} height={298}/>
                <button></button>
            </div>
            <ContactVideoModal isOpen={modalIsOpen} onRequestClose={closeModal}/>
        </>
    )
}
