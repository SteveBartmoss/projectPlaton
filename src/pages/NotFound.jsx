import { useNavigate } from "react-router-dom"


export function NotFound(){

    const navigate = useNavigate()

    const handleHome= ()=>{
        navigate('/home', {replace: true})
    }

    return(
        <>
            <div>
                <h1>404</h1>
                <p>Parce que lo que buscas esta en otro castillo</p>
                <div>
                    <button onClick={handleHome}>home</button>
                </div>
            </div>
        </>
    )
}