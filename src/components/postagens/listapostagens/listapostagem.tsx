import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Postagem from "../../../models/postagem";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/service";
import CardPostagem from "../cardpostagens/cardpostagem";
import { MagnifyingGlass } from "react-loader-spinner";


function ListaPostagens() {
    const [postagens, setPostagens] = useState<Postagem[]>([]);
  
    const navigate = useNavigate();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
  
    useEffect(() => {
      if (token === '') {
        alert('Você precisa estar logado.');
        navigate('/');
      }
    }, [token]);
  
    async function buscarPostagens() {
      try {
        await buscar('/postagens', setPostagens, {
          headers: {
            Authorization: token,
          },
        });
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        }
      }
    }
  
    useEffect(() => {
      buscarPostagens();
    }, [postagens.length]);
    return (
      <>
        {postagens.length === 0 && (
          <MagnifyingGlass 
          visible={true}
          height="200"
          width="200"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
          />
        )}
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {postagens.map((postagem) => (
            <CardPostagem key={postagem.id} post={postagem} />
          ))}
        </div>
      </>
    );
  }
  
  export default ListaPostagens;