'use client';

import "@/app/assets/products/products.scss";
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
import ProductsSwiper from "@/components/products/ProductsSwiper";

export default function LatchingSystems() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className="products-detail">
            <h3>LATCHING SYSTEMS</h3>
            <div className="products-detail-top">
                <div className="products-detail-list">
                    <dl>
                        <dt>Side Door Latches</dt>
                        <dd>
                            <ul>
                                <li>
                                    <button className={activeIndex === 1 ? 'active' : ''} onClick={() => setActiveIndex(1)}>Standard Latch</button>
                                </li>
                                <li>
                                    <button className={activeIndex === 2 ? 'active' : ''} onClick={() => setActiveIndex(2)}>E-Latch</button>
                                    <Link href="/research/e-latch"><Image src="/images/sub/products/3d-link.png" alt="R&D 3D Configurator" width={170} height={20} /></Link>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Secondary Latches</dt>
                        <dd>
                            <ul>
                                <li>
                                    <button className={activeIndex === 3 ? 'active' : ''} onClick={() => setActiveIndex(3)}>Hood (Frunk) Latch</button>
                                </li>
                                <li>
                                    <button className={activeIndex === 4 ? 'active' : ''} onClick={() => setActiveIndex(4)}>Trunk / Tailgate Latch</button>
                                </li>
                                <li>
                                    <button className={activeIndex === 5 ? 'active' : ''} onClick={() => setActiveIndex(5)}>Pick-up Latch / Quarter Storage Latch</button>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Sliding Door Locking System</dt>
                        <dd>
                            <ul>
                                <li>
                                    <button className={activeIndex === 6 ? 'active' : ''} onClick={() => setActiveIndex(6)}>Remote Controller</button>
                                </li>
                                <li>
                                    <button className={activeIndex === 7 ? 'active' : ''} onClick={() => setActiveIndex(7)}>Front Latch / Rear Latch</button>
                                </li>
                                <li>
                                    <button className={activeIndex === 8 ? 'active' : ''} onClick={() => setActiveIndex(8)}>Hold Open Lock</button>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Strikers</dt>
                        <dd>
                            <ul>
                                <li>
                                    <button className={activeIndex === 9 ? 'active' : ''} onClick={() => setActiveIndex(9)}>Strikers</button>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div className="products-detail-image">
                    {(activeIndex === 0 || activeIndex === 1 || activeIndex === 2 || activeIndex === 3 || activeIndex === 4) && (
                        <>
                            <Image src="/images/sub/products/products-01-001.png" alt="" width={992} height={499}/>
                            <span className={activeIndex === 1 || activeIndex === 2 ? 'products-01-01 active' : 'products-01-01'}></span>
                            <span className={activeIndex === 1 || activeIndex === 2 ? 'products-01-02 active' : 'products-01-02'}></span>
                            <span className={activeIndex === 3 ? 'products-01-03 active' : 'products-01-03'}></span>
                            <span className={activeIndex === 4 ? 'products-01-04 active' : 'products-01-04'}></span>
                            {/*<Image src="/images/sub/products/products-01-001.png" alt="" width={992} height={499}/>*/}
                        </>
                    )}
                    {(activeIndex === 5 || activeIndex === 6 || activeIndex === 7 || activeIndex === 8) && (
                        <>
                            <Image src="/images/sub/products/products-01-18.png" alt="" width={992} height={499}/>
                            <span className={activeIndex === 5 ? 'products-01-05 active' : 'products-01-05'}></span>
                            <span className={activeIndex === 6 ? 'products-01-06 active' : 'products-01-06'}></span>
                            <span className={activeIndex === 7 ? 'products-01-07 active' : 'products-01-07'}></span>
                            <span className={activeIndex === 8 ? 'products-01-08 active' : 'products-01-08'}></span>
                        </>
                    )}
                    {(activeIndex === 9) && (
                        <>
                            <ProductsSwiper/>
                        </>
                    )}
                </div>
            </div>
            {activeIndex === 1 && (
                <>
                    <div className="products-detail-middle">
                        <h4>Standard Latch</h4>
                        <div className="products-area">
                            <div className="products-image-area">
                                <Image src="/images/sub/products/products-01-01.png" alt="Plastic (Case) Type" width={361} height={545}/>
                                <p>STANDARD Gen3 LATCH</p>
                            </div>
                            <div className="products-text-area">
                                The panel installed inside the car&#39;s side door, when connected
                                to the vehicle&#39;s striker mounted on the body, maintains the
                                door&#39;s locked state. It can be opened using the door handle
                                (inner/outer) and the cable (rod) connected to it. The door can
                                be opened by operation the handle. There is a knob on the inner
                                handle side, and the door&#39;s lock / unlock status can also be
                                controlled from the outside using a key, or electronically (via
                                trim buttons or a remote control). Additionally, there are
                                various convenience features associated with it.
                                <dl>
                                    <dt>Features</dt>
                                    <dd>
                                        <ul>
                                            <li>Side Door Closure Hold Function</li>
                                            <li>Central Lock/Unlock Function</li>
                                            <li>Door Opening Function with Outside & Inside Handle</li>
                                            <li>Door Ajar Sensing function</li>
                                            <li>Child Lock (Child Safety Function)</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="products-detail-bottom">
                        <ul>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-02.png" alt="LUXURY TYPE" width={259} height={318}/>
                                </p>
                                <p className="text-area">COMPACT LATCH</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-03.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">STANDARD Gen2 LATCH</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-04.png" alt="LUXURY TYPE" width={266} height={315}/>
                                </p>
                                <p className="text-area">STANDARD Gen3 LATCH</p>
                            </li>
                        </ul>
                    </div>
                </>
            )}

            {activeIndex === 2 && (
                <>
                    <div className="products-detail-middle">
                        <h4>E-Latch, E-Latch (with Cinching) (R&D)</h4>
                        <div className="products-area">
                            <div className="products-image-area">
                                <Image src="/images/sub/products/products-01-05.png" alt="Plastic (Case) Type" width={361} height={545}/>
                                <p>e-Latch, e-Latch with Cinching</p>
                            </div>
                            <div className="products-text-area">
                                <dl>
                                    <dt>Features</dt>
                                    <dd>
                                        <ul>
                                            <li>Easy Door Development through Button Operation</li>
                                            <li>Provide a physical door opening mechanism for emergency situations.</li>
                                            <li>Enable automatic two-stage locking via actuator connection.</li>
                                            <li>Integrate with power door actuators to provide fully automatic door opening and closing functions.</li>
                                            <li>Implement all additional features at a cost equivalent to standard door latches.</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {activeIndex === 3 && (
                <>
                    <div className="products-detail-middle">
                        <h4>Hood (Frunk) Latch</h4>
                        <div className="products-area">
                            <div className="products-image-area">
                                <Image src="/images/sub/products/products-01-06.png" alt="Plastic (Case) Type" width={361} height={545}/>
                                <p>STANDARD TYPE</p>
                            </div>
                            <div className="products-text-area">
                                The Front End Module (FEM) is installed on the vehicle&#39;s
                                body, and when the hood is closed, it remains locked in place
                                by engaging with the striker mounted on the hood.
                                To open the hood, you need to pull the Hood Open Lever
                                located beneath the driver&#39;s seat. When you do this, the
                                Hood Latch is partially released, causing the hood to pop
                                up. With the hood in the popped-up position, you can reach
                                your hand between the gaps and operate the Lever (Hook
                                Safety) to fully open the hood.
                                <dl>
                                    <dt>Features</dt>
                                    <dd>
                                        <ul>
                                            <li>Hood Closure Hold Function</li>
                                            <li>Double Locking & Release Function</li>
                                            <li>Release Function by Mechanical & Electricity</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="products-detail-bottom">
                        <ul>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-07.png" alt="LUXURY TYPE" width={259} height={318}/>
                                </p>
                                <p className="text-area">HOOD LATCH RELEASE ACTUATOR</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-08.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">EV TYPE</p>
                            </li>
                        </ul>
                    </div>
                </>
            )}

            {activeIndex === 4 && (
                <>
                    <div className="products-detail-middle">
                        <h4>Trunk / Tailgate Latch</h4>
                        <div className="products-area">
                            <div className="products-image-area">
                                <Image src="/images/sub/products/products-01-09.png" alt="Plastic (Case) Type" width={361} height={545}/>
                                <p>POWER TAILGATE LATCH<br/>
                                    (INTEGRATE TYPE)</p>
                            </div>
                            <div className="products-text-area">
                                The opening and locking mechanism of an automobile&#39;s
                                tailgate. A striker attached to the vehicle&#39;s body (or tailgate)
                                that keeps the tailgate closed, and it can be opened using
                                a button, key, handle, handle&#39;s touch sensor, remote control,
                                and similar methods. The adoption of the Power Tailgate
                                System is increasing as a trend to enhance convenience.
                                For power closure, it can be operated using a button or
                                remote control.
                            </div>
                        </div>
                    </div>
                    <div className="products-detail-bottom">
                        <ul>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-10.png" alt="LUXURY TYPE" width={259} height={318}/>
                                </p>
                                <p className="text-area">APS ASSEMBLY</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-11.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">POWER TAILGATE LATCH<br/>SEPARATED TYPE & ACTUATOR</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-12.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">TRUNK LID LATCH</p>
                            </li>
                        </ul>
                    </div>
                </>
            )}

            {activeIndex === 5 && (
                <>
                    <div className="products-detail-middle">
                        <h4>Pick-up Latch/ Quarter Storage Latch</h4>
                        <div className="products-area">
                            <div className="products-image-area">
                                <Image src="/images/sub/products/products-01-13.png" alt="Plastic (Case) Type" width={361} height={545}/>
                                <p>Quarter Storage Latch</p>
                            </div>
                            <div className="products-text-area">
                                <dl>
                                    <dt>Features</dt>
                                    <dd>
                                        <ul>
                                            <li>Development of a latching structure for the storage space of a pickup truck quarter panel (anti-theft).</li>
                                            <li>Improved user convenience with an electric opening feature.</li>
                                            <li>Enhanced safety through the application of an open detection switch.</li>
                                            <li>Increased storage space by reducing the size.</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {activeIndex === 6 && (
                <>
                    <div className="products-detail-middle">
                        <h4>Remote Controller</h4>
                        <div className="products-area">
                            <div className="products-image-area">
                                <Image src="/images/sub/products/products-01-15.png" alt="Plastic (Case) Type" width={361} height={545}/>
                                <p>REMOTE CONTROLLER</p>
                            </div>
                            <div className="products-text-area">
                                <dl>
                                    <dt>Features</dt>
                                    <dd>
                                        <ul>
                                            <li>Development of a latching structure for the storage space of a pickup truck quarter panel (anti-theft).</li>
                                            <li>Improved user convenience with an electric opening feature.</li>
                                            <li>Enhanced safety through the application of an open detection switch.</li>
                                            <li>Increased storage space by reducing the size.</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="products-detail-bottom">
                        <ul>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-14.png" alt="LUXURY TYPE" width={259} height={318}/>
                                </p>
                                <p className="text-area">CINCHING LATCH</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-16.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">FRONT LATCH</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-17.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">HOLD OPEN LOCK</p>
                            </li>
                        </ul>
                    </div>
                </>
            )}

            {activeIndex === 7 && (
                <>
                    <div className="products-detail-middle">
                        <h4>Front Latch / Rear Latch</h4>
                        <div className="products-area">
                            <div className="products-image-area">
                                <Image src="/images/sub/products/products-01-16.png" alt="Plastic (Case) Type" width={361} height={545}/>
                                <p>FRONT LATCH</p>
                            </div>
                            <div className="products-text-area">
                                <dl>
                                    <dt>Features</dt>
                                    <dd>
                                        <ul>
                                            <li>Development of a latching structure for the storage space of a pickup truck quarter panel (anti-theft).</li>
                                            <li>Improved user convenience with an electric opening feature.</li>
                                            <li>Enhanced safety through the application of an open detection switch.</li>
                                            <li>Increased storage space by reducing the size.</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="products-detail-bottom">
                        <ul>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-14.png" alt="LUXURY TYPE" width={259} height={318}/>
                                </p>
                                <p className="text-area">CINCHING LATCH</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-15.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">REMOTE CONTROLLER</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-17.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">HOLD OPEN LOCK</p>
                            </li>
                        </ul>
                    </div>
                </>
            )}

            {activeIndex === 8 && (
                <>
                    <div className="products-detail-middle">
                        <h4>Hold Open Lock</h4>
                        <div className="products-area">
                            <div className="products-image-area">
                                <Image src="/images/sub/products/products-01-17.png" alt="Plastic (Case) Type" width={361} height={545}/>
                                <p>HOLD OPEN LOCK</p>
                            </div>
                            <div className="products-text-area">
                                <dl>
                                    <dt>Features</dt>
                                    <dd>
                                        <ul>
                                            <li>Development of a latching structure for the storage space of a pickup truck quarter panel (anti-theft).</li>
                                            <li>Improved user convenience with an electric opening feature.</li>
                                            <li>Enhanced safety through the application of an open detection switch.</li>
                                            <li>Increased storage space by reducing the size.</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="products-detail-bottom">
                        <ul>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-14.png" alt="LUXURY TYPE" width={259} height={318}/>
                                </p>
                                <p className="text-area">CINCHING LATCH</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-15.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">REMOTE CONTROLLER</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-16.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">FRONT LATCH</p>
                            </li>
                        </ul>
                    </div>
                </>
            )}

            {activeIndex === 9 && (
                <>
                    <div className="products-detail-middle">
                        <h4>Strikers</h4>
                        <div className="products-area">
                            <div className="products-image-area">
                                <Image src="/images/sub/products/products-01-20.png" alt="Plastic (Case) Type" width={361} height={545}/>
                                <p>TAILGATE STRIKER</p>
                            </div>
                            <div className="products-text-area">
                                The door of the car (Side, Slide, Trunk, Tailgate, etc.) is usually
                                mounted opposite to the latch, and when the door is closed
                                It is combined with Latch to maintain the locked state of the door.
                                In addition to simple locking roles, attach lever for Open, attach
                                switch for detection, attach flow prevention guide, power
                                functions, etc. Additional functions can be added depending on
                                the layout conditions
                            </div>
                        </div>
                    </div>
                    <div className="products-detail-bottom">
                        <ul>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-21.png" alt="LUXURY TYPE" width={259} height={318}/>
                                </p>
                                <p className="text-area">TAILGATE STRIKER</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-22.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">PICKUP TAILGATE STRIKER</p>
                            </li>
                            <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-23.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">SIDE DOOR STRIKER</p>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}
