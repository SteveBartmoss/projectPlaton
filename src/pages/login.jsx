import viteLogo from '/vite.svg'
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
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </div>
            <div>
                <h2>Ingresar</h2>
            </div>
            <div className='div-text-field'>
                <input type="text" className='text-field' placeholder='Usuario'/>
            </div>

            <div className='div-text-field'>
                <input type="password" className='text-field' placeholder='Password' />
            </div>
            <div>
                <button onClick={handleLogin}>login</button>
            </div>
        </div>
    )
}