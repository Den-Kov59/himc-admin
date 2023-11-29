import { getAllPlaces } from "@/app/_clientAPI/himchisktaAPI"
import { DataList } from "@/app/_components/dataLists/dataList"

export default async function Places() {
    const placeData = (await getAllPlaces()).data

    return (
            <main>
                Places

                <DataList placeList={placeData} />
            </main>
    )
}