import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
import Modal from '../Model/Modal';
import './Carousel.css'
import dash from './dash.png'
import home from './homeCasino.png'
import homeLogin from './homeLogin.png'
import homeMap from './homeMaps.png'


const MyCarousel = (props) => {

    const [activeSlide, setActiveSlide] = useState(0)
    //console.log(props.albums.images[1].url


    //test

    //test above 


    let photos = [{ id: 1, photo: homeLogin, link: 'https://github.com/Most-Basic33', content: 'Here I used Socket.io to build a functioning chat room where users can engage each other in conversation or share music that they themselves created' },
    { id: 2, photo: homeMap, link: 'https://github.com/Most-Basic33', content: 'Here I used hashing to ensure that the client has a secure connect with a safe hashed password. Using Node.Js with Express I was able to validate a user and retrieve their pertinate information ' },
    { id: 3, photo: home, link: 'https://github.com/Most-Basic33', content: 'Being one of the most beautiful people in the world Bishop has focused on sharing his beauty with humanity as a gesture of his infinate passion and humilatity' },
    { id: 4, photo: dash, link: 'https://github.com/Most-Basic33', content: `Being from Russia this beautiful snow bunny enjoys cold slopes and clear vodak, just don't ask her to spit!` }]

    return (
        <div id='carry' >
            <aside className='info'>


                <p>
                    Homefinder was conceived of as a personal project because who doesn't look for a house at some point or another?  I combined several commonly used technologies to build this project. You can Click on the photo's in the carousel to see more about the particular image.
        </p>
                <span><b><h2>Tecnologies Used:</h2></b></span>
                <ul>
                    <li>Chart.Js</li>
                    <li>Authentication/Bcrypt</li>
                    <li>Google Maps Api</li>
                    <li>AWS</li>
                    <li>PostGres SQL</li>
                    <li>Node.Js</li>
                    <li>React-Redux</li>
                    <li>SendGrid/Email</li>
                    <li>Express-Session</li>
                    <li>React-Router</li>
                </ul>
            </aside>
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
                    <div key={index} onClick={(e) => props.setModal(item.id, e)}  >

                        <Modal
                            //experimental
                            modalOpen={props.modalOpen}
                            setModal={props.setModal}
                            modal={props.modal}
                            modalId={props.modalId}
                            //                 editMode={editMode}
                            // modalOpen={modalOpen}
                            // setModal={setModal}
                            // index={index}

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

export default MyCarousel;
