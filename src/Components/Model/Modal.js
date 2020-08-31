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

    console.log(props.id)
    return (
        <div >
            <ImageHolder  setOpen={setOpen} image={props.image} link={props.link} id={props.id} />
            <Modal
                isOpen={open}
                onRequestClose={(e) =>{ close();console.log('hit', e.target)}}
                style={{
                    overLay: {
                        backgroundColor: '#ac6291'
                    }
                }}>
               
                <div className='modal'>
                    <div className='button-and-image'>
                    <div className='modal-button'>
                    <button onClick={(e) =>{console.log('hit', e.target); close() }}>X</button>
                    </div>

                    <div className='modal-image'>
                    <img style={{
                        width: 150,
                        border:5,
                         height: 150}}
                        alt='test' 
                        src={props.image}/>
                    </div>
                    </div>
                <h4>{props.content}</h4>
                <div onClick={close} > 
                <button onClick={() => close()}>CLICK ME</button>
                </div>

                
                </div>
            </Modal>
        </div>
    )
                
};



export default ModalComp;

