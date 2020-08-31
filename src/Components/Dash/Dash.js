import React, { useState, useEffect } from 'react';
import Carousel from '/Users/bishopwalker/Desktop/DevMountain/my-portfolio/src/Components/Carousel/Carousel.js'
import Carousel1 from '/Users/bishopwalker/Desktop/DevMountain/my-portfolio/src/Components/Carousel1/Carousel1.js'
import Carousel2 from '/Users/bishopwalker/Desktop/DevMountain/my-portfolio/src/Components/Carousel2/Carousel2.js'

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


const editMode=(id)=>{
setEdit(!edit)
setId(id)
}

const setModal=(id, e) =>{
e.stopPropagation()
setModalOpen(id)
}
 // const [modalOpen, setModalOpen] = useState(false)
  // const[id,setId] = useState(-1)
     

 



    function switcher() {
        switch (props.choice) {
            case 0:
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
        }
    };

    return (
        <div id='dashy'>

            {switcher()}

        </div>
    )
}
export default Dash