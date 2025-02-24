import "@/app/assets/company/greeting.scss"
import Image from "next/image";

interface Props {
    language: any
}

export default function Greeting({language}: Props) {
    return (
        <div className="greeting">
            <div className="container-header-01">
                <h2>{language?.greeting_01}</h2>
                <ul className="location">
                    <li>{language?.header_1}</li>
                    <li>{language?.header_1_1}</li>
                </ul>
            </div>
            <div className="greeting-background-color">
                <div className="greeting-text-01">
                    <div>
                    <h3>{language?.greeting_02}</h3><br/>
                    <p>{language?.greeting_03}</p>
                    <p>{language?.greeting_03_01}</p>
                    </div>
                    <section className="greeting-text-image-01">
                    <Image src="/images/sub/company/greeting/ceo-greeting-flags.jpg" alt="" width={954} height={615} />
                    </section>
                </div>

                <div className="greeting-text-02">
                    <div>
                        <p>{language?.greeting_04}</p><br/>
                        <p>{language?.greeting_05}</p><br/>
                        <p>{language?.greeting_06}</p><br/>
                        <p>{language?.greeting_07}</p>
                    </div>

                    <section className="greeting-text-image-02">
                    <Image src="/images/sub/company/greeting/ceo-greeting-car-2.jpg" alt="" width={1920} height={1195} />
                    <div className="sign">
                        <Image src="/images/sub/company/greeting/songhaksung-signature-01.png" alt="Sign" width={174} height={94}/>
                    </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

{/* <section>
<Image src="/images/sub/company/greeting/ceo-greeting-car-1.png" alt="" width={954} height={1142} />
<Image src="/images/sub/company/greeting/ceo-greeting-car-2.png" alt="" width={954} height={1142} />
</section> */}
