'use client';

import "@/app/assets/company/history.scss";
import {useEffect, useState} from "react";
import Image from "next/image";

interface Props {
    language?: any
}

export default function History({language}: Props) {
    const [historyIndex, setHistoryIndex] = useState<number>(0);
    return (
        <div className="history-container">
            <div className="history-link">
                <button onClick={() => setHistoryIndex(0)} className={historyIndex === 0 ? 'active' : ''}>{language?.history_04}</button>
                <button onClick={() => setHistoryIndex(1)} className={historyIndex === 1 ? 'active' : ''}>{language?.history_05}</button>
                <button onClick={() => setHistoryIndex(2)} className={historyIndex === 2 ? 'active' : ''}>{language?.history_06}</button>
                <button onClick={() => setHistoryIndex(3)} className={historyIndex === 3 ? 'active' : ''}>{language?.history_07}</button>
            </div>
            {historyIndex === 0 && (
                <div className="history-list">
                    <div className="list">
                        <ul>
                            <li>
                                <p className="year">{language?.history_01_01}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_02}</p>
                                        <p className="history-detail">{language?.history_01_03}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_04}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_05}</p>
                                        <p className="history-detail">{language?.history_01_06}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_07}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_08}</p>
                                        <p className="history-detail">{language?.history_01_09}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_10}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_11}</p>
                                        <p className="history-detail">{language?.history_01_12}</p>
                                    </li>
                                    <li>
                                        <p className="month">{language?.history_01_13}</p>
                                        <p className="history-detail">{language?.history_01_14}</p>
                                    </li>
                                    <li>
                                        <p className="month">{language?.history_01_15}</p>
                                        <p className="history-detail">{language?.history_01_16}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_17}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_18}</p>
                                        <p className="history-detail">{language?.history_01_19}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_20}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_21}</p>
                                        <p className="history-detail">{language?.history_01_22}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_23}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_24}</p>
                                        <p className="history-detail">{language?.history_01_25}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_26}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_27}</p>
                                        <p className="history-detail">{language?.history_01_28}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_29}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_30}</p>
                                        <p className="history-detail">{language?.history_01_31}</p>
                                    </li>
                                    <li>
                                        <p className="month">{language?.history_01_32}</p>
                                        <p className="history-detail">{language?.history_01_33}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_34}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_35}</p>
                                        <p className="history-detail">{language?.history_01_36}</p>
                                    </li>
                                    <li>
                                        <p className="month">{language?.history_01_37}</p>
                                        <p className="history-detail">{language?.history_01_38}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_39}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_40}</p>
                                        <p className="history-detail">{language?.history_01_41}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_42}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_43}</p>
                                        <p className="history-detail">{language?.history_01_44}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_45}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_46}</p>
                                        <p className="history-detail">{language?.history_01_47}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_01_48}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_01_49}</p>
                                        <p className="history-detail">{language?.history_01_50}</p>
                                    </li>
                                    <li>
                                        <p className="month">{language?.history_01_51}</p>
                                        <p className="history-detail">{language?.history_01_52}</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="history-image">
                        <ul>
                            <li><Image src="/images/sub/company/history/history-01.png" alt="" width={602} height={401}/></li>
                            <li><Image src="/images/sub/company/history/history-02.png" alt="" width={602} height={401}/></li>
                            <li><Image src="/images/sub/company/history/history-03.png" alt="" width={602} height={401}/></li>
                            <li><Image src="/images/sub/company/history/history-04.png" alt="" width={602} height={401}/></li>
                        </ul>
                    </div>
                </div>
            )}
            {historyIndex === 1 && (
                <div className="history-list">
                    <div className="list">
                        <ul>
                            <li>
                                <p className="year">{language?.history_02_01}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_02_02}</p>
                                        <p className="history-detail">{language?.history_02_03}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_02_04}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_02_05}</p>
                                        <p className="history-detail">{language?.history_02_06}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_02_07}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_02_08}</p>
                                        <p className="history-detail">{language?.history_02_09}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_02_10}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_02_11}</p>
                                        <p className="history-detail">{language?.history_02_12}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_02_13}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_02_14}</p>
                                        <p className="history-detail">{language?.history_02_15}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_02_16}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_02_17}</p>
                                        <p className="history-detail">{language?.history_02_18}</p>
                                    </li>
                                    <li>
                                        <p className="month">{language?.history_02_19}</p>
                                        <p className="history-detail">{language?.history_02_20}</p>
                                    </li>
                                    <li>
                                        <p className="month">&nbsp;</p>
                                        <p className="history-detail">{language?.history_02_21}</p>
                                    </li>
                                    <li>
                                        <p className="month">&nbsp;</p>
                                        <p className="history-detail">{language?.history_02_22}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_02_23}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_02_24}</p>
                                        <p className="history-detail">{language?.history_02_25}</p>
                                    </li>
                                    <li>
                                        <p className="month">{language?.history_02_26}</p>
                                        <p className="history-detail">{language?.history_02_27}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_02_28}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_02_29}</p>
                                        <p className="history-detail">{language?.history_02_30}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_02_31}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_02_32}</p>
                                        <p className="history-detail">{language?.history_02_33}</p>
                                    </li>
                                    <li>
                                        <p className="month">{language?.history_02_34}</p>
                                        <p className="history-detail">{language?.history_02_35}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_02_36}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_02_37}</p>
                                        <p className="history-detail">{language?.history_02_38}</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="history-image">
                        <ul>
                            <li><Image src="/images/sub/company/history/history-05.png" alt="" width={602} height={401}/></li>
                            <li><Image src="/images/sub/company/history/history-06.png" alt="" width={602} height={401}/></li>
                        </ul>
                    </div>
                </div>
            )}
            {historyIndex === 2 && (
                <div className="history-list">
                    <div className="list">
                        <ul>
                            <li>
                                <p className="year">{language?.history_03_01}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_03_02}</p>
                                        <p className="history-detail">{language?.history_03_03}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_03_04}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_03_05}</p>
                                        <p className="history-detail">{language?.history_03_06}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_03_07}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_03_08}</p>
                                        <p className="history-detail">{language?.history_03_09}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_03_10}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_03_11}</p>
                                        <p className="history-detail">{language?.history_03_12}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_03_13}</p>
                                <ul>
                                    <li>
                                        <p className="month">{language?.history_03_14}</p>
                                        <p className="history-detail">{language?.history_03_15}</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="history-image">
                        <ul>
                            <li><Image src="/images/sub/company/history/history-07.png" alt="" width={602} height={401}/></li>
                            <li><Image src="/images/sub/company/history/history-08.png" alt="" width={602} height={401}/></li>
                        </ul>
                    </div>
                </div>
            )}
            {historyIndex === 3 && (
                <div className="history-list">
                    <div className="list">
                        <ul>
                            <li>
                                <p className="year">{language?.history_04_01}</p>
                                <ul>
                                    <li>
                                        <p className="history-detail">{language?.history_04_02}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_04_03}</p>
                                <ul>
                                    <li>
                                        <p className="history-detail">{language?.history_04_04}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_04_05}</p>
                                <ul>
                                    <li>
                                        <p className="history-detail">{language?.history_04_06}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_04_07}</p>
                                <ul>
                                    <li>
                                        <p className="history-detail">{language?.history_04_08}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_04_09}</p>
                                <ul>
                                    <li>
                                        <p className="history-detail">{language?.history_04_10}</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="year">{language?.history_04_11}</p>
                                <ul>
                                    <li>
                                        <p className="history-detail">{language?.history_04_12}</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="history-image">
                        <ul>
                            <li><Image src="/images/sub/company/history/history-07.png" alt="" width={602} height={401}/></li>
                            <li><Image src="/images/sub/company/history/history-08.png" alt="" width={602} height={401}/></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}
