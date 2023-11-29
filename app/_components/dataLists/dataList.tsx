import { IOrder, IPlace, IService, IUser, baseData } from "@/app/_lib/dataTypes"
import { OrderCard } from "./dataCards/orderCard"
import { UserCard } from "./dataCards/userCard"
import { ServiceCard } from "./dataCards/serviceCard"
import { PlaceCard } from "./dataCards/placeCard"

interface DataListProps {
    orderList?: Array<IOrder> | []
    userList?: Array<IUser> | []
    serviceList?: Array<IService> | []
    placeList?: Array<IPlace> | []
}

export interface DataCardProps<T> {
    data: T
}

interface DataListMarkupProps<T> {
    dataList: Array<T> | [];
    Card: React.FC<DataCardProps<T>>;
    message: string;
}

const dataListMarkup = <T,>(
    {
        dataList,
        Card,
        message
    }: DataListMarkupProps<T>) => {
        return (
            <div>
                {dataList.length !== 0 ?
                <div>
                    {dataList.map(data =>{
                        return(
                        <div key={(data as baseData)._id}>
                            <Card data={data}/>
                        </div>
                        )
                    })}
                </div>
                :
                <div>{message}</div>
                }
            </div>
        )
    }

export const DataList: React.FC<DataListProps> = ({ orderList, userList, serviceList, placeList }) => {
    if (orderList){
        const orderProps: DataListMarkupProps<IOrder> = {
            dataList: orderList,
            Card: OrderCard,
            message: 'No Orders'
        } 
        return dataListMarkup<IOrder>(orderProps)
    }
    if (userList) {
        const userProps: DataListMarkupProps<IUser> = {
            dataList: userList,
            Card: UserCard,
            message: 'No Users'
        }
        return dataListMarkup(userProps)
    }
    if (serviceList) {
        const serviceProps: DataListMarkupProps<IService> = {
            dataList: serviceList,
            Card: ServiceCard,
            message: 'No Services'
        }
        return dataListMarkup(serviceProps)
    }
    if (placeList) {
        const placeProps: DataListMarkupProps<IPlace> = {
            dataList: placeList,
            Card: PlaceCard,
            message: 'No Places'
        }
        return dataListMarkup(placeProps)
    }
}