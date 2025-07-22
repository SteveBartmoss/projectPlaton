import { useNavigate } from 'react-router-dom'
import './login.css'

export function Login(){

    const navigate = useNavigate();

    const handleLogin=()=>{
        navigate('home')
    }

    return(
        <div className='card-div'>
            <div>
                <h1>Ingresar</h1>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="password" />
            </div>
            <div>
                <button onClick={handleLogin}>login</button>
            </div>
        </div>
    )
}