import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import './Model.css'
import ImageHolder from './ImageHolder';

Modal.setAppElement('#root')


const ModalComp = (props) => {

   const [open, setOpen] = useState(false);

    // useEffect(() => {
    //     setOpen(!open)
    // }, [props.id])

    function close() {
        console.log('welllll')
        setOpen(false)//!open
    }

    // console.log(props)
    return (
        <div id='modaled'>
            <ImageHolder  setOpen={setOpen} image={props.image} link={props.link} id={props.id} />
            <Modal
                isOpen={open}
                // isOpen={props.id === props.modalOpen}
                contentLabel='Modaled photos of applications I built'
                 onRequestClose={(e) =>{ close();console.log('hit', e.target)}}
               
                style={{
                    overLay: {
                        backgroundColor: '#ac6291'
                    }
                }}>
               
                <div className='modal'>
                    <button onClick={(e) =>{console.log('hit', e.target); close() }}>X</button>
                    <div className='button-and-image'>
                    <div className='modal-button'>
                    {/* <button onClick={(e)=> props.setModal(-1, e) } >Close</button> */}
                    </div>

                    <div className='modal-image'>
                  
               <a href={props.link}><img id='pic' style={{
                        
                         }}
                        alt='test' 
                       src={props.image}/> </a>
                       
               <p id='wrap' > <b>{props.content}</b></p>
                <button onClick={() => close()}>CLICK ME</button>
                    </div>
                    </div>
                
                </div>

                
                 
            </Modal>
        </div>
    )
                
};



export default ModalComp;

