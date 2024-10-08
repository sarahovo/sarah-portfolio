import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
// import './App.css'
import Hero from "./Components/Hero"
import Header from './Components/Header'
import About from './Components/About'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/home" element={<Hero/>}/>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>

    </Router>
   

    
    </>
  )







  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
