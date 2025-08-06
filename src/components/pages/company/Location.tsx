'use client';

import "@/app/assets/company/location.scss";
import {useState} from "react";
import Image from "next/image";

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
                <button className={mapIndex === 2 ? 'active' : ''} onClick={() => setMapIndex(2)}>{language?.location_btn_03}</button>
                <button className={mapIndex === 3 ? 'active' : ''} onClick={() => setMapIndex(3)}>{language?.location_btn_06}</button>
            </div>

            <div className="daedong-maps">
                {mapIndex === 0 && (
                    <Image src="/images/sub/company/affiliate/daedong-india-factory-overseas.png" alt="" width={1600} height={780} />
                )}
                {mapIndex === 1 && (
                    <Image src="/images/sub/company/affiliate/daedong-china-factory-overseas.jpg" alt="" width={1600} height={780} />
                )}
                {mapIndex === 2 && (
                    <Image src="/images/sub/company/affiliate/daedong-mexico-factory-overseas.jpg" alt="" width={1600} height={780} />
                )}
                 {mapIndex === 3 && (
                    <Image src="/images/sub/company/affiliate/daedong-poland-factory-overseas.jpg" alt="" width={1600} height={780} />
                )}
            </div>

            <div className="address">
                {mapIndex === 0 && (
                    <div className="address-content">
                    <div className="address-image">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1156.5435037727693!2d79.91379811953752!3d12.834671613480705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52efbcaca66db1%3A0xfc9e25c0f9bcc1eb!2sHi-Lex%20Door%20India%20Pvt%20Ltd!5e0!3m2!1sko!2skr!4v1741147201359!5m2!1sko!2skr" width="600" height="350"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="address-text">
                      <p><span>{language?.location_13}</span></p>
                      <p>{language?.location_14}</p>
                      <p><span>{language?.location_15}</span></p>
                      <p>{language?.location_15_01}</p>
                    </div>
                  </div>
                )}
                 {mapIndex === 1 && (
                    <div className="address-content">
                    <div className="address-image">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846.790894260944!2d120.53494557372949!3d31.90215264997351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b3de2441b33c73%3A0x796f2b421c01cb4e!2sJiangsu%20Datong%20Duowo%20Automobile%20Parts%20(You)!5e0!3m2!1sko!2skr!4v1741147485605!5m2!1sko!2skr" width="600" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="address-text">
                      <p><span>{language?.location_16_01}</span></p>
                      <p>{language?.location_16}</p>
                      <p><span>{language?.location_17}</span></p>
                      <p>{language?.location_18}</p>
                    </div>
                  </div>
                )}
                 {mapIndex === 2 && (
                    <div className="address-content">
                    <div className="address-image">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.999245405822!2d-100.13683862393418!3d25.704449010967227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662e9007f7ee8a1%3A0x32986e3355a49614!2sHI-LEX%20Daedong%20Door%20M%C3%A9xico!5e0!3m2!1sko!2skr!4v1741147811582!5m2!1sko!2skr" width="600" height="350"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="address-text">
                      <p><span>{language?.location_16_01}</span></p>
                      <p>{language?.location_20}</p>
                      <p><span>{language?.location_17}</span></p>
                      <p>{language?.location_18}</p>
                    </div>
                  </div>
                )}
                 {mapIndex === 3 && (
                    <div className="address-content">
                    <div className="address-image">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2577.4526409444493!2d18.615876!3d49.758742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471401548605071d%3A0xe942c7396e55c62e!2sDaedong%20System%20Poland%20Sp.%20z%20o.o.!5e0!3m2!1sko!2skr!4v1752719713182!5m2!1sko!2skr" width="600" height="350"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="address-text">
                      <p><span>{language?.location_23}</span></p>
                      <p>{language?.location_24}</p>
                      <p><span>{language?.location_25}</span></p>
                      <p>{language?.location_26}</p>
                    </div>
                  </div>
                )}
            </div>
           
        </div>
    )
}
