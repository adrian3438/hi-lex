import api from "@/lib/api";

interface Props {
    language?: any
    id?: any;
}

export default async function PressReleaseDetail({language, id} : Props) {
    const response = await api.get(`/user/promotion/getContentDetail2.php?ID=${id}&contentType=1&userLang=${language?.language === 'kr' ? 'KR' : 'EN'}`);
    const newsDetailData = response?.data;

    return (
        <div className="news-detail">
            <h2>{newsDetailData?.List[0]?.promSubject}</h2>
            <p className="date">2024-10-25</p>
            <div className="detail"
                 dangerouslySetInnerHTML={{
                     __html: newsDetailData?.List[0]?.description
                 }}
            >
            </div>
        </div>
    )
}
