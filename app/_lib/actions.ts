'use server'
import { redirect } from "next/navigation";
import { signIn } from "../auth";
import { z } from "zod";
import { postCreateService } from "../_clientAPI/servicesAPI";
import { revalidatePath } from "next/cache";

const serviceSchema = z.object({
    _id: z.string(),
    name: z.string(),
    cost: z.coerce.number()
})

const CreateService = serviceSchema.omit({_id: true})

export async function createService(formData: FormData) {
    const {name, cost} = CreateService.parse({
        name: formData.get('name'),
        cost: formData.get('cost')
    })
    try{
        const response = await postCreateService(name, cost)
        if(response.data){
            revalidatePath('/dashboard/services')
        }
        throw new Error('API error')
    } catch (error){
        console.log(error)
        throw error
    }
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