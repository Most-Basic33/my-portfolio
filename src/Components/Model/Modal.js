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
                    <button onClick={(e) =>{console.log('hit', e.target); close() }}>X</button>
                    <img style={{
                        width: 150,
                        border:5,
                         height: 150}}
                        alt='test' 
                        src={props.image}/>
                <h4>{props.content}</h4>
                <div onClick={close} > 
                <button onClick={(e) =>{console.log('hit', e.target); close() }}>X</button>
                </div>

                
                </div>
            </Modal>
        </div>
    )
                
};



export default ModalComp;

