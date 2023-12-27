import { IService } from "@/app/_lib/dataTypes"

export default function PlaceCreateForm({services}: {services: IService[]}){
    return(
        <form action={createPlace}>
            <label>Place Name</label>
            
            <input type='text' id='name' name="name" placeholder='name' required />
            
            <label>Place Address</label>
            
            <input type='text' id='address' name="address" placeholder='address' required />

            <label>Place Description</label>
            
            <input type='text' id='description' name="description" placeholder='description' required />

            <label>Place Services</label>

            {services.map(service =>{
                return(
                    <label key={service._id}>
                        <input type="checkbox" id={service.name} name="himservices" value={service._id} />
                        {service.name}
                    </label>
                )
            })}

            <label>Place Image</label>

            <input type="file" id="image" name="images" />

            <button type="submit">Create</button> 
        </form>
    )
} 