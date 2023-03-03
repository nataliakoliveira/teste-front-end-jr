import './popup.css'
import Modal from 'react-modal';
import{useState} from 'react'
import Celular from '../../imgs/cel.png'

Modal.setAppElement('#root')

function PopUp(){
  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal(){
    setIsOpen(true)
  }

  function handleCloseModal(){
    setIsOpen(false)
  }

  const customStyles = {
    content: {
      top:'50%', 
      left: '50%',
      right: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }
  return(
    <div className='container'>
      <button className='button' onClick={handleOpenModal}>
        Comprar
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} style={customStyles}>
      
      <div class="content">
            <div class="image">
                <img src={Celular} alt="celular"/>
            </div>
            <div class="details">
                <span class="close" onClick={handleCloseModal}>X</span>
                <h3>LOREM IPSUM DOLOR SIT AMET</h3>
                <br/>
                <h2>R$ 1.499,90</h2>
                <br/>
                <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
                <br/>
                <p>Veja mais detalhes do produto</p>
            </div>
       </div>
    
        </Modal>
    </div>
  );
}

export default PopUp;