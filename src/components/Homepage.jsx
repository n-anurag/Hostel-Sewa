import React from 'react'
import Navbar from './Navbar'
import student from '../assets/Student_login.jpeg'
import Photos from './Photos'
import Services_box from './Services_box'
import Hostel_card from './Hostel_card'
import Cover_photo from './Cover_photo'
import Choosing from './Choosing'
import Mission_box from './Mission_box'
import Achievement from '../Achievement'
import FAQ from './FAQ.jsx'
import Post from './Post.jsx'
import Partners from './Partners.jsx'
import Review from './Review.jsx'
import Gallery from './Gallery.jsx'
import Testimonial from './Testimonial'
import Vision_box from './Vision_box.jsx'
import Boxes from './Boxes.jsx'
import './Homepage.css'
import Footer from './Footer'

const Homepage = () => {
  return (
   <>
   <Navbar/>
   <Cover_photo/>

      
      <Photos/>
      
<div className="heading">Featured Hostel</div>
      <Hostel_card/>

      <div className="boxes">
      <div className="box1"><p><h2>Introduction</h2><br/>Hostel Sewa Pvt Ltd is an organization that is helping hostel businesses and students who want to stay in hostels in various ways. From this website you can get information as well as book hostels in major cities of Kathmandu & Lalitpur. The hostels who wants to link with us can also register their hostel from management system. You can also get the name, position and contact number of Nepal Hostel Association Central Working Committee. You can select and purchase the necessary items fo</p></div>
      <div className="box2"><img src={student} alt="" /></div>
      </div>


      <Choosing/>
      <p className='heading'>All about Hostel</p>
      <Boxes/>
      <Services_box/> 
      <Mission_box/>
      <Vision_box/>
   <Achievement/>

   <Gallery/>

<Review/>
<Testimonial/>

<FAQ/>
<Post/>




<Partners/>

      <Footer/>

   </>
  )
}

export default Homepage
