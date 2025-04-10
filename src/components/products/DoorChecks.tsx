'use client';

import "@/app/assets/products/products.scss";
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

interface Props {
    language: any
}

export default function DoorChecks({language}: Props) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className="products-detail">
            <h3>{language?.product_03_01}</h3>
            <div className="products-detail-top">
                <div className="products-detail-list">
                    <dl>
                        <dt>{language?.product_03_02}</dt>
                        <dd>
                            <ul>
                                <li>
                                    <button className={activeIndex === 1 ? 'active' : ''} onClick={() => setActiveIndex(1)}>{language?.product_03_03}</button>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div className="products-detail-image">
                    <Image src="/images/sub/products/daedong-ionic-products.jpg" alt="" width={992} height={499}/>
                    <Link href="/products/door-checks#products-03-01" >
                    <span className={activeIndex === 1 ? 'products-03-01 active' : 'products-03-01'}></span>
                    </Link>
                </div>
            </div>
            {activeIndex === 1 && (
                <>
                    <div className="products-detail-middle" id="products-03-01">
                        <h4>{language?.product_03_04}</h4>
                        <div className="products-area">
                            <div className="products-image-area reverse">
                                <Image src="/images/sub/products/products-03-01.png" alt="Plastic (Case) Type" width={361} height={545}/>
                                <p>{language?.product_03_05}</p>
                            </div>
                            <div className="products-text-area">
                                {language?.product_03_06}
                            </div>
                        </div>
                    </div>
                    <div className="products-detail-bottom">
                        <ul>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-03-02.png" alt="LUXURY TYPE" width={259} height={318}/>
                                </p>
                                <p className="text-area">{language?.product_03_07}</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-03-03.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">{language?.product_03_08}</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-03-04.png" alt="LUXURY TYPE" width={266} height={315}/>
                                </p>
                                <p className="text-area">{language?.product_03_09}</p>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}
