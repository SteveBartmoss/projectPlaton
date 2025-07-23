import viteLogo from '/vite.svg'
import './App.css'
import { MainRouter } from './routes/MainRouter'

function App() {

  return (
    <>
      <MainRouter />
    </>
  )
}

export default App

/*


<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <Login />
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

*/