import React, { useState } from 'react'
import Modal from 'react-modal'
import './Model.css'
import ImageHolder from './ImageHolder';

Modal.setAppElement('#root')


const ModalComp = (props) => {

     const [open, setOpen] = useState(false);

    return (
        <div >
            <ImageHolder setOpen={setOpen} image={props.image} link={props.link} />
            <Modal
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                style={{
                    overLay: {
                        backgroundColor: '#ac6291'
                    }
                }}>
                <div className='modal'>
                    <button onClick={() => setOpen(false)}>X</button>
                    <img alt='test' src={props.image}/>
                <h4>{props.content}</h4>
                </div>
            </Modal>
        </div>
    )
};



export default ModalComp;

