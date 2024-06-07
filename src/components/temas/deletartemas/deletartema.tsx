import { useNavigate, useParams } from "react-router-dom"
import Tema from "../../../models/tema"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../services/service"
import { ToastAlerta } from "../../../utils/toastalerta"


function DeletarTema() {

    const [tema, setTema] = useState<Tema>({} as Tema)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token expirou, faça login novamente.', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado.', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/temas")
    }

    async function deletarTema() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta('Tema deletado com sucesso!', 'sucesso')

        } catch (error) {
            ToastAlerta('Erro ao deletar o tema.', 'erro')
        }

        retornar()
    }
  
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar tema</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o tema a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='flex justify-center py-2 px-6 bg-fuchsia-800 text-white font-bold text-2xl'>Tema</header>
      <p className='flex justify-center p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
      <div className="flex">
        <button className='text-slate-100 bg-fuchsia-500 hover:bg-red-600 w-full py-2' onClick={retornar} >Não</button>
        <button className='w-full text-slate-100 bg-fuchsia-400 hover:bg-green-500 flex items-center justify-center' onClick={deletarTema} >
          Sim
        </button>
      </div>
    </div>
    </div>
  )
}

export default DeletarTema