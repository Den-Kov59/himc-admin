import axios from "axios"

export const getAllOrders = async ()=>{
    try{
        const respone = await axios.get('http://localhost:8000/order/all')
        return respone.data
    }catch (e){
        console.log(e)
    }

}