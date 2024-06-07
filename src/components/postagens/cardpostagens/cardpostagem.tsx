import { Link } from "react-router-dom"
import Postagem from "../../../models/postagem"

interface CardPostagemProps {
    post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
    return (
      <div className="flex flex-col w-full rounded-2xl overflow-hidden justify-between">
        <div className="flex flex-col w-full">
          <div className="h-12 flex w-full bg-fuchsia-800 text-white py-2 px-4 items-center gap-4">
            <img src={post.usuario?.foto} className='h-9 rounded-full' alt="" />
            <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
          </div>
          <div className='p-4 w-full bg-slate-200'>
            <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
            <p className="">{post.texto}</p>
            <p>Tema: {post.tema?.descricao}</p>
            <p>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
          </div>
        </div>
        <div className="flex">
        <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-fuchsia-500 hover:bg-green-500 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>
          <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-fuchsia-400 hover:bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    )
  }
  
  export default CardPostagem