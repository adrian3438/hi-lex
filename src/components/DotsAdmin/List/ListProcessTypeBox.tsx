import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface Props {
    processStatus? : string
}
export default function ListProcessTypeBox ({processStatus} : Props) {

    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('processStatus', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select value={processStatus} name="" id="" onChange={search}>
                <option value="" selected>- 진행상태 -</option>
                <option value="O" selected>진행중</option>
                <option value="R" selected>접수중</option>
                <option value="C" selected>접수마감</option>
            </select>
        </div>
        </>
    )
}
