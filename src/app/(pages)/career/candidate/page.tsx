import "@/app/assets/career/candidate.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import CareerHeader from "@/components/career/CareerHeader";
import Image from "next/image";

export default async function CandidatePage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="career">
                <CareerHeader language={language} activeIndex={2}/>
                <div className="candidate">
                    <div className="candidate-content">
                        <p><Image src="/images/sub/career/candidate/daedong-door-ideal-candidate.png" alt="" width={1420} height={799}/></p>
                        <div className="title-area">
                            <h3>{language?.candidate_01}</h3>
                            <p>{language?.candidate_02}</p>
                        </div>
                        <dl className="candidate-01">
                            <div>
                                <dt>{language?.candidate_03}</dt>
                                <dd>{language?.candidate_04}<br/>{language?.candidate_05}</dd>
                            </div>
                        </dl>
                        <dl className="candidate-02">
                            <div>
                                <dt>{language?.candidate_06}</dt>
                                <dd>{language?.candidate_07}<br/>{language?.candidate_08}</dd>
                            </div>
                        </dl>
                        <dl className="candidate-03">
                            <div>
                                <dt>{language?.candidate_09}</dt>
                                <dd>{language?.candidate_10}<br/>{language?.candidate_11}</dd>
                            </div>
                        </dl>
                    </div>

                </div>
            </div>
            <Footer language={language}/>
        </>
    )
}
