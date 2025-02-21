import ApplicantListPage from "@/components/pages/dotsAdmin/applicant-list";

export default function ApplicantList ({searchParams : {
  keyword, column, order, size, page
}} : any) {

  return(
    <>
      <ApplicantListPage
        page={page || 1}
        size={size || 25}
        column={column || 'date'}
        order={order || 'asc'}
        keyword={keyword || ''}
      />
    </>
  )
}
