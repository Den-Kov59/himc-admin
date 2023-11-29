import axios from "axios"

export const getAllPlaces = async ()=>{
    try{
        const respone = await axios.get('http://localhost:8000/himchistka/all')
        return respone.data
    }catch (e){
        console.log(e)
    }

}