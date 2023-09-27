export function Home({user,setUser}){
 const handleLogout=()=> {
    setUser([])
 }   
    return(
    <div>
        <h1>holi funciono</h1>
        <h2>{user}</h2>
        <button onClick={handleLogout}>Cerrar sesion</button>

    </div>



)
}
