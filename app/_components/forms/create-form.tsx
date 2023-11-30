import { createService } from "@/app/_lib/actions";


export default function CreateForm(){
    return(
        <form action={createService}>
            <label>Service Name</label>
            
            <input type='text' id='name' name="name" placeholder='name' required />
            
            <label>Service Cost</label>

            <input type="number" id="cost" name="cost" placeholder="cost" required />

            <button type="submit">Create</button> 
        </form>
    )
} 