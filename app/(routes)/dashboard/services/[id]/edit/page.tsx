import { getServiceById } from "@/app/_clientAPI/servicesAPI"

export default function EditServicePage({ params }: { params: {id: string} } ) {
    const id= params.id
    const service = getServiceById(id)
}