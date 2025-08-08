import "@/app/assets/career/career.scss";
import Link from "next/link";

interface Props {
    language: any
    activeIndex?: number
}

export default function CareerHeader({language, activeIndex}: Props) {
    return (
        <>
        <div className="container-header-01">
            <ul className="location">
                <li>{language?.header_5}</li>
                <li>
                    {activeIndex === 0 && `${language?.header_5_1}`}
                    {activeIndex === 1 && `${language?.header_5_2}`}
                    {activeIndex === 2 && `${language?.header_5_3}`}
                    {activeIndex === 3 && `${language?.header_5_4}`}
                </li>
            </ul>
            <h2> {activeIndex === 0 && `${language?.header_5_1}`}
                 {activeIndex === 1 && `${language?.header_5_2}`}
                 {activeIndex === 2 && `${language?.header_5_3}`}
                 {activeIndex === 3 && `${language?.header_5_4}`}
            </h2>
            <p>{language?.career_01}<br/>{language?.career_02}</p>
        </div>
        <div className="career-link-wrap">
                <div className="career-link">
                    <Link className={activeIndex === 0 ? 'active' : ''} href="/career/position/quality">{language.header_5_1}</Link>
                    <Link className={activeIndex === 1 ? 'active' : ''} href="/career/welfare">{language.header_5_2}</Link>
                    <Link className={activeIndex === 2 ? 'active' : ''} href="/career/candidate">{language.header_5_3}</Link>
                    {language?.language === 'kr' && <Link className={activeIndex === 3 ? 'active' : ''} href="/career/application">{language.header_5_4}</Link>}
                </div>
            </div>
        </>
    )
}
