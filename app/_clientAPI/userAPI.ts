import axios from "axios"

export const getAllUsers = async ()=>{
    try{
        const respone = await axios.get('http://localhost:8000/user/all')
        return respone.data
    }catch (e){
        console.log(e)
    }

}