import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
// import './Carousel1.css'
import Modal from '../Model/Modal' 
import sharify from './sharifyLogin.png'
import audio from './audio.png'
import chart from './chart.png'
import chat from './chat.png'
import Text from '../Text/Text1'
const MyCarousel1 = (props) => {
    const [activeSlide, setActiveSlide] = useState(0)
    //console.log(props.albums.images[1].url
 
    let photos = [{id:1, photo: sharify, link: 'http://64.227.104.65:3333/', content:Text[0]}, {id:2, photo: chat, link: 'http://64.227.104.65:3333/Chat', content: Text[1]}, { id:3, photo: chart, link: 'https://github.com/Most-Basic33', content: Text[2]}, {id:4, photo: audio, link: 'http://64.227.104.65:3333/Chat', content: Text[3]}]

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
                modalId={props.modalId}


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

export default MyCarousel1;
