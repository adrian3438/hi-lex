import "@/app/assets/sustainability/compliance.scss"
import Image from "next/image";

interface Props {
  language: any
}

export default function Compliance({language}: Props) {
  return (
    <div className="compliance">
      <div className="container-header-01">
        <ul className="location">
          <li>{language?.header_4}</li>
          <li>{language?.ceo_compliance_01}</li>
        </ul>
        <h2>{language?.ceo_compliance_01}</h2>
      </div>

          <div className="compliance-subject">
              <h3>{language?.ceo_compliance_01}</h3><br/>
          </div>


       <div className="greeting-text-03">
                <div className="greeting-text-image-03">
                  <Image src="/images/sub/sustainability/dddr-d-big.svg" alt="" width={466} height={776}/>
                  <div>
                    <h3>{language?.ceo_compliance_02}{language?.ceo_compliance_03}</h3><br/>
                    <p>{language?.ceo_compliance_04}</p><br/>
                    <p>{language?.ceo_compliance_05}</p><br/>
                    <p>{language?.ceo_compliance_06}</p><br/>
                    <p>{language?.ceo_compliance_07}</p><br/>
                    <p>{language?.ceo_compliance_08}</p>
                    <Image src="/images/sub/company/greeting/songhaksung-signature.png" alt="" width={174} height={94}/>
                  </div>
                </div>
       </div>

          {/*<section className="greeting-text-image-02">
            <Image src="/images/sub/company/greeting/ceo-greeting-car-2.jpg" alt="" width={1920} height={1195}/>
            <div className="sign">
              <Image src="/images/sub/company/greeting/songhaksung-signature-01.png" alt="Sign" width={174} height={94}/>
            </div>
          </section>*/}
        </div>
  )
}

{/* <section>
<Image src="/images/sub/company/greeting/ceo-greeting-car-1.png" alt="" width={954} height={1142} />
<Image src="/images/sub/company/greeting/ceo-greeting-car-2.png" alt="" width={954} height={1142} />
</section> */
}
