import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod'
import axios from 'axios';

async function login(email:string, password: string) {
    try {
        const response = await axios.post(`http://localhost:8000/login`, {
            email, password
        })
        if (response.data.success) {
            return response.data
        }
        else {
            return null
        }
    } catch (error){
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
        const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(4)})
        .safeParse(credentials);
        if(parsedCredentials.success){
            const {email, password} = parsedCredentials.data;
            const user = await login(email, password);
            if(!user){
                return null
            }
            console.log(user.data)
            return user.data
        }

        console.log('invalid credentials')
        return null
    },
  })],
});