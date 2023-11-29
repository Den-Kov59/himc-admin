'use server'
import { redirect } from "next/navigation";
import { signIn } from "../auth";

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