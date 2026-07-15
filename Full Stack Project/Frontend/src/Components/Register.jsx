import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/app/register", {
                name: name,
                email: email,
                password: password
            })
            alert(res.data.message)
            navigate("/login")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div style={{ maxWidth: "300px", margin: "50px auto" }}>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
