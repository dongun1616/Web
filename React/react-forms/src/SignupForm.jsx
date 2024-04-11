import { useState } from "react"

export default function SingupForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const updateFirstname = (evt) => {
        setFirstName(evt.target.value)
    }
    const updateLastname = (evt) => {
        setLastName(evt.target.value)
    }
    const handleSubmit = () => {
        console.log(firstName, lastName)
    }
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input
                onChange={updateFirstname}
                type="text"
                placeholder="firstname"
                value={firstName}
                id="firstname"
            />
            <label htmlFor="lastname">Last Name</label>
            <input
                onChange={updateLastname}
                type="text"
                placeholder="lastname"
                value={lastName}
                id="lastname"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}