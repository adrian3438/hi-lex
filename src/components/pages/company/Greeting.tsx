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
            <div className="greeting-text">
                <Image src="/images/sub/company/greeting/ceo-greeting-car-1.png" alt="" width={954} height={1142} />
                <div>
                    <h3>{language?.greeting_02}</h3>
                    <p>{language?.greeting_03}</p>
                    <div>
                        <p>{language?.greeting_03}</p>
                        <p>{language?.greeting_04}</p>
                        <p>{language?.greeting_05}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}