'use client';

import "@/app/assets/products/products.scss";
import Image from "next/image";
import {useState} from "react";

export default function DoorChecks() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className="products-detail">
            <h3>DOOR CHECKS</h3>
            <div className="products-detail-top">
                <div className="products-detail-list">
                    <dl>
                        <dt>DOOR CHECKS</dt>
                        <dd>
                            <ul>
                                <li>
                                    <button className={activeIndex === 1 ? 'active' : ''} onClick={() => setActiveIndex(1)}>DOOR CHECKS</button>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div className="products-detail-image">
                    <Image src="/images/sub/products/daedong-ionic-products.jpg" alt="" width={992} height={499}/>
                    <span className={activeIndex === 1 ? 'products-03-01 active' : 'products-03-01'}></span>
                </div>
            </div>
            {activeIndex === 1 && (
                <>
                    <div className="products-detail-middle">
                        <h4>Door Checks</h4>
                        <div className="products-area">
                            <div className="products-image-area">
                                <Image src="/images/sub/products/products-03-01.png" alt="Plastic (Case) Type" width={361} height={545}/>
                                <p>Plastic (Case) Type</p>
                            </div>
                            <div className="products-text-area">
                                The convenience and safety auxiliary device that controls
                                the full opening of an automobile door and provides step-
                                by-step operating force during door opening and closing.
                                A device installed on both the car&#39;s body and the inside of
                                the door, which is connected and imparts operating force
                                during door open/close actions to control the angle of
                                opening and closing. (Prevents unintended angles caused
                                by slopes, wind, etc., enhancing safety and convenience
                                and preventing accidents.)
                            </div>
                        </div>
                    </div>
                    <div className="products-detail-bottom">
                        <ul>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-03-02.png" alt="LUXURY TYPE" width={259} height={318}/>
                                </p>
                                <p className="text-area">LUXURY TYPE</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-03-03.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">SLIDE TYPE</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-03-04.png" alt="LUXURY TYPE" width={266} height={315}/>
                                </p>
                                <p className="text-area">ROLLER TYPE</p>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}
