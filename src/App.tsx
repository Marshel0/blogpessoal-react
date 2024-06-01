import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <div className="min-h-[85vh]">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
