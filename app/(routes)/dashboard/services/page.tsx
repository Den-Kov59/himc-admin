import { getAllServices } from "@/app/_clientAPI/servicesAPI"
import { DataList } from "@/app/_components/dataLists/dataList"

export default async function Services() {
    const serviceData = (await getAllServices()).data
    return (
            <main>
                Services

                <DataList serviceList={serviceData} />
            </main>
    )
}