import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import './cadastro.css'
import Usuario from '../../models/usuario'
import { cadastrarUsuario } from '../../services/service';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/toastalerta';

function Cadastro() {

    const navigate = useNavigate();

    const { isLoading } = useContext(AuthContext);

    const [confirmaSenha, setConfirmaSenha] = useState<string>('');

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    });

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar();
        }
    }, [usuario]);

    function retornar() {
        navigate('/login')
    };

    function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value);
        console.log(confirmaSenha)
    };

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        })
    };

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            try {

                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
                ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso')
            } catch (error) {
                ToastAlerta('Erro ao realizar o cadastro.', 'erro')
            }

        } else {
            ToastAlerta('Os dados digitados são inconsistentes.', 'erro');
            setUsuario({ ...usuario, senha: '' })
            setConfirmaSenha('');
        }
    };

    return (

        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold">
                <div className="fundoCadastro hidden lg:block"></div>

                <form className='flex justify-center items-center flex-col w-2/3 gap-3'
                    onSubmit={cadastrarNovoUsuario} >
                    <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="Nome"
                            className="border-2 border-slate-700 rounded p-2" value={usuario.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text" id="usuario" name="usuario" placeholder="Usuario"
                            className="border-2 border-slate-700 rounded p-2" value={usuario.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="foto">Foto</label>
                        <input type="text" id="foto" name="foto" placeholder="Foto"
                            className="border-2 border-slate-700 rounded p-2" value={usuario.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" name="senha" placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2" value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha">Confirmar Senha</label>
                        <input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirmar Senha"
                            className="border-2 border-slate-700 rounded p-2" value={confirmaSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmaSenha(e)} />
                    </div>
                    <div className="flex justify-around w-full gap-8">
                        <button className='rounded text-white bg-fuchsia-700 
                                 hover:bg-red-700 w-1/2 py-2' onClick={retornar}>

                            {isLoading ?

                                <RotatingLines
                                    strokeColor='white'
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                />
                                :
                                <span>Retornar</span>

                            }

                        </button>
                        <button type='submit' className='rounded text-white bg-fuchsia-700 
                                 hover:bg-green-500 w-1/2 py-2 flex justify-center'>

                            {isLoading ?

                                <RotatingLines
                                    strokeColor='white'
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                />
                                :
                                <span>Cadastrar-se</span>

                            }

                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cadastro