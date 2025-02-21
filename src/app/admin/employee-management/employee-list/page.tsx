import EmployeeListPage from "@/components/pages/dotsAdmin/employee-list";

export default function EmployeeList ({searchParams : {
    recruitAffilate, occupationClass, careerClass, employeementType, processStatus, page, size, keyword, column, order
}} : any) {

    return(
        <>
            <EmployeeListPage
              recruitAffilate={recruitAffilate || ''}
              occupationClass={occupationClass || ''}
              careerClass={careerClass || ''}
              employeementType={employeementType || ''}
              processStatus={processStatus || ''}
              page={page || 1}
              size={size || 25}
              keyword={keyword || ''}
              column={column || 'date'}
              order={order || 'asc'}
            />
        </>
    )
}
