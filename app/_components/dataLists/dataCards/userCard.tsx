import { IUser } from "@/app/_lib/dataTypes";
import { DataCardProps } from "../dataList";

interface UserCardProps extends DataCardProps<IUser>{
    data: IUser;
  }

export const UserCard: React.FC<UserCardProps> = ({ data })=> {
    return (
        <div>
            <p>{data._id}     {data.username}     {data.balance}</p>
        </div>
    )
}