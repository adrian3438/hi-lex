import "@/app/assets/company/greeting.scss"
import Image from "next/image";

interface Props {
  language: any
}

export default function Greeting({language}: Props) {
  return (
    <div className="greeting">
      <div className="container-header-01">
        <ul className="location">
          <li>{language?.header_1}</li>
          <li>{language?.header_1_1}</li>
        </ul>
        <h2>{language?.greeting_01}</h2>
      </div>
      <div className="greeting-background-color">
       
       
        <div className="greeting-text-01">
          <div className="greeting-text-image-01">
            <Image src="/images/sub/company/greeting/ceo-greeting-flags.jpg" alt="" width={1680} height={800}/>
             <div>
              <h3>{language?.greeting_02}</h3><br/>
              <p>{language?.greeting_03}<br/>{language?.greeting_03_01}</p>
            </div>
          </div>
        </div>

        <div className="greeting-text-02">
          <div className="greeting-text-image-02">
            <Image src="/images/sub/company/greeting/ceo-greeting-car-2.jpg" alt="" width={1680} height={800}/>
          </div>
        </div>


        <div className="greeting-text-03">
          <div className="greeting-text-image-03">
            <Image src="/images/sub/company/greeting/dddr-d.svg" alt="" width={500} height={500}/>
            <div>
              <p>{language?.greeting_04}</p><br/>
              <p>{language?.greeting_05}</p><br/>
              <p>{language?.greeting_06}</p><br/>
              <p>{language?.greeting_07}</p>
              <Image src="/images/sub/company/greeting/songhaksung-signature.png" alt="" width={174} height={94}/>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

{/* <section>
<Image src="/images/sub/company/greeting/ceo-greeting-car-1.png" alt="" width={954} height={1142} />
<Image src="/images/sub/company/greeting/ceo-greeting-car-2.png" alt="" width={954} height={1142} />
</section> */
}
