import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface Props {
    employType : string
}
export default function ListEmployTypeBox ({employType} : Props) {

    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('employeementType', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select value={employType} name="" id="" onChange={search}>
                <option value="" selected>- 고용형태 -</option>
                <option value="R" selected>정규직</option>
                <option value="C" selected>계약직</option>
                <option value="I" selected>인턴</option>
            </select>
        </div>
        </>
    )
}
