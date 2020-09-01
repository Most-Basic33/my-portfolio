import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
// import './Carousel1.css'
import Text from '../Text/Text2'

import Modal from '../Model/Modal'
import dev from './devMountain.png'
import github from './github.png'
import linkedin from './linkedin.png'
import resume from './resume.png'

 
const MyCarousel2 = (props) => {
    const [activeSlide, setActiveSlide] = useState(0)
    //console.log(props.albums.images[1].url

    let photos = [{id:1, photo: dev, link: 'https://devmountain.com/', content: Text[0]}, {id:2, photo: github, link: 'https://github.com/Most-Basic33', content: Text[1]}, {id:3, photo: linkedin, link: 'https://www.linkedin.com/in/bishop-walker-3201921b1/', content: Text[2]}, {id:4, photo: resume, link: 'https://drive.google.com/file/d/19bEcKW9Dfr3_vl5ynqV2ZZww3P9yxvXE/view?usp=sharing', content: Text[3]}]
 
    return (
        <div id='carry' >
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
                <h2>Click On Images to Find Out More!</h2>
            </div>
        </div>
    )
}

export default MyCarousel2;
