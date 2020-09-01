import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
// import './Carousel1.css'
import Modal from '../Model/Modal' 

const MyCarousel1 = (props) => {
    const [activeSlide, setActiveSlide] = useState(0)
    //console.log(props.albums.images[1].url

    let photos = [{id:1, photo: './assets/sharifyLogin.png', link: 'http://64.227.104.65:3333/', content: 'The technology used to do authentication for this project was BCrypt.JS. I used my Postgres database to store the hash value of the users password for security. The system is set up to login and register users and very importantly to not allow duplicate information. The application is setup with middleware for detecting privillages and allowing for a person with Admin rights to have full C-R-U-D througout the application. Admin users can Add and Delete Properties, Persons, and update details about a house such as price and if it is availble.    '}, {id:2, photo: './assets/chat.png', link: 'http://64.227.104.65:3333/Chat'}, { id:3, photo: './assets/chart.png', link: 'https://github.com/Most-Basic33'}, {id:4, photo: './assets/audio.png', link: 'http://64.227.104.65:3333/Chat'}]

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
