import './App.css'
import { Login } from './components/Login/Login'
import { Routes, Route } from 'react-router-dom'
import { SignUp } from './components/Signup/Signup'
import { Home } from './components/Home/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/user/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
