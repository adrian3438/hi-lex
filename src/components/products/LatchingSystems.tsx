'use client';

import "@/app/assets/products/products.scss";
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
import ProductsSwiper from "@/components/products/ProductsSwiper";

interface Props {
  language: any
}

export default function LatchingSystems({language}: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="products-detail">
      <h3>{language?.product_01_01}</h3>
      <div className="products-detail-top">
        <div className="products-detail-list">
          <dl>
            <dt>{language?.product_01_02}</dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 1 ? 'active' : ''} onClick={() => setActiveIndex(1)}>{language?.product_01_03}</button>
                </li>
                <li>
                  <button className={activeIndex === 2 ? 'active' : ''} onClick={() => setActiveIndex(2)}>{language?.product_01_04}</button>
                  <Link href="/research/e-latch"><Image src="/images/sub/products/3d-link.png" alt="R&D 3D Configurator" width={170} height={20}/></Link>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>{language?.product_01_04_01}</dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 3 ? 'active' : ''} onClick={() => setActiveIndex(3)}>{language?.product_01_05}</button>
                </li>
                <li>
                  <button className={activeIndex === 4 ? 'active' : ''} onClick={() => setActiveIndex(4)}>{language?.product_01_06}</button>
                </li>
                <li>
                  <button className={activeIndex === 5 ? 'active' : ''} onClick={() => setActiveIndex(5)}>{language?.product_01_07}</button>
                </li>
                <li>
                  <button className={activeIndex === 6 ? 'active' : ''} onClick={() => setActiveIndex(6)}>{language?.product_01_08}</button>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>{language?.product_01_09}</dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 7 ? 'active' : ''} onClick={() => setActiveIndex(7)}>{language?.product_01_10}</button>
                </li>
                <li>
                  <button className={activeIndex === 8 ? 'active' : ''} onClick={() => setActiveIndex(8)}>{language?.product_01_11}</button>
                </li>
                {/* <li>
                                    <button className={activeIndex === 8 ? 'active' : ''} onClick={() => setActiveIndex(8)}>Hold Open Lock</button>
                                </li> */}
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>{language?.product_01_12}</dt>
            <dd>
              <ul>
                <li>
                  <button className={activeIndex === 9 ? 'active' : ''} onClick={() => setActiveIndex(9)}>{language?.product_01_12}</button>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div className="products-detail-image">
          {(activeIndex === 0 || activeIndex === 1 || activeIndex === 2 || activeIndex === 3 || activeIndex === 4) && (
            <>
              <Image src="/images/sub/products/daedong-ionic-products.jpg" alt="" width={992} height={499}/>
              <span className={activeIndex === 1 ? 'products-01-01 active' : 'products-01-01'}>{activeIndex === 1 && <Link href="#productsDetail"/>}</span>
              <span className={activeIndex === 1 || activeIndex === 2 ? 'products-01-02 active' : 'products-01-02'}>{(activeIndex === 1 || activeIndex === 2) && <Link href="#productsDetail"/>}</span>
              <span className={activeIndex === 3 ? 'products-01-03 active' : 'products-01-03'}>{activeIndex === 3 && <Link href="#productsDetail"/>}</span>
              <span className={activeIndex === 4 ? 'products-01-04 active' : 'products-01-04'}>{activeIndex === 4 && <Link href="#productsDetail"/>}</span>
              {/*<Image src="/images/sub/products/products-01-001.png" alt="" width={992} height={499}/>*/}
            </>
          )}
          {(activeIndex === 5 || activeIndex === 6) && (
            <>
              <Image src="/images/sub/products/daedong-tasman-products.jpg" alt="" width={992} height={499}/>
              <span className={activeIndex === 5 ? 'products-01-05 active' : 'products-01-05'}>{activeIndex === 5 && <Link href="#productsDetail"/>}</span>
              <span className={activeIndex === 5 ? 'products-01-06 active' : 'products-01-06'}>{activeIndex === 5 && <Link href="#productsDetail"/>}</span>
              <span className={activeIndex === 6 ? 'products-01-07 active' : 'products-01-07'}>{activeIndex === 6 && <Link href="#productsDetail"/>}</span>
            </>
          )}
          {(activeIndex === 7 || activeIndex === 8) && (
            <>
              <Image src="/images/sub/products/daedong-canival-products.jpg" alt="" width={992} height={499}/>
              {/* <span className={activeIndex === 5 ? 'products-01-05 active' : 'products-01-05'}></span> */}
              {/*<span className={activeIndex === 6 ? 'products-01-06 active' : 'products-01-06'}></span>*/}
              <span className={activeIndex === 7 ? 'products-01-08 active' : 'products-01-08'}>{activeIndex === 7 && <Link href="#productsDetail"/>}</span>
              {/*<span className={activeIndex === 8 ? 'products-01-09 active' : 'products-01-09'}></span>*/}
              <span className={activeIndex === 8 ? 'products-01-10 active' : 'products-01-10'}>{activeIndex === 8 && <Link href="#productsDetail"/>}</span>
              <span className={activeIndex === 8 ? 'products-01-11 active' : 'products-01-11'}>{activeIndex === 8 && <Link href="#productsDetail"/>}</span>
              <span className={activeIndex === 8 ? 'products-01-12 active' : 'products-01-12'}>{activeIndex === 8 && <Link href="#productsDetail"/>}</span>
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
          <div className="products-detail-middle" id="productsDetail">
            <h4>{language?.product_01_13}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-01-01.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_01_13_01}</p>
              </div>
              <div className="products-text-area">
                {language?.product_01_14}
                <dl>
                  <dt>{language?.product_01_15}</dt>
                  <dd>
                    <ul>
                      <li>{language?.product_01_16}</li>
                      <li>{language?.product_01_17}</li>
                      <li>{language?.product_01_18}</li>
                      <li>{language?.product_01_19}</li>
                      <li>{language?.product_01_20}</li>
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
                  <Image src="/images/sub/products/products-01-03.png" alt="LUXURY TYPE" width={259} height={318}/>
                </p>
                <p className="text-area">{language?.product_01_21}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-04.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_01_22}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-02.png" alt="LUXURY TYPE" width={266} height={315}/>
                </p>
                <p className="text-area">{language?.product_01_23}</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {activeIndex === 2 && (
        <>
          <div className="products-detail-middle" id="productsDetail">
            <h4>{language?.product_01_95}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-01-05.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_01_96}</p>
              </div>
              <div className="products-text-area">
                <dl>
                  <dt>{language?.product_01_97}</dt>
                  <dd>
                    <ul>
                      <li>{language?.product_01_98}</li>
                      <li>{language?.product_01_99}</li>
                      <li>{language?.product_01_100}</li>
                      <li>{language?.product_01_101}</li>
                      <li>{language?.product_01_102}</li>
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
          <div className="products-detail-middle" id="productsDetail">
            <h4>{language?.product_01_24}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-01-06.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_01_25}</p>
              </div>
              <div className="products-text-area">
                {language?.product_01_26}
                <dl>
                  <dt>{language?.product_01_26_01}</dt>
                  <dd>
                    <ul>
                      <li>{language?.product_01_27}</li>
                      <li>{language?.product_01_28}</li>
                      <li>{language?.product_01_29}</li>
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
                  <Image src="/images/sub/products/products-01-07.png" alt="LUXURY TYPE" width={651} height={212}/>
                </p>
                <p className="text-area">{language?.product_01_30}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-08.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_01_31}</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {activeIndex === 4 && (
        <>
          <div className="products-detail-middle" id="productsDetail">
            <h4>{language?.product_01_32}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-01-09.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_01_33}<br/>
                  {language?.product_01_34}</p>
              </div>
              <div className="products-text-area">
                {language?.product_01_35}
                <dl>
                  <dt>{language?.product_01_36}</dt>
                  <dd>
                    <ul>
                      <li>{language?.product_01_37}</li>
                      <li>{language?.product_01_38}</li>
                      <li>{language?.product_01_39}</li>
                      <li>{language?.product_01_40}</li>
                      <li>{language?.product_01_41}</li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="products-detail-bottom">
            <ul>
              {/* <li>
                                <p className="image-area">
                                    <Image src="/images/sub/products/products-01-10.png" alt="LUXURY TYPE" width={259} height={318}/>
                                </p>
                                <p className="text-area">APS ASSEMBLY</p>
                            </li> */}
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-11.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_01_42}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-20-02.png" alt="LUXURY TYPE" width={264} height={296}/>
                </p>
                <p className="text-area">{language?.product_01_43}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-12.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_01_44}</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {(activeIndex === 5 || activeIndex === 6) && (
        <>
          <div className="products-detail-middle" id="productsDetail">
            <h4>{language?.product_01_45}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-01-13-01.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_01_46}</p>
              </div>
              <div className="products-text-area">
                <dl>
                  <dt>{language?.product_01_47}</dt>
                  <dd>
                    <ul>
                      <li>{language?.product_01_48}</li>
                      <li>{language?.product_01_49}</li>
                      <li>{language?.product_01_50}</li>
                      <li>{language?.product_01_51}</li>
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
                  <Image src="/images/sub/products/products-01-13-02.png" alt="LUXURY TYPE" width={701} height={312}/>
                </p>
                <p className="text-area">{language?.product_01_52}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-13.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_01_53}</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {activeIndex === 7 && (
        <>
          <div className="products-detail-middle" id="productsDetail">
            <h4>{language?.product_01_63}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-01-15.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_01_64}</p>
              </div>
              <div className="products-text-area">
                <dl>
                  <dt>{language?.product_01_65}</dt>
                  <dd>
                    <ul>
                      <li>{language?.product_01_66}</li>
                      <li>{language?.product_01_67}</li>
                      <li>{language?.product_01_68}</li>
                      <li>{language?.product_01_69}</li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="products-detail-bottom">
            {/* <ul>
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
                        </ul> */}
          </div>
        </>
      )}

      {activeIndex === 7 && (
        <>
          <div className="products-detail-middle" id="productsDetail">
            <h4>{language?.product_01_70}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-01-16.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_01_71}</p>
              </div>
              <div className="products-text-area">
                <dl>
                  <dt>{language?.product_01_72}</dt>
                  <dd>
                    <ul>
                      <li>{language?.product_01_73}</li>
                      <li>{language?.product_01_74}</li>
                      <li>{language?.product_01_75}</li>
                      <li>{language?.product_01_76}</li>
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
                  <Image src="/images/sub/products/products-01-16.png" alt="LUXURY TYPE" width={259} height={318}/>
                </p>
                <p className="text-area">{language?.product_01_77}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/new-image-comming.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_01_78}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-17.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_01_79}</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {activeIndex === 8 && (
        <>
          <div className="products-detail-middle" id="productsDetail">
            <h4>{language?.product_01_79}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-01-17.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_01_80}</p>
              </div>
              <div className="products-text-area">
                <dl>
                  <dt>{language?.product_01_81}</dt>
                  <dd>
                    <ul>
                      <li>{language?.product_01_82}</li>
                      <li>{language?.product_01_83}</li>
                      <li>{language?.product_01_84}</li>
                      <li>{language?.product_01_85}</li>
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
                <p className="text-area">{language?.product_01_86}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-15.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_01_87}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-16.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_01_88}</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {activeIndex === 9 && (
        <>
          <div className="products-detail-middle" id="productsDetail">
            <h4>{language?.product_01_89}</h4>
            <div className="products-area">
              <div className="products-image-area">
                <Image src="/images/sub/products/products-01-20.png" alt="Plastic (Case) Type" width={361} height={545}/>
                <p>{language?.product_01_90}</p>
              </div>
              <div className="products-text-area">
                {language?.product_01_91}
              </div>
            </div>
          </div>
          <div className="products-detail-bottom">
            <ul>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-23.png" alt="LUXURY TYPE" width={259} height={318}/>
                </p>
                <p className="text-area">{language?.product_01_92}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-21.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_01_93}</p>
              </li>
              <li>
                <p className="image-area">
                  <Image src="/images/sub/products/products-01-22.png" alt="LUXURY TYPE" width={284} height={316}/>
                </p>
                <p className="text-area">{language?.product_01_94}</p>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}
