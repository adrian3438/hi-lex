import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface Props {
    recuritType? : string
}
export default function ListRecuritTypeBox ({recuritType} : Props) {

    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('recruitAffilate', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select value={recuritType} name="" id="" onChange={search}>
                <option value="" selected>- 계열사 -</option>
                <option value="H" selected>대동하이렉스</option>
                <option value="D" selected>대동도어</option>
            </select>
        </div>
        </>
    )
}
