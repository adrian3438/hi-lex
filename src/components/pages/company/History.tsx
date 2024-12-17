'use client';

import "@/app/assets/company/history.scss";
import {useEffect, useState} from "react";
import Image from "next/image";

interface Props {
    language?: any
}

export default function History({language}: Props) {
    const [historyIndex, setHistoryIndex] = useState<number>(0);
    const [historyDetailIndex, setHistoryDetailIndex] = useState<number>(1);
    useEffect(() => {
        if(historyIndex === 0) {
            setHistoryDetailIndex(1);
        }
    }, [historyIndex]);

    return (
        <div className="history-list">
            <ul>
                <li>
                    <div>
                        <p>2022~</p>
                        <button onClick={() => setHistoryIndex(1)}>{language?.history_btn_01}</button>
                    </div>
                </li>
                <li>
                    <div>
                        <p>2021~{language?.history_04}</p>
                        <button onClick={() => setHistoryIndex(2)}>{language?.history_btn_01}</button>
                    </div>
                </li>
                <li>
                    <div>
                        <p>2021~2020</p>
                        <button onClick={() => setHistoryIndex(3)}>{language?.history_btn_01}</button>
                    </div>
                </li>
                <li>
                    <div>
                        <p>2001~2010</p>
                        <button onClick={() => setHistoryIndex(4)}>{language?.history_btn_01}</button>
                    </div>
                </li>
                <li>
                    <div>
                        <p>1991~2000</p>
                        <button onClick={() => setHistoryIndex(5)}>{language?.history_btn_01}</button>
                    </div>
                </li>
                <li>
                    <div>
                        <p>1980~1990</p>
                        <button>{language?.history_btn_01}</button>
                    </div>
                </li>
            </ul>
            {historyIndex === 1 && (
                <div className="history-detail">
                    <div>
                        <div>
                            <button className={historyDetailIndex === 1 ? 'active' : ''} onClick={() => setHistoryDetailIndex(1)}>General</button>
                            <button className={historyDetailIndex === 2 ? 'active' : ''} onClick={() => setHistoryDetailIndex(2)}>Awards</button>
                            <button className={historyDetailIndex === 3 ? 'active' : ''} onClick={() => setHistoryDetailIndex(3)}>Certificates</button>
                        </div>
                        {historyDetailIndex === 1 && (
                            <ul className="list">
                                <li>
                                    <dl>
                                        <dt>2024</dt>
                                        <dd>
                                            <ul>
                                                <li>
                                                    <p>SEP.</p>
                                                    <div>
                                                        Our history is a journey of innovation, growth, and commitment
                                                        to excellence. Since our founding, we have continually pushed boundaries,
                                                        evolved with the times, and dedicated ourselves to providing cutting-edge
                                                        solutions that shape the future of our industry.
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>SEP.</p>
                                                    <div>
                                                        Our history is a journey of innovation, growth, and commitment
                                                        to excellence. Since our founding, we have continually pushed boundaries,
                                                        evolved with the times, and dedicated ourselves to providing cutting-edge
                                                        solutions that shape the future of our industry.
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>SEP.</p>
                                                    <div>
                                                        Our history is a journey of innovation, growth, and commitment
                                                        to excellence. Since our founding, we have continually pushed boundaries,
                                                        evolved with the times, and dedicated ourselves to providing cutting-edge
                                                        solutions that shape the future of our industry.
                                                    </div>
                                                </li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>2023</dt>
                                        <dd>
                                            <ul>
                                                <li>
                                                    <p>SEP.</p>
                                                    <div>
                                                        Our history is a journey of innovation, growth, and commitment
                                                        to excellence. Since our founding, we have continually pushed boundaries,
                                                        evolved with the times, and dedicated ourselves to providing cutting-edge
                                                        solutions that shape the future of our industry.
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>SEP.</p>
                                                    <div>
                                                        Our history is a journey of innovation, growth, and commitment
                                                        to excellence. Since our founding, we have continually pushed boundaries,
                                                        evolved with the times, and dedicated ourselves to providing cutting-edge
                                                        solutions that shape the future of our industry.
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>SEP.</p>
                                                    <div>
                                                        Our history is a journey of innovation, growth, and commitment
                                                        to excellence. Since our founding, we have continually pushed boundaries,
                                                        evolved with the times, and dedicated ourselves to providing cutting-edge
                                                        solutions that shape the future of our industry.
                                                    </div>
                                                </li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        )}
                        {historyDetailIndex === 2 && (
                            <ul className="award-list">
                                <li>
                                    <Image src="/images/@temp/award-sample.png" alt="" width={635} height={381}/>
                                    <div>
                                        <p>API 6D 2022<br/>0000 000 KJFKDJFK<br/>DKFJDKFJKDFJ</p>
                                    </div>
                                </li>
                                <li>
                                    <Image src="/images/@temp/award-sample.png" alt="" width={635} height={381}/>
                                    <div>
                                        <p>API 6D 2022<br/>0000 000 KJFKDJFK<br/>DKFJDKFJKDFJ</p>
                                    </div>
                                </li>
                                <li>
                                    <Image src="/images/@temp/award-sample.png" alt="" width={635} height={381}/>
                                    <div>
                                        <p>API 6D 2022<br/>0000 000 KJFKDJFK<br/>DKFJDKFJKDFJ</p>
                                    </div>
                                </li>
                            </ul>
                        )}
                        {historyDetailIndex === 3 && (
                            <ul className="certificate-list">
                                <li>
                                    Cetificate1
                                </li>
                                <li>
                                    Cetificate2
                                </li>
                                <li>
                                    Cetificate1
                                </li>
                            </ul>
                        )}
                        <button onClick={() => setHistoryIndex(0)}><Image src="/images/sub/company/history/history-close.png" alt="닫기" width={24} height={24}/></button>
                    </div>
                </div>
            )}
        </div>
    )
}
