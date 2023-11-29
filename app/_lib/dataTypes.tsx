export interface baseData {
    _id: string
}

export interface IOrder extends baseData {
    user: string
    himservices: Array<IService>
    himchistka: Array<IPlace>
    status: string
    sum: number
    dateAdded: Date
}

export interface IUser extends baseData{
    email: string,
    username: string,
    balance: number
}

export interface IPlace extends baseData {
    name: string
    address: string
    description: string
    himservices: Array<IService>
    images: Array<string>
}

export interface IService extends baseData {
    name: string
    cost: number
}