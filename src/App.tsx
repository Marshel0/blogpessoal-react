import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Cadastro from './pages/cadastro/cadastro'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/temas/listatemas/listatema'
import FormularioTema from './components/temas/formulariotemas/formulariotema'
import DeletarTema from './components/temas/deletartemas/deletartema'
import ListaPostagens from './components/postagens/listapostagens/listapostagem'
import FormularioPostagem from './components/postagens/formulariopostagens/formulariopostagem'
import Perfil from './pages/perfil/perfil'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
import DeletarPostagem from './components/postagens/deletarpostagens/deletarpostagem'

function App() {

  return (
    <>
      <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
      <Navbar/>
      <div className="min-h-[85vh]">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/cadastro" element={<Cadastro/>} />  
          <Route path="/login" element={<Login/>} />
          <Route path="/temas" element={<ListaTemas/>} />
          <Route path="/cadastroTema" element={<FormularioTema/>} />
          <Route path="/editarTema/:id" element={<FormularioTema/>} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          <Route path="/postagens" element={<ListaPostagens />} />
          <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
          <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>

      </AuthProvider>
    </>
  )
}

export default App
