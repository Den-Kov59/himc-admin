import axios from "axios"

export const getAllServices = async ()=>{
    try{
        const respone = await axios.get('http://localhost:8000/himservices/all')
        return respone.data
    }catch (e){
        console.log(e)
    }
}

export const editServiceById = async (id: string, cost: number) =>{
    try {
        const response = await axios.patch('http://localhost:8000/himservices/edit', {id, cost})
        return response.data
    } catch (e){
        console.log(e)
    }
}

export const getServiceById =  async (id: string) =>{
    try {
        const response = await axios.get('http://localhost:8000/himservices/'+id)
        return response.data
    } catch (e){
        console.log(e)
    }
}

export const postCreateService = async (name: string, cost: number)=>{
    try{
        const respone = await axios.post('http://localhost:8000/himservices/new', {name, cost})
        return respone.data
    }catch (e){
        console.log(e)
    }
}