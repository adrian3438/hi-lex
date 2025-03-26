'use client';

import "@/app/assets/products/products.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

interface ResearchDetailProps {
  initialActiveIndex?: number;
}

export default function LatchingSystems({ initialActiveIndex = 0 }: ResearchDetailProps) {
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

    // 초기 activeIndex 적용
    useEffect(() => {
      setActiveIndex(initialActiveIndex);
    }, [initialActiveIndex]);

  return (
    <div className="products-detail">
      <h3>R&D ITEMS</h3>
      <div className="products-detail-top">
        <div className="products-detail-list">
          <dl>
            <dt>Side Door Latches</dt>
            <dd>
              <ul>
                <li>
                  <Link href="/research/e-latch">
                  <button className={activeIndex === 2 ? 'active' : ''} onClick={() => setActiveIndex(2)} style={{ fontSize: '20px', backgroundColor: 'transparent', border: 'none', color: '#023A8E', cursor: 'pointer' }}>E-Latch</button>
                  </Link>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Power Door System</dt>
            <dd>
              <ul>
                <li>
                  <Link href="/research/pds">
                  <button className={activeIndex === 1 ? 'active' : ''} onClick={() => setActiveIndex(1)} style={{ fontSize: '20px', backgroundColor: 'transparent', border: 'none', color: '#023A8E', cursor: 'pointer' }}>Power Door Actuator</button>
                  </Link>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Lift Gate System</dt>
            <dd>
              <ul>
                <li>
                  <Link href="/research/power-lift-gate">
                  <button className={activeIndex === 7 ? 'active' : ''} onClick={() => setActiveIndex(7)} style={{ fontSize: '20px', backgroundColor: 'transparent', border: 'none', color: '#023A8E', cursor: 'pointer' }}>Lift Gate Cinching Latch</button>
                  </Link>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Hood System</dt>
            <dd>
              <ul>
                <li>
                  <Link href="/research/power-hood">
                  <button className={activeIndex === 9 ? 'active' : ''} onClick={() => setActiveIndex(9)} style={{ fontSize: '20px', backgroundColor: 'transparent', border: 'none', color: '#023A8E', cursor: 'pointer' }}>Power Cinching Latch</button>
                  </Link>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div className="products-detail-image">
          {(activeIndex === 0 || activeIndex === 2 ) && (
            <>
              <Image src="/images/sub/products/daedong-ionic-products.jpg" alt="" width={992} height={499}/>
              <span className={activeIndex === 2 ? 'products-01-02 active' : 'products-01-02'}></span>
            </>
          )}
          {(activeIndex === 0 || activeIndex === 1) && (
             <>
              <Image src="/images/sub/products/daedong-g90-products.jpg" alt="" width={992} height={499}/>
              <span className={activeIndex === 1 ? 'products-02-01 active' : 'products-02-01'}></span>
             </>
           )}
           {(activeIndex === 7 ) && (
             <>
              <Image src="/images/sub/products/daedong-canival-rear-products.jpg" alt="" width={992} height={499}/>
              <span className={activeIndex === 7 ? 'products-02-02 active' : 'products-02-02'}></span>
              <span className={activeIndex === 7 ? 'products-02-03 active' : 'products-02-03'}></span>
              <span className={activeIndex === 7 ? 'products-02-04 active' : 'products-02-04'}></span>
              <span className={activeIndex === 7 ? 'products-02-05 active' : 'products-02-05'}></span>
              <span className={activeIndex === 7 ? 'products-02-06 active' : 'products-02-06'}></span>
             </>
           )}
           {(activeIndex === 9) && (
            <>
            <Image src="/images/sub/products/daedong-ev9-products.jpg" alt="" width={992} height={499}/>
            <span className={activeIndex === 9 ? 'products-02-08 active' : 'products-02-08'}></span>
            {/* <span className={activeIndex === 9 ? 'products-02-09 active' : 'products-02-09'}></span> */}
            </>
           )}
        </div>
      </div>
    </div>
  )
}
