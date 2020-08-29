import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
import './Carousel.css'


const MyCarousel = (props) => {
    const [activeSlide, setActiveSlide] = useState(0)
    //console.log(props.albums.images[1].url)



    let photos = ['./assets/bangkok.jpg', './assets/keywest.jpg', './assets/bishopPhoto.jpg', './assets/wifey.jpg']

    // let mappedPhotos = photos.map((pic, index) => {
    //     //  console.log(pic)
    //     return <img className='mapped' style={{ display: "flex", justifyContent: "center", height: "250px", width: "250px", marginLeft: '15px' }} src={pic} alt='family' />
    // })



    //console.log(mapped)
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
                        <img style={{
                            width: 175,
                            height: 200,
                            textAlign: "center",
                            boxSizing: "border-box",
                            margin:10
                        }} src={item} alt='family'/>                        
                    </div>
                ))}  

            </Carousel>
        </div>
    )
}

export default MyCarousel;
