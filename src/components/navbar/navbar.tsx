import { Link } from "react-router-dom"


function Navbar() {
    return (
      <>
      
          <header className="bg-fuchsia-800 flex justify-center">
              <div className="container grid grid-cols-2 text-white">
                  <div className="flex-start justify-around items-center py-4 px-16">
                      <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>
                  </div>
                  <nav >
                      <ul className="flex flex-row justify-end items-center py-4 px-16">
                          <li className="hover:underline mx-3">Postagens</li>
                          <li className="hover:underline mx-3">Temas</li>
                          <li className="hover:underline mx-3">Cadastrar Temas</li>
                          <li className="hover:underline mx-3">Perfil</li>
                          <Link to="/login" className="hover:underline mx-3">Sair</Link>
                      </ul>
                  </nav>
              </div>
          </header>
      
      </>
    )
  }
  
  export default Navbar