import { IService } from "@/app/_lib/dataTypes";
import { DataCardProps } from "../dataList";

interface ServiceCardProps extends DataCardProps<IService> {
    data: IService;
  }

export const ServiceCard: React.FC<ServiceCardProps> = ({ data })=> {
    return (
        <div>
            <p>{data._id}     {data.name}     {data.cost}$</p>
        </div>
    )
}