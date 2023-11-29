import { IPlace } from "@/app/_lib/dataTypes";
import { DataCardProps } from "../dataList";

interface PlaceCardProps extends DataCardProps<IPlace> {
    data: IPlace;
  }

export const PlaceCard: React.FC<PlaceCardProps> = ({ data })=> {
    return (
        <div>
            <p>{data._id}     {data.address}   {data.name} </p>
        </div>
    )
}