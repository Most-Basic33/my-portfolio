import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
import './Carousel3.css'
 
import Modal from '../Model/Modal'
import daughter from './daughter.jpg'
import pet from './pet.jpg'
import sister from './sisters.jpg'
import wifey from './wifey.jpg'
import work from './workStation.jpg'

 
const MyCarousel2 = (props) => {
    const [activeSlide, setActiveSlide] = useState(0)
    //console.log(props.albums.images[1].url
     
    let photos = [{id:1, photo: wifey, link: '', content:`My beautiful wife and I have been together for 5 years now. She is from Ukraine and one of my favorite things about her is her accent. She's just so smart and intellegent and beautiful, I'm truely one of the luckest men alive. `  }, {id:2, photo: sister, link: '', content:`My Mother, her Mother, some of her sisters and my daughter. Pittsburgh, Pa's most beautiful women. `}, {id:3, photo: pet, link: '', content:`My two year old 130 pound protector. The women in my life mean more to me then the world, so of course I'd have something to protect them. #protectmyfamily`}, {id:4, photo: work, link: '', content:`This is my favorite place to relax in my house. In front of the computer I feel like I belong. I can think of no better way to support my family then to do something I enjoy doing for free.`},{id:5, photo: daughter, link: '', content:`Speaking of beautiful women in my life, my beautiful wife blessed me with this bundle of joy. Every single day gets better with her, and I'm just so i'm love!`} ]
 
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
                <h4>Click On Image to Find Out More!</h4>
            </div>
            <aside className='info' > 
       
       <span>Born March 1 1981 to a humble family in Arlington Virginia, my mother told me I could be anything I wanted to be when I grew up. </span>
       <p>This turned out to not be true, I could never become superman-I was afraid of heights. I still am to this day. One thing I'm not afraid of is problem solving, I think thats what drew me
       drew me to the industry. I built my first computer when i was 8 or 9, before windows, in fact I remember windows 95 and the 30 installation disk it required. 
       </p>
       <p>Fast Forward to 2015, I had been working in the sales industry-sucessfully I might add- since I had left college when a high school and college friend of mine asked me to help design a website for an idea he had. So I took on the challange and together we hired a company and came up with <a href='https://godigitalvalet.com/admin/'>Digital Valet</a>. The purpose of this application was to digitalize the valet car retrieval process for the Ritz Carlton </p>
       </aside>
        </div>
    )
}

export default MyCarousel2;
