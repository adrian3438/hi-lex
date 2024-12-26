import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface Props {
    inquiryType : string
}
export default function ListInquiryTypeBox ({inquiryType} : Props) {

    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('inquiryType', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select value={inquiryType} name="" id="" onChange={search}>
                <option value="ALL" selected>전체</option>
                <option value="SO" selected>판매 및 기타</option>
                <option value="RT" selected>연구개발 및 기술 관련</option>
                <option value="EO" selected>채용</option>
                <option value="OO" selected>기타</option>
            </select>
        </div>
        </>
    )
}
