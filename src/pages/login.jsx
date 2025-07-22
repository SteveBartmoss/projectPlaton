import './login.css'

export function Login(){
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
                <button>login</button>
            </div>
        </div>
    )
}