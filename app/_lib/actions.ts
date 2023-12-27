'use server'
import { redirect } from "next/navigation";
import { signIn } from "../auth";
import { z } from "zod";
import { editServiceById, postCreateService } from "../_clientAPI/servicesAPI";
import { revalidatePath } from "next/cache";

const serviceSchema = z.object({
    _id: z.string(),
    name: z.string(),
    cost: z.coerce.number()
})

const CreateService = serviceSchema.omit({_id: true})

const placeSchema = z.object({
    _id: z.string(),
    name: z.string(),
    address: z.string(),
    description: z.string(),
    himservices: z.array(z.boolean()),
    images: z.string()
})

const CreatePlace = placeSchema.omit({_id: true})

export async function createService(formData: FormData) {
    const {name, cost} = CreateService.parse({
        name: formData.get('name'),
        cost: formData.get('cost')
    })
    try{
        const response = await postCreateService(name, cost)
        if(!response.success){
            throw new Error('API error')
        }
        
    } catch (error){
        console.log(error)
        throw error
    }
    revalidatePath('/dashboard/services')
    redirect('/dashboard/services')
}

export async function createPlace(formData: FormData) {
    const {name,
        address,
        description,
        himservices,
        images} = CreatePlace.parse({
        name: formData.get('name'),
        address: formData.get('address'),
        description: formData.get('description'),
        himservices: formData.get('himservices'),
        images: formData.get('images')
    })
    try{
        const response = await postCreatePlace(
            name,
            address,
            description,
            himservices,
            images)
        if(!response.success){
            throw new Error('API error')
        }
        
    } catch (error){
        console.log(error)
        throw error
    }
    revalidatePath('/dashboard/services')
    redirect('/dashboard/services')
}

export async function updateService(id: string, formData: FormData) {
    const {cost} = CreateService.parse({
        name: formData.get('name'),
        cost: formData.get('cost')
    })
    try{
        const response = await editServiceById(id, cost)
        if(!response.success){
            throw new Error('API error')
        }
    } catch (error){
        console.log(error)
        throw error
    }
    revalidatePath('/dashboard/services')
    redirect('/dashboard/services')
}

export async function authenticate(prevState: string | undefined,
    formData: FormData
    ) {
    try{
        await signIn('credentials', Object.fromEntries(formData))
        
        redirect('/dashboard')
    } catch (error) {
        if ((error as Error).message.includes('CredentialsSignin')) {
            return 'CredentialsSignin';
          }
          throw error;
    }
} 