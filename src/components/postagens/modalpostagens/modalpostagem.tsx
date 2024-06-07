import Popup from "reactjs-popup";
import FormularioPostagem from "../formulariopostagens/formulariopostagem";
import './modalpostagem.css'
import 'reactjs-popup/dist/index.css'

function ModalPostagem() {
    return (
      <>
        <Popup 
        trigger={<button className='rounded px-4 py-2 bg-fuchsia-500 hover:bg-slate-200 font-bold hover:text-fuchsia-800'>Criar nova postagem</button>} modal>
          <div>
            <FormularioPostagem />
          </div>
        </Popup>
      </>
    );
  }
  
  export default ModalPostagem;