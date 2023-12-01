import { IService } from "@/app/_lib/dataTypes";
import { DataCardProps } from "../dataList";
import Link from "next/link";

interface ServiceCardProps extends DataCardProps<IService> {
    data: IService;
  }

export const ServiceCard: React.FC<ServiceCardProps> = ({ data })=> {
    const editHref = '/dashboard/services/'+data._id+'/edit'
    return (
        <div>
            <p>{data._id}     {data.name}     {data.cost}$        <Link href={editHref}>Edit</Link></p>
        </div>
    )
}