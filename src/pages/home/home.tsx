import ListaPostagens from "../../components/postagens/listapostagens/listapostagem";
import ModalPostagem from "../../components/postagens/modalpostagens/modalpostagem";


function Home() {
    return (
        <>

            <div className="bg-fuchsia-700 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                        <h2 className="text-5xl font-bold"> Seja bem vindo! </h2>
                        <p className="text-xl"> Expresse aqui seus poemas e poesias. </p>
                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img src="http://i.imgur.com/VpwApCU.png"
                            alt="Imagem Home" className="w-2/3" />
                    </div>
                </div>
            </div>
            <ListaPostagens />

        </>
    );
}

export default Home;