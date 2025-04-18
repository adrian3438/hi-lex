'use client';

import "@/app/assets/company/location.scss";
import {useState} from "react";

interface Props {
    language?: any
}

export default function Location({language}: Props) {
    const [mapIndex, setMapIndex] = useState<number>(0);
    return (
        <div className="container">
            <div className="location-btns">
                <button className={mapIndex === 0 ? 'active' : ''} onClick={() => setMapIndex(0)}>{language?.location_btn_04}</button>
                <button className={mapIndex === 1 ? 'active' : ''} onClick={() => setMapIndex(1)}>{language?.location_btn_05}</button>
             
            </div>

            <div className="daedong-maps">
                {mapIndex === 0 && (
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1156.5435037727693!2d79.91379811953752!3d12.834671613480705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52efbcaca66db1%3A0xfc9e25c0f9bcc1eb!2sHi-Lex%20Door%20India%20Pvt%20Ltd!5e0!3m2!1sko!2skr!4v1741147201359!5m2!1sko!2skr" width="600" height="450" style={{"border": 0, width: "100%"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                )}
                {mapIndex === 1 && (
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846.790894260944!2d120.53494557372949!3d31.90215264997351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b3de2441b33c73%3A0x796f2b421c01cb4e!2sJiangsu%20Datong%20Duowo%20Automobile%20Parts%20(You)!5e0!3m2!1sko!2skr!4v1741147485605!5m2!1sko!2skr" width="600" height="450" style={{"border": 0, width: "100%"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                )}
            </div>

            <div className="address">
                {mapIndex === 0 && (
                    <>
                        <p>{language?.location_13}</p>
                        <p>{language?.location_14}</p>
                        <p>{language?.location_15}</p>
                    </>
                )}
                {mapIndex === 1 && (
                    <>
                        <p>{language?.location_16}</p>
                        <p>{language?.location_17}</p>
                        <p>{language?.location_18}</p>
                    </>
                )}
            </div>
        </div>
    )
}
