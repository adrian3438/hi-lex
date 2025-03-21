'use client';

import "@/app/assets/products/products.scss";
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

export default function LatchingSystems() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="products-detail">
      <h3>POWER CLOSURES</h3>
      <div className="products-detail-top">
        <div className="products-detail-list">
          <dl>
            <dt>Side Door Latch</dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 1 ? 'active' : ''} onClick={() => setActiveIndex(1)}>Power Door Actuator</button>
                  <Link href="/research/pds"><Image src="/images/sub/products/3d-link.png" alt="R&D 3D Configurator" width={170} height={20}/></Link>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Lift Gate System <Link href="/research/power-lift-gate"><Image src="/images/sub/products/3d-link.png" alt="R&D 3D Configurator" width={170} height={20}/></Link></dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 2 ? 'active' : ''} onClick={() => setActiveIndex(2)}>Lift Gate System Set</button>
                </li>
                {/* <li>
                                    <button className={activeIndex === 3 ? 'active' : ''} onClick={() => setActiveIndex(3)}>Anti-Pinch Sensor</button>
                                </li>
                                <li>
                                    <button className={activeIndex === 4 ? 'active' : ''} onClick={() => setActiveIndex(4)}>Power Cinching Latch</button>
                                </li> */}
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Sliding Door System</dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 5 ? 'active' : ''} onClick={() => setActiveIndex(5)}>Sliding Door Latch (with Cinching Actuator)</button>
                </li>
                <li>
                  <button className={activeIndex === 6 ? 'active' : ''} onClick={() => setActiveIndex(6)}>Drive Unit</button>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Hood System</dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 7 ? 'active' : ''} onClick={() => setActiveIndex(7)}>Power Cinching Latch</button>
                  <Link href="/research/power-hood"><Image src="/images/sub/products/3d-link.png" alt="R&D 3D Configurator" width={170} height={20}/></Link>
                </li>
                <li>
                  <button className={activeIndex === 8 ? 'active' : ''} onClick={() => setActiveIndex(8)}>Spindle Drive Unit</button>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div className="products-detail-image">
          {(activeIndex === 0 || activeIndex === 1) && (
            <>
              <Image src="/images/sub/products/daedong-g90-products.jpg" alt="" width={992} height={499}/>
              <span className={activeIndex === 1 ? 'products-02-01 active' : 'products-02-01'}></span>
            </>
          )}
          {(activeIndex === 2 || activeIndex === 3 || activeIndex === 4) && (
            <>
              <Image src="/images/sub/products/daedong-canival-rear-products.jpg" alt="" width={992} height={499}/>
              <span className={activeIndex === 2 ? 'products-02-02 active' : 'products-02-02'}></span>
              <span className={activeIndex === 2 ? 'products-02-03 active' : 'products-02-03'}></span>
              <span className={activeIndex === 3 ? 'products-02-04 active' : 'products-02-04'}></span>
              <span className={activeIndex === 3 ? 'products-02-05 active' : 'products-02-05'}></span>
              <span className={activeIndex === 4 ? 'products-02-06 active' : 'products-02-06'}></span>
            </>
          )}
          {(activeIndex === 5 || activeIndex === 6) && (
            <>
              <Image src="/images/sub/products/daedong-canival-products.jpg" alt="" width={992} height={499}/>
              <span className={activeIndex === 5 ? 'products-02-07 active' : 'products-02-07'}></span>
              <span className={activeIndex === 6 ? 'products-02-10 active' : 'products-02-10'}></span>
            </>
          )}

          {(activeIndex === 7 ||  activeIndex === 8) && (
            <>
                <Image src="/images/sub/products/daedong-ev9-products.jpg" alt="" width={992} height={499}/>
                <span className={activeIndex === 7 ? 'products-02-08 active' : 'products-02-08'}></span>
                <span className={activeIndex === 8 ? 'products-02-09 active' : 'products-02-09'}></span>
            </>
          )}
            {/*{(activeIndex === 8) && (
              <>
                  <Image src="/images/sub/products/daedong-ev9-products.jpg" alt="" width={992} height={499}/>
              <span className={activeIndex === 8 ? 'products-02-09 active' : 'products-02-09'}></span>
            </>
          )}*/}
        </div>
      </div>
      {activeIndex === 1 && (
        <>
          <div className="products-detail-middle">
            <h4>Power Door System</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-02-01.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>STANDARD TYPE</p>
              </div>
              <div className="products-text-area">
                The Power Door System (PDS) maximizes convenience with its automatic vehicle door opening and closing functionality, offering effortless and smart door operation.<br/>
                It ensures safety and convenience by providing support at any position during door opening or closing.<br/>
                The system suppresses vibrations and shaking during door movement, achieving smooth and stable operation while delivering a premium vehicle experience through precise position control.<br/>
                With rigorous durability testing and environmental testing under extreme conditions, including temperature, humidity, and dust, it ensures consistent performance over prolonged use.
              </div>
            </div>
          </div>
        </>
      )}

      {activeIndex === 2 && (
        <>
          <div className="products-detail-middle">
            <h4>Lift Gate System Set</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-02-11.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>SPINDLE</p>
              </div>
              <div className="products-text-area">
                The Power Door System (PDS) maximizes convenience with its automatic vehicle door opening and closing functionality, offering effortless and smart door operation.<br/>
                It ensures safety and convenience by providing support at any position during door opening or closing.<br/>
                The system suppresses vibrations and shaking during door movement, achieving smooth and stable operation while delivering a premium vehicle experience through precise position control.<br/>
                With rigorous durability testing and environmental testing under extreme conditions, including temperature, humidity, and dust, it ensures consistent performance over prolonged use.
              </div>
            </div>
          </div>
          <div className="products-detail-bottom">
            <ul>

              {/* <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-02-07.png" alt="LUXURY TYPE" width={284} height={316}/>
                                </p>
                                <p className="text-area">POWER TRAILGATE LATCH<br/>SEPERATED TYPE &amp; ACTUATOR</p>
                            </li> */}
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-02.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">SPINDLE</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-14.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">CINCHING LATCH</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-06.png" alt="LUXURY TYPE" width={259} height={318}/>
                </p>
                <p className="text-area">APS ASSEMBLY</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {activeIndex === 3 && (
        <>
          <div className="products-detail-middle">
            <h4>Anti-Pinch Sensor</h4>
          </div>
          <div className="products-detail-bottom">
            <ul>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-06.png" alt="LUXURY TYPE" width={259} height={318}/>
                </p>
                <p className="text-area">APS ASSEMBLY</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-07.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">POWER TRAILGATE LATCH<br/>SEPERATED TYPE &amp; ACTUATOR</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-08.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">TRUNK LID LATCH</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {activeIndex === 4 && (
        <>
          <div className="products-detail-middle">
            <h4>Power Cinching Latch</h4>
          </div>
          <div className="products-detail-bottom">
            <ul>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-06.png" alt="LUXURY TYPE" width={259} height={318}/>
                </p>
                <p className="text-area">APS ASSEMBLY</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-07.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">POWER TRAILGATE LATCH<br/>SEPERATED TYPE &amp; ACTUATOR</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-08.png" alt="LUXURY TYPE" width={284} height={316}/>
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
            <h4>Sliding Door Latch (with Cinching Actuator)</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-02-04.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>Sliding Door Latch Cinching Type</p>
              </div>
              <div className="products-text-area">
                The side door panel of an automobile is installed internally
                and is responsible for maintaining the locked state of the
                door when connected to the striker attached to the vehicle&#39;s
                body. The door can be opened using the door handle (inner
                /outer) and the cable (rod) that connects to it. On the inner
                handle side, there is a knob, and the door&#39;s lock/unlock
                status can be controlled from the outside using a key, or
                electronically (via trim buttons or a remote control).
                <dl>
                  <dt>Features</dt>
                  <dd>
                    <ul>
                      <li>The release force at stages 1 and 2 when disengaging the striker in the locked state</li>
                      <li>Required functionalities</li>
                      <li>Regulation of operating force</li>
                      <li>Durability and environmental resistance</li>
                      <li>Theft prevention and waterproofing, among other aspects</li>
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
                  <Image src="/images/sub/products/products-02-05.png" alt="LUXURY TYPE" width={259} height={318}/>
                </p>
                <p className="text-area">REMOTE CONTROLLER</p>
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

      {activeIndex === 6 && (
        <>
          <div className="products-detail-middle">
            <h4>Drive Unit</h4>
            <div className="products-area">
              <p style={{fontSize: "25px", fontWeight: 600, padding: "0 20px"}}>Coming Soon</p>
            </div>
          </div>
        </>
      )}

      {activeIndex === 7 && (
        <>
          <div className="products-detail-middle">
            <h4>Power Cinching Latch (R&amp;D)</h4>

            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-02-03.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>Power Cinching Latch</p>
              </div>
              <div className="products-text-area">
                <dl>
                  <dt>Features</dt>
                  <dd>
                    <ul>
                      <li>Dual Operation with One Motor</li>
                      <li>Power Cinching and Power Release/Manual Release</li>
                      <li>Enough Cinching Travel for Smoothly Closing</li>
                      <li>Good Sound Quality</li>
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
                <p className="text-area">POWER e-HOOD LATCH</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-02.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">SPINDLE</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-06.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">APS</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {activeIndex === 8 && (
        <>
          <div className="products-detail-middle">
            <h4>Spindle Drive Unit</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-02-02.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>Spindle Drive Unit</p>
              </div>
              <div className="products-text-area">
                New generation Drive Unit/ECU. The Spindle Drive Unit and
                Control Unit are components that transmit power to open and
                close the tailgate, and control this process. As indoor noise is
                reduced, the Drive Unit should operate in a progressively
                quieter manner.
                <dl>
                  <dt>Features</dt>
                  <dd>
                    <ul>
                      <li>Optimized structure applicable to various automatic opening and closing mechanisms such as tailgates and hoods.</li>
                      <li>Long-lasting performance through environmental testing under extreme temperatures, humidity, dust, and other conditions.</li>
                      <li>Optimal mechanism structure designed to minimize operating noise.</li>
                      <li>Passive selection applied according to the vehicle type<br/>Luxury vehicles: 2-way spindle type / Mid-range and economy vehicles: 1-way gas spring type</li>
                      <li>Application examples<br/>Power tailgate system / Power trunk & frunk system</li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
