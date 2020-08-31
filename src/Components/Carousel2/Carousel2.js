import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
// import './Carousel1.css'
 
const MyCarousel2 = (props) => {
    const [activeSlide, setActiveSlide] = useState(0)
    //console.log(props.albums.images[1].url

    let photos = [{photo: './assets/devMountain.png', link: 'https://devmountain.com/'}, {photo: './assets/github.png', link: 'https://github.com/Most-Basic33'}, {photo: './assets/linkedin.png', link: 'https://www.linkedin.com/in/bishop-walker-3201921b1/'}, {photo: './assets/audio.png', link: 'http://64.227.104.65:3333/Chat'}]

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
                   
                       <a href={item.link}>
                        <img 
                        style={{
                            width: 175,
                            height: 200,
                            textAlign: "center",
                            boxSizing: "border-box",
                            margin:10
                        }} 
                        src={item.photo} 
                        alt='family'/>                        
                       </a>
                      
                       
                    </div>
                ))}  

            </Carousel>
        </div>
    )
}

export default MyCarousel2;
