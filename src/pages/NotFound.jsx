import { useNavigate } from "react-router-dom"
import './notfound.css'


export function NotFound(){

    const navigate = useNavigate()

    const handleHome= ()=>{
        navigate('/home', {replace: true})
    }

    return(
        <>
            <div className="card-div-not-found">
                <h1>404</h1>
                <p>Parce que lo que buscas esta en otro castillo</p>
                <div>
                    <button onClick={handleHome}>home</button>
                </div>
            </div>
        </>
    )
}