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
                <button className={mapIndex === 0 ? 'active' : ''} onClick={() => setMapIndex(0)}>{language?.location_btn_01}</button>
                <button className={mapIndex === 1 ? 'active' : ''} onClick={() => setMapIndex(1)}>{language?.location_btn_02}</button>
            </div>

            <div className="daedong-maps">
                {mapIndex === 0 && (
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.917924524941!2d126.6948583762906!3d37.39177323412926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b70ad124b78d7%3A0xc6d4c8dec2e18b2d!2z64yA64-Z7ZWY7J2066CJ7Iqk!5e0!3m2!1sko!2skr&hl=en!4v1734327157177!5m2!1sko!2skr" width="600" height="450" style={{"border": 0, width: "100%"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                )}
                {mapIndex === 1 && (
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30166.173043220628!2d126.60661938758781!3d37.37023831595314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b76f51427d271%3A0x5c31b9f57099016d!2z64yA64-Z64-E7Ja0KOyjvCk!5e0!3m2!1sko!2skr!4v1734327918023!5m2!1sko!2skr" width="600" height="450" style={{"border": 0, width: "100%"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                )}
            </div>

            <div className="address">
                {mapIndex === 0 && (
                    <>
                        <p>{language?.location_04}</p>
                        <p>{language?.location_05}</p>
                        <p>{language?.location_06}</p>
                    </>
                )}
                {mapIndex === 1 && (
                    <>
                        <p>{language?.location_07}</p>
                        <p>{language?.location_08}</p>
                        <p>{language?.location_09}</p>
                    </>
                )}
            </div>
        </div>
    )
}
