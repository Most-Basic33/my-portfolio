import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
import './Carousel3.css'
 
import Modal from '../Model/Modal'


 
const MyCarousel2 = (props) => {
    const [activeSlide, setActiveSlide] = useState(0)
    //console.log(props.albums.images[1].url

    let photos = [{photo: './assets/wifey.jpg', link: 'https://devmountain.com/', content:''  }, {photo: './assets/sisters.jpg', link: 'https://github.com/Most-Basic33'}, {photo: './assets/pet.jpg', link: 'https://www.linkedin.com/in/bishop-walker-3201921b1/'}, {photo: './assets/workStation.jpg', link: 'https://drive.google.com/file/d/19bEcKW9Dfr3_vl5ynqV2ZZww3P9yxvXE/view?usp=sharing'}]
 
    return (
        <div id='carry' >
        <h1>About Me</h1>
        <aside className='info' > 
       
        <span>Born March 1 1981 to a humble family in Arlington Virginia, my mother told me I could be anything I wanted to be when I grew up. </span>
        <p>This turned out to not be true, I could never become superman-I was afraid of heights, I still am to this day. One thing I'm not afraid of is problem solving, I think thats what drew me
        drew me to the industry. I built my first computer when i was 8 or 9, before windows, in fact I remember windows and the 30 installation disk it required.
        </p>
        <p>Fast Forward to 2015, I had been working in the sales industry-sucessfully I might add- since I had left college when a high school and college friend of mine asked me to help design a website for an idea he had. So I took on the challange and together we hired a company and came up with <a href='https://godigitalvalet.com/admin/'>Digital Valet</a>. The purpose of this application was to digitalize the valet car retrieval process for the Ritz Carlton </p>
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
