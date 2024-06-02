import { Link } from 'react-router-dom'
import Tema from '../../../models/tema'

interface CardTemaProps {
    tema: Tema
  }

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='flex flex-col rounded-2xl overflow-hidden justify-around border-gray-950'>
      <header className='flex justify-center py-2 px-6 bg-fuchsia-800 text-white font-bold text-2xl '>Tema</header>
      <p className='flex justify-center p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 bg-fuchsia-500 hover:bg-green-500 flex items-center justify-center py-2'>
          <button className=''>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-slate-100 bg-fuchsia-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button className=''>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas