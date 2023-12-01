import { getServiceById } from "@/app/_clientAPI/servicesAPI"
import EditForm from "@/app/_components/forms/edit-form"
import { IService } from "@/app/_lib/dataTypes"

export default async function EditServicePage({ params }: { params: {id: string} } ) {
    const id= params.id
    const serviceData = await getServiceById(id)
    const service: IService = serviceData.data as IService
    return(
        <main>
            <h1>Edit service {service.name}</h1>
            <EditForm service={service}/>
        </main>
    )
}