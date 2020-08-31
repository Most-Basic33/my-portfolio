import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
 
import Modal from '../Model/Modal'


 
const MyCarousel2 = (props) => {
    const [activeSlide, setActiveSlide] = useState(0)
    //console.log(props.albums.images[1].url

    let photos = [{photo: './assets/wifey.jpg', link: 'https://devmountain.com/', content:''  }, {photo: './assets/sisters.jpg', link: 'https://github.com/Most-Basic33'}, {photo: './assets/pet.jpg', link: 'https://www.linkedin.com/in/bishop-walker-3201921b1/'}, {photo: './assets/workStation.jpg', link: 'https://drive.google.com/file/d/19bEcKW9Dfr3_vl5ynqV2ZZww3P9yxvXE/view?usp=sharing'}]
 
    return (
        <div id='carry' >
        <h1>About Me</h1>
            <Carousel
                containerProps={{
                    style: {
                        width: '100%',
                        justifyContent: 'space-evenly'
                    }

                }}

                activeSlideIndex={activeSlide}
                activeSlideProps={{
                    style: {
                        background: ''
                    }
                }}
                onRequestChange={setActiveSlide}
                forwardBtnProps={{
                    children: '>',
                    style: {
                        width: 30,
                        height: 30,
                        minWidth: 30,
                        alignSelf: 'center',
                        background: 'black',
                        color: "white"
                    }
                }}
                backwardBtnProps={{
                    children: '<',
                    style: {
                        width: 30,
                        height: 30,
                        minWidth: 30,
                        alignSelf: 'center',
                        background: 'black',
                        color: "white"

                    }
                }}

                itemsToShow={3}
                speed={400}
            >
                {photos.map((item, index) => (
                    <div key={index}>
                   <Modal
                     modalOpen={props.modalOpen}
                setModal={props.setModal}
                modal={props.modal}
                    modalId={()=>{console.log(props.modalId)},  props.modalId}


                        id={item.id}
                        link={item.link}
                        image={item.photo}
                        content={item.content}
                   
                    />
                    
                    </div>  
                ))}  

            </Carousel>
            <div className='bott' >
                <h2>Click On Images to Find Out More</h2>
            </div>
        </div>
    )
}

export default MyCarousel2;
