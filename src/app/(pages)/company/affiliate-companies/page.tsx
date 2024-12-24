import "@/app/assets/company/affiliate.scss"
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Map from "@/components/map/map";

export default async function AffiliateCompaniesPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="affiliate">
                <Map/>
                <div>test</div>
            </div>
            <Footer language={language}/>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC087DFe7YereRkKUwqUIXnQrMUf_1yA7M&libraries=places" async></script>
        </>
    )
}
