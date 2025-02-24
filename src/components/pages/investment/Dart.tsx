import '@/app/assets/investment/dart.scss';


interface Props {
    language?: any
}

export default function Dart({language}: Props) {
    return (
        <div className="about-us">
            <div className="about-container">
                <div className="financial">
                    <h2>{language?.dart_01}</h2>
                        <div className="dart_wrapper">
                        <p><iframe loading="lazy" src="https://dart.fss.or.kr/html/search/SearchCompanyIR3_M.html?textCrpNM=%EB%8C%80%EB%8F%99%EB%8F%84%EC%96%B4" name="IR"  frameBorder="0" scrolling="yes"></iframe></p>
                       </div>
                </div>
            </div>
        </div>
    )
}
