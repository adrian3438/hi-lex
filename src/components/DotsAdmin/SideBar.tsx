'use client'

import { usePathname, useRouter } from "next/navigation"
import Image from "next/image";

export default function AdminSideBar () {
    const pathname = usePathname()
    const splitPath = pathname?.split('/')
    const router = useRouter()
    return(
        <>
        {/* members. product. content. pr_video. certificate. inquiry. settings */}
        <aside>
            <h2>
                <Image src="/images/common/footer-logo.png" alt="Daedong door" width={1000} height={272} style={{width: "104px", height: "auto"}}/>
            </h2>
            <ul className="mainMenu">

                <li className={splitPath[2] === 'common-code-management' ? 'content active' : 'content'}>
                    <span onClick={() => router.push(`/admin/common-code-management/common-code-list/`)}>공용코드 관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3] === 'common-code-list' || splitPath[3] === 'common-code' ? 'active' : ''} onClick={() => router.push(`/admin/common-code-management/common-code-list/`)}>
                            <span>공용코드</span>
                        </li>
                    </ul>
                </li>

                <li className={splitPath[2] === 'contents-management' ? 'content active' : 'content'}>
                    <span onClick={() => router.push(`/admin/contents-management/contents-list/`)}>콘텐츠 관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3] === 'contents-list' || splitPath[3] === 'contents' ? 'active' : ''} onClick={() => router.push(`/admin/contents-management/contents-list/`)}>
                            <span>콘텐츠</span>
                        </li>
                    </ul>
                </li>

                <li className={splitPath[2] === 'employee-management' ? 'content active' : 'content'}>
                    <span onClick={() => router.push(`/admin/employee-management/employee-list/`)}>채용 관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3] === 'employee-list' || splitPath[3] === 'employee' ? 'active' : ''} onClick={() => router.push(`/admin/employee-management/employee-list/`)}>
                            <span>채용공고 리스트</span>
                        </li>
                        <li className={splitPath[3] === 'applicant-list' || splitPath[3] === 'applicant' ? 'active' : ''} onClick={() => router.push(`/admin/employee-management/applicant-list/`)}>
                            <span>입사지원 리스트</span>
                        </li>
                    </ul>
                </li>

                <li className={splitPath[2] === 'inquiry-management' ? 'inquiry active' : 'inquiry'}>
                    <span onClick={() => router.push(`/admin/inquiry-management/inquiry-list/`)}>문의관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3] === 'inquiry-list' || splitPath[3] === 'inquiry' ? 'active' : ''} onClick={() => router.push(`/admin/inquiry-management/inquiry-list/`)}>
                            <span>문의접수</span>
                        </li>
                        <li className={splitPath[3] === 'whistleblower-list' || splitPath[3] === 'whistleblower' ? 'active' : ''} onClick={() => router.push(`/admin/inquiry-management/whistleblower-list/`)}>
                            <span>클린신고 관리</span>
                        </li>
                    </ul>
                </li>

                <li className={splitPath[2] === 'admin-account-management' ? 'settings active' : 'settings'}>
                    <span onClick={() => router.push(`/admin/admin-account-management/admin-account-list/`)}>관리자 계정관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3] === 'admin-account-list' || splitPath[3] === 'admin-account' ? 'active' : ''} onClick={() => router.push(`/admin/admin-account-management/admin-account-list/`)}>
                            <span>관리자 계정</span>
                        </li>
                    </ul>
                </li>

            </ul>
        </aside>
        </>
    )
}
