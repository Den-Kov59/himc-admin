import { IOrder } from "@/app/_lib/dataTypes";
import { DataCardProps } from "../dataList";

interface OrderCardProps extends DataCardProps<IOrder> {
    data: IOrder;
  }

export const OrderCard: React.FC<OrderCardProps> = ({ data })=> {
    return (
        <div>
            <p>{data._id}     {data.status}</p>
        </div>
    )
}