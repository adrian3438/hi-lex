import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface Props {
    careerType : string
}
export default function ListCareerTypeBox ({careerType} : Props) {

    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('careerClass', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select value={careerType} name="" id="" onChange={search}>
                <option value="" selected>- 경력 -</option>
                <option value="C" selected>경력</option>
                <option value="F" selected>신입</option>
                <option value="N" selected>무관</option>
            </select>
        </div>
        </>
    )
}
