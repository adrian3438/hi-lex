'use client'

import "@/app/assets/sustainability/esg.scss";
import Link from "next/link";
import api from "@/lib/api";
import {useEffect, useState} from "react";

interface Props {
    language?: any;
}

export default function WhistleblowerComplaint({ language }: Props) {
    useEffect(() => {
        const element = document.querySelector('#esgMenus');
        if (element) {
            const rect = element.getBoundingClientRect();
            const offset = 100; // 100px 덜 스크롤
            window.scrollTo({
                top: window.scrollY + rect.top - offset,
                behavior: 'smooth',
            });
        }
    }, []);

    const [data, setData] = useState<any>({
        privateAgree : '',
        isRealName : 'R',
        name : '', email : '', phone : '', wbType : '', wbTitle : '', wbContents : '', wbFile : ''
    })
    const [fileName, setFileName] = useState<any>({
        wbFile : ''
    })
    function handleChange (e:any) {
        const {type, name, value, chekced, files} = e.target;
        if(type === 'file') {
            const reader = new FileReader()
            if(files[0]){
                reader.readAsDataURL(files[0])
            }reader.onload = () => {
                setData((prev:any) => ({...prev, [name] : files[0]}))
                setFileName((prev:any) => ({...prev, [name] : files[0].name}))
            }
        }else if(type === 'checkbox') {
            if(chekced){setData((prev:any) => ({...prev, [name] : true}))}
            else {setData((prev:any) => ({...prev, [name] : false}))}
        }else{
            setData((prev:any)=>({...prev, [name] : value}))
        }
    }

    async function handleWhistleBlow () {
        if(data?.privateAgree === '' || data?.privateAgree === 'N'){
            alert('Please agree to the collection and use of personal information.'); return;
        } if(data?.isRealName === 'R' && !data?.name) {
            alert('Please enter your name.'); return;
        } if(data?.isRealName === 'R' && !data?.email) {
            alert('Please enter your email address.'); return;
        } if(data?.isRealName === 'R' && !data?.phone) {
            alert('Please enter your phone number.'); return;
        } if(data?.wbType === '') {
            alert('Please select the category of your report.'); return;
        } if(data?.wbTitle === '') {
            alert('Please enter the title of your report.'); return;
        } if(data?.wbContents === '') {
            alert('Please enter the details of your report.'); return;
        }

        const formData = new FormData()
        formData.append('wbPrivacy', data?.privateAgree);
        formData.append('wbAnonymous', data?.isRealName)
        if(data?.isRealName === 'R'){
            formData.append('wbName', data?.name)
            formData.append('wbEmail', data?.email)
            formData.append('wbPhone', data?.phone)
        }
        formData.append('wbClass', data?.wbType)
        formData.append('wbSubject', data?.wbTitle)
        formData.append('wbContents', data?.wbContents)
        formData.append('attachedFile', data?.wbFile)
        const res = await api.post('/user/whistleblow/setWhistleblow.php', formData)
        if(res.data.result === true) alert('Complete');

    }
    return (
        <div className="esg">
            <div className="esg-banner">
                <div className="banner-area1">
                    <ul className="location">
                        <li>{language?.header_4}</li>
                        <li>{language?.header_4_7}</li>
                    </ul>
                    <h2>{language?.header_4_7}</h2>
                    <p>{language?.esg_text_01}</p>
                    <p>{language?.esg_text_02}</p>
                </div>
                {/*<div className="esg-menu">
                    <ul>
                        <li>
                            <Link href="/sustainability/esg-management">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_03}</p>}
                                    <p>{language?.esg_text_04}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/climate-change">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_05}</p>}
                                    <p>{language?.esg_text_06}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/ethical-business">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_07}</p>}
                                    <p>{language?.esg_text_08}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/ehs">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_09}</p>}
                                    <p>{language?.esg_text_10}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/supply-chain">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_11}</p>}
                                    <p>{language?.esg_text_12}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/quality-management">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_13}</p>}
                                    <p>{language?.esg_text_14}</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability/sustainability-report">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_15}</p>}
                                    <p>{language?.esg_text_16}</p>
                                </div>
                            </Link>
                        </li>
                        <li className="active">
                            <Link href="/sustainability/whistleblower-complaint">
                                <div>
                                    {language.language !== 'en' && <p>{language?.esg_text_17}</p>}
                                    <p>{language?.esg_text_18}</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>*/}
            </div>

            {/* <div className="esg-menus" id="esgMenus"> */}
            <div className="esg-menus">
                <ul className="esg-menu-list">
                    <li>
                        <Link href="/sustainability/esg-management">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_03}</p>}
                                <p>{language?.esg_text_04}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/climate-change">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_05}</p>}
                                <p>{language?.esg_text_06}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/ethical-business">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_07}</p>}
                                <p>{language?.esg_text_08}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/ehs">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_09}</p>}
                                <p>{language?.esg_text_10}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/supply-chain">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_11}</p>}
                                <p>{language?.esg_text_12}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/quality-management">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_13}</p>}
                                <p>{language?.esg_text_14}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sustainability/sustainability-report">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_15}</p>}
                                <p>{language?.esg_text_16}</p>
                            </div>
                        </Link>
                    </li>
                    <li className="active">
                        <Link href="/sustainability/whistleblower-complaint">
                            <div>
                                {language.language !== 'en' && <p>{language?.esg_text_17}</p>}
                                <p>{language?.esg_text_18}</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="esg-container">
                <h3>{language?.esg_text_08_01}</h3>
                <section className="esg-section-ws">
                    <div className="whistleblower-table">
                        <h4>{language?.esg_text_08_02} <Link href="/sustainability/whistleblower-complaint/guide">{language?.esg_text_08_16}</Link></h4>
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">{language?.esg_text_08_03}</th>
                                <th scope="col">{language?.esg_text_08_03_01}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{language?.esg_text_08_04}<br/>{language?.esg_text_08_05}</td>
                                <td>{language?.esg_text_08_06}</td>
                            </tr>
                            <tr>
                                <td>{language?.esg_text_08_07}</td>
                                <td>{language?.esg_text_08_08}</td>
                            </tr>
                            <tr>
                                <td>{language?.esg_text_08_09}</td>
                                <td>{language?.esg_text_08_10}<br/><br/>{language?.esg_text_08_11}<br/>{language?.esg_text_08_12}</td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="agree">
                            <p>{language?.esg_text_08_13}</p>
                            <div>
                                <label><input type="radio" name="privateAgree" onChange={() => setData((prev: any) => ({...prev, privateAgree: 'Y'}))} checked={data?.privateAgree === 'Y'}/> {language?.esg_text_08_14}</label>
                                <label><input type="radio" name="privateAgree" onChange={() => setData((prev: any) => ({...prev, privateAgree: 'N'}))} checked={data?.privateAgree === 'N'}/> {language?.esg_text_08_15}</label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="esg-section-ws">
                    <div className="whistleblower-table">
                        <h4>{language?.esg_text_08_17}</h4>
                        <table>
                            <tbody>
                            <tr>
                                <th scope="row">{language?.esg_text_08_18}</th>
                                <td>
                                    <label><input type="radio" name="whistleblow" value="Y" onChange={() => setData((prev: any) => ({...prev, isRealName: 'R'}))} checked={data?.isRealName === 'R'}/> {language?.esg_text_08_19} <input type="text" name="name"/></label>
                                    <label><input type="radio" name="whistleblow" value="N" onChange={() => setData((prev: any) => ({...prev, isRealName: 'A'}))} checked={data?.isRealName === 'A'}/> {language?.esg_text_08_20}</label>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">{language?.esg_text_08_21}</th>
                                <td><input type="text" name="email" value={data?.email} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <th scope="row">{language?.esg_text_08_22}</th>
                                <td><input type="text" name="phone" value={data?.phone} onChange={handleChange}/></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="esg-section-ws">
                    <div className="whistleblower-table">
                        <h4>{language?.esg_text_08_23}</h4>
                        <table>
                            <tbody>
                            <tr>
                                <td style={{borderRight: 0}}>
                                    <div>
                                        <label>
                                            <input type="radio" name="wbType" onChange={handleChange} value="M"/>
                                            {language?.esg_text_08_24}
                                        </label>
                                        <label>
                                            <input type="radio" name="wbType" onChange={handleChange} value="S"/>
                                            {language?.esg_text_08_25}
                                        </label>
                                        <label>
                                            <input type="radio" name="wbType" onChange={handleChange} value="B"/>
                                            {language?.esg_text_08_26}
                                        </label>
                                        <label>
                                            <input type="radio" name="wbType" onChange={handleChange} value="A"/>
                                            {language?.esg_text_08_27}
                                        </label>
                                        {/*<label>
                                            <input type="radio" name="wbType" onChange={handleChange} value="T"/>
                                            {language?.esg_text_08_29}
                                        </label>*/}
                                        <label>
                                            <input type="radio" name="wbType" onChange={handleChange} value="H"/>
                                            {language?.esg_text_08_30}
                                        </label>
                                        <label>
                                            <input type="radio" name="wbType" onChange={handleChange} value="O"/>
                                            {language?.esg_text_08_31}
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="esg-section-ws">
                    <div className="whistleblower-table">
                        <h4>{language?.esg_text_08_32}</h4>
                        <table>
                            <tbody>
                            <tr>
                                <th scope="row">{language?.esg_text_08_33}</th>
                                <td>
                                    <input type="text" name="wbTitle" value={data?.wbTitle} onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">{language?.esg_text_08_34}</th>
                                <td><textarea placeholder={language?.esg_text_08_35} name="wbContents" value={data?.wbContents} onChange={handleChange}></textarea></td>
                            </tr>
                            <tr>
                                <th scope="row">{language?.esg_text_08_36}</th>
                                <td>
                                    <label htmlFor="whistleblow_pdsFile" className="for_whistleblow_pdsFiles">{language?.esg_text_08_37}</label>
                                    <input type="text" className="upload-name" id="attached1_before" name="wbFile" value={fileName?.wbFile} disabled/>
                                    <input type="file" id="whistleblow_pdsFile" name="wbFile" onChange={handleChange} className="upload-hidden check-pct"/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="whistleblow-btn" onClick={handleWhistleBlow}>
                        <button>{language?.esg_text_08_38}</button>
                    </div>
                </section>

            </div>
        </div>
    )
}
