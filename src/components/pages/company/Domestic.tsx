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

            <div className="vimeo" style={{marginBottom: "20px !important"}}>
                {mapIndex === 0 && (
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/1076618346?h=9cd0f89a01" style={{ border: 0, width: "100%", marginTop: "60px", padding: 0, display: "block", aspectRatio: "16 / 9" }}  allow="autoplay; fullscreen" allowFullScreen></iframe>
                )}
                {mapIndex === 1 && (
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/1076618554?h=e882de0700" style={{ border: 0, width: "100%", marginTop: "60px", padding: 0, display: "block", aspectRatio: "16 / 9" }}  allow="autoplay; fullscreen" allowFullScreen></iframe>
                )}
            </div>

            {/* <div className="daedong-maps">
                {mapIndex === 0 && (
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.21799038203!2d126.65058817628939!3d37.36101853588555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b76f55d42108f%3A0x468edbfd64548097!2z7J247LKc6rSR7Jet7IucIOyXsOyImOq1rCDssqjri6jrjIDroZwxMjTrsojquLggNjQ!5e0!3m2!1sko!2skr!4v1735281561103!5m2!1sko!2skr" width="600" height="450" style={{ border: 0, width: "100%", margin: 0, padding: 0, display: "block" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                )}
                {mapIndex === 1 && (
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.6845212830367!2d126.64428907628988!3d37.37364103516491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7650d69ef6fd%3A0x61b3d7233873a569!2z7J247LKc6rSR7Jet7IucIOyXsOyImOq1rCDshqHrj4Trj5kgMTEtNjM!5e0!3m2!1sko!2skr!4v1735281917864!5m2!1sko!2skr" width="600" height="450" style={{ border: 0, width: "100%", margin: 0, padding: 0, display: "block" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                )}

            </div> */}

            <div className="address">
                {mapIndex === 0 && (
                    <div className="address-content">
                    <div className="address-image">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.21799038203!2d126.65058817628939!3d37.36101853588555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b76f55d42108f%3A0x468edbfd64548097!2z7J247LKc6rSR7Jet7IucIOyXsOyImOq1rCDssqjri6jrjIDroZwxMjTrsojquLggNjQ!5e0!3m2!1sko!2skr!4v1735281561103!5m2!1sko!2skr" width="600" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="address-text">
                      <p><span>{language?.location_04}</span></p>
                      <p>{language?.location_04_01}</p>
                      <p><span>{language?.location_05}</span>{language?.location_05_01}</p>
                      <p><span>{language?.location_06}</span>{language?.location_06_01}</p>
                    </div>
                  </div>
                )}

                {mapIndex === 1 && (
                    <div className="address-content">
                    <div className="address-image">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.6845212830367!2d126.64428907628988!3d37.37364103516491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7650d69ef6fd%3A0x61b3d7233873a569!2z7J247LKc6rSR7Jet7IucIOyXsOyImOq1rCDshqHrj4Trj5kgMTEtNjM!5e0!3m2!1sko!2skr!4v1735281917864!5m2!1sko!2skr" width="600" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="address-text">
                      <p><span>{language?.location_07}</span></p>
                      <p>{language?.location_07_01}</p>
                      <p><span>{language?.location_08}</span>{language?.location_08_01}</p>
                      <p><span>{language?.location_09}</span>{language?.location_09_01}</p>
                    </div>
                  </div>
                )}
            </div>
        </div>
    )
}
