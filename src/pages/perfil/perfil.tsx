import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Perfil() {
    const navigate = useNavigate();
    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token === "") {
            alert('Você precisa estar logado');
            navigate("/");
        }
    }, [usuario.token])


    return (

        <div className='bg-white flex min-h-[80vh] pt-1'>

            <div className='bg-fuchsia-900 container mx-auto mt-4 rounded-xl overflow-hidden'>
                <img className='w-screen h-72 object-cover border-b-8 bg-white' src="https://ik.imagekit.io/rx2wvtnsm/Dayflow_-_Socializing_2.png" alt="Capa do Perfil" />
                <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-magenta-/-fuchsia-200 relative z-10 bg-white' />
                {/* src={usuario.foto} acrescentar na ft*/}
                <div className="relative mt-[-6rem] h-72 flex flex-col bg- text-white bg-magenta-/-fuchsia-900 text-2xl items-center justify-center">
                    <div className='text-center'>
                        <p className='text-white'>Nome: {usuario.nome} </p>
                        <p className='text-white'>Email: {usuario.usuario}</p>
                    </div>
                </div>
            </div>
        </div>
    )



}

export default Perfil

