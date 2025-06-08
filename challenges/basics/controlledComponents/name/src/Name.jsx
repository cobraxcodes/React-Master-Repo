// 3️⃣ Make a form with controlled inputs for first name and last name, and show full name on submit.
import { useState } from "react";

export default function Name(){ 
    const [form, setForm] = useState({ // using only one state but setting different values inside to access use dot notation :)
        firstName: "",
        lastName: ""
    })

    const handleChange = (e) =>{ // whenever something changes in the input 
        const {name,value} = e.target; // destructuring name and value that a change occured to be e.target(its new value)
        setForm(prev => ({...prev, [name]: value})) // prev is the value before .. the spread operator makes a copy of the existing form, the curren form and set's the new 
        //values like firstName is they key [name] and value is the new value in the input :)
    }
    const submitHandle = (event) =>{ // this is when form is submitted
        event.preventDefault()
        if(form.firstName.length == 0 || form.lastName.length ==0){ // send an alert if names are under 1 character
            return alert('Name must be at least 2 characters')
        }
    }
    return(
        // using name here to addresss which input goes where
        <div>
            <form onSubmit={submitHandle}>Fill Out The Form: 
                <p>First Name:</p>
                <input type="text" value={form.firstName} placeholder="Enter First Name .." name="firstName" onChange={handleChange}></input> 
                <p>Last Name:</p>
                <input type="text" value={form.lastName} placeholder="Enter Last Name.." name="lastName" onChange={handleChange}   ></input>
                <br />
                <br />
                <button>Submit</button>

                <h1>{form.firstName} {form.lastName}</h1>
            </form>

        </div>
    )
}
// one state
// create