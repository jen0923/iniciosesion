import "./Formulario.css"
import {useState} from "react"

export function Formulario({setUser}){
    const [nombre, SetNombre]= useState("")
    const [contrasena, SetContrasena]= useState("")
    const [error, setError]= useState (false)

    const handleSubmit =(e)=>{
        e.preventDefault()

        if (nombre === "" || contrasena === ""){
            setError(true)
            return
        }
        setError(false)
        setUser([nombre])

    }
    return (
        <section>
            <h1>Login</h1>
            <form className= "Formulario" onSubmit={handleSubmit}>
                <input type="text" value={nombre} onChange={e=>SetNombre(e.target.value)}/>
                <input type="password"value={contrasena} onChange={e=>SetContrasena(e.target.value)} />
                <button>Iniciar sesion</button>

            </form>
            {error&& <p>Todos los campos son obligatorios </p>}

        </section>
    )
}