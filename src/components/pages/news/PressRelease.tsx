import Image from "next/image";
import Link from "next/link";

interface Props {
    language: any;
}

export default function PressRelease({language}: Props) {
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
            <ul className="lists">
                <li>
                    <Link href="/news/press-release/1">
                        <Image src="/images/@temp/news-sample.png" alt="" width={383} height={255}/>
                        <h2>Subject</h2>
                        <div>
                            Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail
                            Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail
                        </div>
                        <p className="date">2024-10-25</p>
                    </Link>
                </li>
                <li>
                    <Link href="/news/press-release/1">
                        <Image src="/images/@temp/news-sample.png" alt="" width={383} height={255}/>
                        <h2>Subject</h2>
                        <div>
                            Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail
                        </div>
                        <p className="date">2024-10-25</p>
                    </Link>
                </li>
                <li>
                    <Link href="/news/press-release/1">
                        <Image src="/images/@temp/news-sample.png" alt="" width={383} height={255}/>
                        <h2>Subject</h2>
                        <div>
                            Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail
                        </div>
                        <p className="date">2024-10-25</p>
                    </Link>
                </li>
                <li>
                    <Link href="/news/press-release/1">
                        <Image src="/images/@temp/news-sample.png" alt="" width={383} height={255}/>
                        <h2>Subject</h2>
                        <div>
                            Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail
                        </div>
                        <p className="date">2024-10-25</p>
                    </Link>
                </li>
                <li>
                    <Link href="/news/press-release/1">
                        <Image src="/images/@temp/news-sample.png" alt="" width={383} height={255}/>
                        <h2>Subject</h2>
                        <div>
                            Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail
                        </div>
                        <p className="date">2024-10-25</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
