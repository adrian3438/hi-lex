'use client';

import "@/app/assets/products/products.scss";
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

interface Props {
  language: any
}

export default function PowerClosures({language}: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="products-detail">
      <h3>{language?.product_02_01}</h3>
      <div className="products-detail-top">
        <div className="products-detail-list">
          <dl>
            <dt>{language?.product_02_02}</dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 1 ? 'active' : ''} onClick={() => setActiveIndex(1)}>{language?.product_02_03}</button>
                  <Link href="/research/pds"><Image src="/images/sub/products/3d-link.png" alt="R&D 3D Configurator" width={170} height={20}/></Link>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>{language?.product_02_04}</dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 2 ? 'active' : ''} onClick={() => setActiveIndex(2)}>{language?.product_02_05}</button>
                  <Link href="/research/power-lift-gate"><Image src="/images/sub/products/3d-link.png" alt="R&D 3D Configurator" width={170} height={20}/></Link>
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
            <dt>{language?.product_02_06}</dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 5 ? 'active' : ''} onClick={() => setActiveIndex(5)}>{language?.product_02_07}</button>
                </li>
                <li>
                  <button className={activeIndex === 6 ? 'active' : ''} onClick={() => setActiveIndex(6)}>{language?.product_02_08}</button>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>{language?.product_02_09}</dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 7 ? 'active' : ''} onClick={() => setActiveIndex(7)}>{language?.product_02_10}</button>
                  <Link href="/research/power-hood"><Image src="/images/sub/products/3d-link.png" alt="R&D 3D Configurator" width={170} height={20}/></Link>
                </li>
                <li>
                  <button className={activeIndex === 8 ? 'active' : ''} onClick={() => setActiveIndex(8)}>{language?.product_02_11}</button>
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
            <h4>{language?.product_02_12}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-02-01.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_02_13}</p>
              </div>
              <div className="products-text-area">
                {language?.product_02_14}<br/>
                {language?.product_02_15}<br/>
                {language?.product_02_16}<br/>
                {language?.product_02_17}
              </div>
            </div>
          </div>
        </>
      )}

      {activeIndex === 2 && (
        <>
          <div className="products-detail-middle">
            <h4>{language?.product_02_18}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-02-11.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_02_19}</p>
              </div>
              <div className="products-text-area">
                {language?.product_02_20}<br/>
                {language?.product_02_21}<br/>
                {language?.product_02_22}<br/>
                {language?.product_02_23}
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
              {/* <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-02.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">SPINDLE</p>
              </li> */}
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-09.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_02_24}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-06.png" alt="LUXURY TYPE" width={259} height={318}/>
                </p>
                <p className="text-area">{language?.product_02_25}</p>
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
            <h4>{language?.product_02_26}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-02-04.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_02_27}</p>
              </div>
              <div className="products-text-area">
                {language?.product_02_28}
                <dl>
                  <dt>{language?.product_02_29}</dt>
                  <dd>
                    <ul>
                      <li>{language?.product_02_30}</li>
                      <li>{language?.product_02_31}</li>
                      <li>{language?.product_02_32}</li>
                      <li>{language?.product_02_33}</li>
                      <li>{language?.product_02_34}</li>
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
                <p className="text-area">{language?.product_02_35}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-16.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_02_36}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-17.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_02_37}</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {activeIndex === 6 && (
        <>
          <div className="products-detail-middle">
            <h4>{language?.product_02_38}</h4>
            <div className="products-area">
              <p style={{fontSize: "25px", fontWeight: 600, padding: "0 20px"}}>{language?.product_02_39}</p>
            </div>
          </div>
        </>
      )}

      {activeIndex === 7 && (
        <>
          <div className="products-detail-middle">
            <h4>{language?.product_02_40}</h4>

            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-02-03.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_02_41}</p>
              </div>
              <div className="products-text-area">
                <dl>
                  <dt>{language?.product_02_42}</dt>
                  <dd>
                    <ul>
                      <li>{language?.product_02_43}</li>
                      <li>{language?.product_02_44}</li>
                      <li>{language?.product_02_45}</li>
                      <li>{language?.product_02_46}</li>
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
                <p className="text-area">{language?.product_02_47}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-02.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_02_48}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-02-06.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_02_49}</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {activeIndex === 8 && (
        <>
          <div className="products-detail-middle">
            <h4>{language?.product_02_50}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-02-02.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_02_51}</p>
              </div>
              <div className="products-text-area">
                {language?.product_02_52}
                <dl>
                  <dt>{language?.product_02_53}</dt>
                  <dd>
                    <ul>
                      <li>{language?.product_02_54}</li>
                      <li>{language?.product_02_55}</li>
                      <li>{language?.product_02_56}</li>
                      <li>{language?.product_02_57}<br/>{language?.product_02_58}</li>
                      <li>{language?.product_02_59}<br/>{language?.product_02_60}</li>
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
