import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface Props {
    occupationType : string
}
export default function ListOccupationTypeBox ({occupationType} : Props) {

    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('occupationClass', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select value={occupationType} name="" id="" onChange={search}>
                <option value="" selected>- 직군 -</option>
                <option value="SM" selected>영업</option>
                <option value="RD" selected>R&amp;D</option>
                <option value="MM" selected>생산</option>
                <option value="MS" selected>생산지원</option>
                <option value="QM" selected>품질</option>
                <option value="MP" selected>경영</option>
            </select>
        </div>
        </>
    )
}
