import axios from "axios"

export const getAllServices = async ()=>{
    try{
        const respone = await axios.get('http://localhost:8000/himservices/all')
        return respone.data
    }catch (e){
        console.log(e)
    }

}