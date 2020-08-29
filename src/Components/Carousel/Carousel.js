import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
import Modal from '../Model/Modal';
import './Carousel.css'

const MyCarousel = (props) => {
    const [activeSlide, setActiveSlide] = useState(0)
    //console.log(props.albums.images[1].url

    let photos = [{ photo: './assets/bangkok.jpg', link: 'https://github.com/Most-Basic33' , content: 'Here I used Socket.io to build a functioning chat room where users can engage each other in conversation or share music that they themselves created'}, 
    { photo: './assets/keywest.jpg', link: 'https://github.com/Most-Basic33', content:'Here I used hashing to ensure that the client has a secure connect with a safe hashed password. Using Node.Js with Express I was able to validate a user and retrieve their pertinate information '}, 
    { photo: './assets/bishopPhoto.jpg', link: 'https://github.com/Most-Basic33', content:'Being one of the most beautiful people in the world Bishop has focused on sharing his beauty with humanity as a gesture of his infinate passion and humilatity' }, 
    { photo: './assets/wifey.jpg', link: 'https://github.com/Most-Basic33', content: `Being from Russia this beautiful snow bunny enjoys cold slopes and clear vodak, just don't ask her to spit!` }]

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
                    <div key={index} >
                        <Modal
                        link={item.link}
                        image={item.photo}
                        content={item.content}
                        />
                    </div>
                ))}

            </Carousel>
        </div>
    )
}

export default MyCarousel;
