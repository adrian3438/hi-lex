import Image from "next/image";
import Link from "next/link";

interface Props {
    language: any;
}

export default function Events({language}: Props) {
    return (
        <div className="news-list-container">
            <div className="list-search">
                <select>
                    <option>{language?.news_option_01}</option>
                    <option>{language?.news_option_02}</option>
                    <option>{language?.news_option_03}</option>
                </select>
                <div>
                    <input type="text"/>
                    <button><Image src="/images/sub/news/search-btn.png" alt="Search" width={17.24} height={17.24}/></button>
                </div>
            </div>
            <ul className="event-lists">
                <li>
                    <Link href="/news/events/1">
                        <Image src="/images/@temp/events-sample.png" alt="" width={511} height={279}/>
                        <h2>LOS ANGELES AUTO SHOW</h2>
                        <p className="date">2025. NOV. 22 - DEC. 1</p>
                    </Link>
                </li>
                <li>
                    <Link href="/news/events/1">
                        <Image src="/images/@temp/events-sample.png" alt="" width={511} height={279}/>
                        <h2>LOS ANGELES AUTO SHOW</h2>
                        <p className="date">2025. NOV. 22 - DEC. 1</p>
                    </Link>
                </li>
                <li>
                    <Link href="/news/events/1">
                        <Image src="/images/@temp/events-sample.png" alt="" width={511} height={279}/>
                        <h2>LOS ANGELES AUTO SHOW</h2>
                        <p className="date">2025. NOV. 22 - DEC. 1</p>
                    </Link>
                </li>
                <li>
                    <Link href="/news/events/1">
                        <Image src="/images/@temp/events-sample.png" alt="" width={511} height={279}/>
                        <h2>LOS ANGELES AUTO SHOW</h2>
                        <p className="date">2025. NOV. 22 - DEC. 1</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
