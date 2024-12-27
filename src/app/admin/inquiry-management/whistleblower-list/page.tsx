import WhistleblowerListPage from "@/components/pages/dotsAdmin/whistleblower-list";

export default function WhistleblowerList ({searchParams : {wbtype, status, page, size, keyword, column, order}} : any) {

    return(
        <>
            <WhistleblowerListPage
                page={page || 1}
                size={size || 25}
                keyword={keyword || ''}
                order={order || 'desc'}
                column={column || 'whistleblowName'}
                wbtype={wbtype || ''}
                status={status || ''}
            />
        </>
    )
}
