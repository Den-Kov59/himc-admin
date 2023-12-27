import { updateService } from "@/app/_lib/actions";
import { IService } from "@/app/_lib/dataTypes";


export default function EditForm({ service }: {service: IService}){
    const updateServiceWithId = updateService.bind(null, service._id);
    return(
        <form action={updateServiceWithId}>
            <input type="hidden" name="id" value={service._id} />
            
            <label>Service Name</label>
            
            <input type='text' id='name' name="name" value={service.name} readOnly />
            
            <label>Service Cost</label>

            <input type="number" id="cost" name="cost" placeholder="cost" defaultValue={service.cost} required />

            <button type="submit">Edit</button> 
        </form>
    )
} 