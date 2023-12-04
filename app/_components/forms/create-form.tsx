import { createService } from "@/app/_lib/actions";

const serviceForm = {
    inputs: [
        {
            label: "Service Name",
            inputType: "text",
            inputId: "name"
        },
        {
            label: "Service Cost",
            inputType: "number",
            inputId: "cost"
        }
    ]
}

const placeForm = {
    inputs: [
        {
            label: "Place Name",
            inputType: "text",
            inputId: "name"
        },
        {
            label: "Place Address",
            inputType: "text",
            inputId: "address"
        },
        {
            label: "Place Description",
            inputType: "text",
            inputId: "description"
        },
        {
            label: "Place Services",
            inputType: "select",
            inputId: "services",
        },
        {
            label: "Place Image",
            inputType: "file",
            inputId: "image",
        }
    ]
}

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