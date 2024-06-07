import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/toastalerta"


function Navbar() {

    const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        ToastAlerta('O usuário foi desconectado com sucesso!', 'info')
        navigate("/")
    }

    useEffect(() => {
        if (usuario.token === "") {
            navigate('/login')
        }
    }, [usuario.token])


    return (
        <>

            <header className="bg-fuchsia-800 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex-start justify-around items-center py-4 px-16">
                        <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>
                    </div>
                    <nav >
                        <ul className="flex flex-row justify-end items-center font-semibold py-4 px-16">
                            <Link to='/postagens' className='hover:underline mx-3'>Postagens</Link>
                            <Link to='/temas' className='hover:underline mx-3'>Temas</Link>
                            <Link to='/cadastroTema' className='hover:underline mx-3'>Cadastrar temas</Link>
                            <Link to='/perfil' className='hover:underline mx-3'>Perfil</Link>
                            <Link to="/login" onClick={logout} className="hover:underline mx-3">Sair</Link>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar