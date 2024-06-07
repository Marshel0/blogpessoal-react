import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/tema';
import { buscar } from '../../../services/service';
import { MagnifyingGlass } from 'react-loader-spinner';
import CardTemas from '../cardtemas/cardtema';
import { ToastAlerta } from '../../../utils/toastalerta';


function ListaTemas() {
    const [temas, setTemas] = useState<Tema[]>([]);

    let navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token expirou, faça login novamente.', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        buscarTemas();
    }, [temas.length]);

    return (
        <>
            {temas.length === 0 && (
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
            <div className="flex justify-around w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {temas.map((tema) => (
                            <>
                                <CardTemas key={tema.id} tema={tema} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaTemas;