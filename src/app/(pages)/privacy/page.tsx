import "@/app/assets/privacy/privacy.scss";
import { fetchLanguage } from "@/util/fetchLanguage";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default async function Home({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);

    return (
        <>
            <Header language={language}/>
            <div className="privacy">
                <h2>{language?.privacy_01}</h2>
                <section>
                    <h3>{language?.privacy_02}</h3>
                    <p>{language?.privacy_03}</p>
                </section>
                <section>
                    <h3>{language?.privacy_04}</h3>
                    <p>{language?.privacy_05}</p>
                </section>
                <section>
                    <h3>{language?.privacy_06}</h3>
                    <p>{language?.privacy_07}</p>
                    <p>{language?.privacy_08}</p>
                </section>
                <section>
                    <h3>{language?.privacy_09}</h3>
                    <p>{language?.privacy_10}</p>
                </section>
                <section>
                    <h3>{language?.privacy_11}</h3>
                    <p>{language?.privacy_12}</p>
                    <p>{language?.privacy_13}</p>
                    <p>{language?.privacy_14}</p>
                </section>
                <section>
                    <h3>{language?.privacy_15}</h3>
                    <p>{language?.privacy_16}</p>
                </section>
                <section>
                    <h3>{language?.privacy_17}</h3>
                    <p>{language?.privacy_18}</p>
                </section>
                <section>
                    <h3>{language?.privacy_19}</h3>
                    <p>{language?.privacy_20}</p>
                </section>
                <section>
                    <h3>{language?.privacy_21}</h3>
                    <p>{language?.privacy_22}</p>
                    <p>{language?.privacy_23}</p>
                    <p>{language?.privacy_24}</p>
                    <p>{language?.privacy_25}</p>
                    <p>{language?.privacy_26}</p>
                </section>
                <section>
                    <h3>{language?.privacy_27}</h3>
                    <p>{language?.privacy_28}</p>
                </section>
                <section>
                    <h3>{language?.privacy_29}</h3>
                    <p>{language?.privacy_30}</p>
                    <p>{language?.privacy_31}</p>
                </section>
                <section>
                    <h3>{language?.privacy_32}</h3>
                    <p>{language?.privacy_33}</p>
                    <div>
                        <p>{language?.privacy_34}</p>
                        <p>{language?.privacy_35}</p>
                        <p>{language?.privacy_36}</p>
                    </div>
                    <div>
                        <p>{language?.privacy_37}</p>
                        <p>{language?.privacy_38}</p>
                        <p>{language?.privacy_39}</p>
                    </div>
                </section>
                <section>
                    <h3>{language?.privacy_40}</h3>
                    <p>{language?.privacy_41}</p>
                </section>
            </div>
            <Footer language={language}/>
        </>
    );
}
