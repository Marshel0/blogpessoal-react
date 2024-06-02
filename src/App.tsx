import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Cadastro from './pages/cadastro/cadastro'
import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>

      <BrowserRouter>
      <Navbar/>
      <div className="min-h-[85vh]">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro/>} />  
        <Route path="/login" element={<Login/>} />
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>

      </AuthProvider>
    </>
  )
}

export default App
