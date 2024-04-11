import { useState } from "react"

export default function BetterSingupForm() {
    const [formData, setFormData] = useState(
        { firstName: "", lastName: "", password: "" }
    )

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value
        setFormData((currDate) => {
            return {
                ...currDate,
                [changedField]: newValue,
            }
        })
    }
    const handleSubmit = (evt) => {
        console.log(formData)
    }
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input
                onChange={handleChange}
                type="text"
                placeholder="firstname"
                value={formData.firstName}
                id="firstname"
                name="firstName"
            />
            <label htmlFor="lastname">Last Name</label>
            <input
                onChange={handleChange}
                type="text"
                placeholder="lastname"
                value={formData.lastName}
                id="lastname"
                name="lastName"
            />
            <label htmlFor="password">Password</label>
            <input
                onChange={handleChange}
                type="password"
                placeholder="password"
                value={formData.password}
                id="password"
                name="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}