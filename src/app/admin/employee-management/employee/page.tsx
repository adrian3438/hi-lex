import EmployeePage from "@/components/pages/dotsAdmin/employee";

export default function Employee ({searchParams : {id, lang}} : any) {

    return(
        <>
        <EmployeePage
            id={id}
            lang={lang}
        />
        </>
    )
}
