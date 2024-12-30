import WhistleblowerPage from "@/components/pages/dotsAdmin/Whistleblower";

export default function whistleblower ({searchParams : {t}} : any) {
    return(
        <>
            <WhistleblowerPage type={t}/>
        </>
    )
}
