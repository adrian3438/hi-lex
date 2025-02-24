import '@/app/assets/investment/financial.scss';


interface Props {
    language?: any
}

export default function Financial({language}: Props) {
    return (
        <div className="about-us">
            <div className="about-container">
                <div className="financial">
                    <h2>{language?.financial_01}</h2>
                    <div className="table">
                        <p>{language?.financial_02}</p>
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col" className="blue">2023</th>
                                <th scope="col">2022</th>
                                <th scope="col">2021</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row" className="blue bold">{language?.about_39}</th>
                                <td className="blue">279,974</td>
                                <td>270,819</td>
                                <td>222,282</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue">{language?.about_40}</th>
                                <td className="blue">107,337</td>
                                <td>110,411</td>
                                <td>89,398</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue">{language?.about_41}</th>
                                <td className="blue">172,638</td>
                                <td>160,408</td>
                                <td>133,484</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue bold">{language?.about_42}</th>
                                <td className="blue">540,550</td>
                                <td>444,504</td>
                                <td>399,565</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue">{language?.about_43}</th>
                                <td className="blue">70,362</td>
                                <td>51,829</td>
                                <td>45,951</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue bold">{language?.about_44}</th>
                                <td className="blue">28,090</td>
                                <td>18,787</td>
                                <td>14,600</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue">{language?.about_45}</th>
                                <td className="blue">30,594</td>
                                <td>30,965</td>
                                <td>18,842</td>
                            </tr>
                            <tr>
                                <th scope="row" className="blue">{language?.about_46}</th>
                                <td className="blue">30,565</td>
                                <td>20,233</td>
                                <td>14,537</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="graph">
                        <p>{language?.about_47}</p>
                        <dl>
                            <dt>{language?.about_48}</dt>
                            <dd>
                                <ul>
                                    <li><span>2023</span> <span className="bar" style={{width: "40%"}}></span> <span>279,974</span></li>
                                    <li><span>2022</span> <span className="bar" style={{width: "38%"}}></span> <span>270,819</span></li>
                                    <li><span>2021</span> <span className="bar" style={{width: "36%"}}></span> <span>222,882</span></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>{language?.about_49}</dt>
                            <dd>
                                <ul>
                                    <li><span>2023</span> <span className="bar" style={{width: "80%"}}></span> <span>540,550</span></li>
                                    <li><span>2022</span> <span className="bar" style={{width: "73%"}}></span> <span>444,504</span></li>
                                    <li><span>2021</span> <span className="bar" style={{width: "72%"}}></span> <span>399,565</span></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>{language?.about_50}</dt>
                            <dd>
                                <ul>
                                    <li><span>2023</span> <span className="bar" style={{width: "15%"}}></span> <span>28,090</span></li>
                                    <li><span>2022</span> <span className="bar" style={{width: "13%"}}></span> <span>18,787</span></li>
                                    <li><span>2021</span> <span className="bar" style={{width: "11%"}}></span> <span>14,600</span></li>
                                </ul>
                            </dd>
                        </dl> 
                    </div>
                
                </div>

                
            </div>
        </div>
    )
}
