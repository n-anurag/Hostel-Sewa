import {React,useState} from 'react'
import Navbar from '../Navbar'
import './About.css'
import student from '../About US/Student_login.jpeg'
import Team_grid from '../NeHa/Team_grid'
import Team_card from '../NeHa/Team_card'
import Choosing from '../Choosing'

import image1 from '../Hostel Page/images/image1.png'
import image2 from '../Hostel Page/images/hostelpage_cover.jpeg'
import TeamGrid from '../NeHa/Team_grid'
import Testimonial from '../Testimonial'
import Partners from '../Partners'
import Footer from '../Footer';
import Certificate from '../Certificate'

const images = [image1, image2, image2];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };



   

  return (
   <>
   <Navbar/>
   <div className="slider-container">
            <img src={images[currentIndex]} alt="Hostel" className="slider-image" />
            <button className="left-arrow" onClick={goToPrevious}>&#10094;</button>
            <button className="right-arrow" onClick={goToNext}>&#10095;</button>
           
        
        </div>

        
      <div className="boxes">
      <div className="box1"><p><h2>Introduction</h2><br/>Hostel Sewa Pvt Ltd is an organization that is helping hostel businesses and students who want to stay in hostels in various ways. From this website you can get information as well as book hostels in major cities of Kathmandu & Lalitpur. The hostels who wants to link with us can also register their hostel from management system. You can also get the name, position and contact number of Nepal Hostel Association Central Working Committee. You can select and purchase the necessary items fo</p></div>
      <div className="box2"><img src={student} alt="" /></div>
      </div>

<Team_card/>
<Team_grid/>
<div className="gap"></div>
   <Choosing/>


   <Certificate/>
   <Testimonial/>
   <div className="gap"></div>
   <Partners/>
   <Footer/>
  
   </>
  )
}


export default About
