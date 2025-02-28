import "@/app/assets/career/application.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import CareerHeader from "@/components/career/CareerHeader";
import ApplicationDetail from "@/components/career/application/ApplicationDetail";

export default async function ApplicationDetailPage({searchParams: {lang}, params: {id}}: any) {
  const language = await fetchLanguage(lang);

  return (
    <>
      <Header language={language}/>
      <div className="career">
        <CareerHeader language={language} activeIndex={3}/>
        <ApplicationDetail id={id}/>
      </div>
      <Footer language={language}/>
    </>
  )
}
