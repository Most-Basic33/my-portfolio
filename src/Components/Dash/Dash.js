import React, { useState, useEffect } from 'react';
import Carousel from '/Users/bishopwalker/Desktop/DevMountain/my-portfolio/src/Components/Carousel/Carousel.js'
import Carousel1 from '/Users/bishopwalker/Desktop/DevMountain/my-portfolio/src/Components/Carousel1/Carousel1.js'
import Carousel2 from '/Users/bishopwalker/Desktop/DevMountain/my-portfolio/src/Components/Carousel2/Carousel2.js'
import Carousel3 from '../Carousel3/Carousel3'

//import ModalComp from '../Model/Modal'

const Dash = (props) => {
   
    //experimental modal shyt
    const initalState ={
        edit:false,
        modalOpen:false
    }

const [modalOpen, setModalOpen] = useState(0)
const [id, setId] = useState('')
const [edit, setEdit] = useState(initalState)


 
const setModal=(id, e) =>{
e.stopPropagation()
setModalOpen(id)
}
 

 



    function switcher() {
        switch (props.choice) {
            case 3:
                return <Carousel
               modalId={id}
              modal={modalOpen}
                 modalOpen={setModalOpen}
                setModal={setModal}
                ></Carousel>
            case 1:
                return <Carousel1>
                     modalId={id}
              modal={modalOpen}
                 modalOpen={setModalOpen}
                setModal={setModal}
                </Carousel1>
            case 2:
                return <Carousel2>
                     modalId={id}
              modal={modalOpen}
                 modalOpen={setModalOpen}
                setModal={setModal}
                </Carousel2>
               case 0:
                   return <Carousel3>
 modalId={id}
              modal={modalOpen}
                 modalOpen={setModalOpen}
                setModal={setModal}
                   </Carousel3>
        }
    };

    return (
        <div id='dashy'>

            {switcher()}

        </div>
    )
}
export default Dash