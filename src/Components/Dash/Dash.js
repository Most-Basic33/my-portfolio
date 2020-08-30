import React, { useState, useEffect } from 'react';
import Carousel from '/Users/bishopwalker/Desktop/DevMountain/my-portfolio/src/Components/Carousel/Carousel.js'
import Carousel1 from '/Users/bishopwalker/Desktop/DevMountain/my-portfolio/src/Components/Carousel1/Carousel1.js'
import Carousel2 from '/Users/bishopwalker/Desktop/DevMountain/my-portfolio/src/Components/Carousel2/Carousel2.js'

import ModalComp from '../Model/Modal'

const Dash = (props) => {
   
    //experimental modal shyt
    
  const [modalOpen, setModalOpen] = useState(false)
   const[id,setId] = useState(-1)
     
// const setModal =(id, e) =>{
// e.stopPropagation()
// setModalOpen()
// }
 



    function switcher() {
        switch (props.choice) {
            case 0:
                return <Carousel
               modalId={id}
                // modal={modalOpen}
                // modalOpen={setModalOpen}
                // setModal={setModal}
                ></Carousel>
            case 1:
                return <Carousel1></Carousel1>
            case 2:
                return <Carousel2></Carousel2>
        }
    };

    return (
        <div id='dashy'>

            {switcher()}

        </div>
    )
}
export default Dash