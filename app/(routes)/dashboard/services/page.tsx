import { getAllServices } from "@/app/_clientAPI/servicesAPI"
import { DataList } from "@/app/_components/dataLists/dataList"
import Link from "next/link"

export default async function Services() {
    const serviceData = (await getAllServices()).data
    return (
            <main>
                Services
                <Link href="/dashboard/services/create">Create New Service</Link>
                <DataList serviceList={serviceData} />
            </main>
    )
}