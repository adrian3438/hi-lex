'use client';

import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import api from "@/lib/api";
import Paginate from "@/components/DotsAdmin/Paginate/paginate";

interface Props {
    language: any;
    page?: number;
}

export default function PressRelease({language, page}: Props) {
    const [keyword, setKeyword] = useState(""); // 검색어를 저장할 상태
    const [newsList, setNewsList] = useState<any[]>([]); // API 호출 결과
    const [totalCount, setTotalCount] = useState(0); // 총 아이템 수

    // API 호출 함수
    const fetchNews = async (searchKeyword?: string) => {
        const response = await api.get(
            `/user/promotion/getContentsList.php?contentType=1&&userLang=${
                language?.language === 'kr' ? 'KR' : 'EN'
            }&page=${page || 1}&size=9&keyword=${searchKeyword}&sortColumn=date&sortOrder=desc`
        );
        setNewsList(response?.data?.List || []);
        setTotalCount(response?.data?.totalCnt || 0);
    };

    useEffect(() => {
        fetchNews('');
    }, []);

    // Enter 키 이벤트 핸들러
    const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            await fetchNews(keyword); // 입력된 검색어로 API 호출
        }
    };

    return (
        <div className="news-list-container">
            <div className="list-search">
                {/*<select>
                    <option>{language?.news_option_01}</option>
                    <option>{language?.news_option_02}</option>
                    <option>{language?.news_option_03}</option>
                </select>*/}
                <div>
                    <input type="text"
                       onChange={(e) => setKeyword(e.target.value)}
                       onKeyDown={handleKeyDown}
                    />
                    <button><Image src="/images/sub/news/search-btn.png" alt="Search" width={17.24} height={17.24}/></button>
                </div>
            </div>
            <ul className="lists">
                {newsList?.map((item: any, index: number) => (
                    <li key={index}>
                        <Link href={`/news/press-release/${item.ID}`}>
                            <Image
                                src={item.thumnailFile ? item.thumnailFile : "/images/@temp/blog-list-sample.png"}
                                alt=""
                                width={383}
                                height={255}
                            />
                            <h2>{item.promSubject}</h2>
                            <div>
                                {item?.excerpt}
                            </div>
                            <p className="date">{item.createDate}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="paging">
                <Paginate page={page || 1} size={12} totalCount={totalCount} />
            </div>
        </div>
    )
}
