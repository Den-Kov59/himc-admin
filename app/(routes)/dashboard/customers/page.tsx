import { getAllUsers } from "@/app/_clientAPI/userAPI"
import { DataList } from "@/app/_components/dataLists/dataList"

export default async function Customers() {
    const userData = (await getAllUsers()).data

    return (
            <main>
                Customers

                <DataList userList={userData} />
            </main>
    )
}