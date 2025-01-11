import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import './Blogs_home.css';
import student from './images/image1.jpeg';
import image2 from './images/image2.png';
import Partners from '../Partners';
import Footer from '../Footer';

const Blogs_home = () => {
  const blogs = [
    {
      id: 1,
      category: "Online Khabar",
      title: "Hostel Monitor By Sub-metro Itahari",
      date: "March 27, 2024",
      image: image2,
    },
    {
      id: 2,
      category: "HarmoMart",
      title: "Better Hostel Management By Kathmandu Metro",
      date: "March 20, 2024",
      image: image2,
    },
    {
      id: 3,
      category: "Bhojindra Shrestha",
      title: "11th Anniversary Celebration",
      date: "March 15, 2024",
      image: image2,
    },
    {
      id: 4,
      category: "Bhojindra Shrestha",
      title: "11th Anniversary Celebration",
      date: "March 15, 2024",
      image: image2,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />

      <motion.div
        className="blog-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.section className="blog-title" variants={cardVariants}>
          Blogs
        </motion.section>

        {/* Main Blog Card */}
        <motion.div
  className="main-blog-card"
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  }}
  variants={cardVariants}
>
  {/* <Link to={`/blogs/1`}> */}
    <img src={student} alt="Main Blog" className="main-blog-image" />
    <div className="main-blog-content">
      <span className="blog-category">Hostel Sewa</span>
      <h3 className="blog-main-title">Nepal Hostel Association 6th Meet</h3>
      <p className="blog-date">April 1, 2024</p>
      <p className="blog-description">
        Lorem ipsum dolor sit amet consectetur. Elt ultrices habitant metus vitae risus.
        Ipsum velit nunc tempor id penatibus in. Nec cras porttitor tempor lorem porttitor
        ornare sit fermentum suspendisse.
      </p>
    </div>
  {/* </Link> */}
</motion.div>


        <motion.div className="small-blog-grid" variants={containerVariants}>
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="small-blog-card"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 },
              }}
              variants={cardVariants}
            >
              <Link to={`/blogs/${blog.id}`}>
              
                <img src={blog.image} alt={blog.title} className="small-blog-image" />
                <div className="small-blog-content">
                  <span className="blog-category">{blog.category}</span>
                  <p className="blog-date">{blog.date}</p>
                  <h4 className="blog-title">{blog.title}</h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Partners />
      <Footer />
    </>
  );
};

export default Blogs_home;
