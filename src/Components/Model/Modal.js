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
        setOpen(!open)
    }

    // console.log(props)
    return (
        <div >
            <ImageHolder  setOpen={setOpen} image={props.image} link={props.link} id={props.id} />
            <Modal
                isOpen={open}
                // isOpen={props.id === props.modalOpen}
                onRequestClose={(e) =>{ close();console.log('hit', e.target)}}
                onRequestClose={()=> props.setModal(0)}
                style={{
                    overLay: {
                        backgroundColor: '#ac6291'
                    }
                }}>
               
                <div className='modal'>
                    <div className='button-and-image'>
                    <div className='modal-button'>
                    <button onClick={(e) =>{console.log('hit', e.target); close() }}>X</button>
                    {/* <button onClick={(e)=> props.setModal(-1, e) } >Close</button> */}
                    </div>

                    <div className='modal-image'>
                  
               <a href={props.link}><img style={{
                        width: 500,
                        border:5,
                         height: 500}}
                        alt='test' 
                       src={props.image}/> </a>
                       
                    </div>
                    </div>
                <h4>{props.content}</h4>
                {/* <button onClick={(e)=> props.setModal(-1, e) } >Close</button> */}
                <button onClick={() => close()}>CLICK ME</button>
                </div>

                
                 
            </Modal>
        </div>
    )
                
};



export default ModalComp;

