// BlogDetail.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './BlogDetail.css';
import Blog_comment from './components/Blogs/Blog_comment'
import mainImage from './assets/photo1.png';
import Partners from './components/Partners'
import Footer from './components/Footer'
import Navbar from './components/Navbar';

const blogData = [
  {
    id: 1,
    title: "Nepal Hostel Association 6th Meet",
    date: "April 1, 2024",
    content: "नेपाल होस्टल एसोसिएसन केन्द्रीय कार्य समितिको छैठौं अधिवेशन तथा १२औं वार्षिकोत्सब सम्पन्न भएको छ । एसोसिएसनका केन्द्रीय अध्यक्ष अरुण पराजुलीको सभापतित्व र राष्ट्रिय परिक्षा बोर्डका अध्यक्ष डा. महाश्रम शर्माको प्रमुख आतिथ्यमा यही बैशाख १८ गते मंगलबार सम्पन्न अधिवेशनले सुनिता लाकौलको अध्यक्षतामा नयाँ कार्यसमितिको निर्वाचन सम्पन्न गरेको छ। नवनिर्वाचित कार्यसमितिको वरिष्ठ उपाध्यक्षमा नरेन्द्र बहादुर बोहरा र महिला उपाध्यक्षमा जया पौडेल चयन भएका छन् । त्यस्तै , महासचिवमा प्रकाश पौडेल , सचिवमा राजु भुजेल र कोषाध्यक्षमा मिना पंगेनी निर्वाचित हुँदा सदस्यमा राम प्रसाद पाण्डे , राज गुप्ता , सोविता पण्डित , मनिष कुमार शाही , रन्जु घिमिरे , अक्ष कुमार शाही चयन भएका छन् । सबै पदाधिकारी सर्वसम्मत चयन भएका हुन। कार्यक्रमका प्रमुख अतिथि राष्ट्रिय परिक्षा बोर्डका अध्यक्ष डा. महाश्रम शर्माले होस्टल संचालन गर्नु व्यावसायिक काम मात्रै नभएर विद्यार्थीको अभिभावकत्व लिनुपर्ने संवेदनशील काम भएकोले संचालन मापदण्ड र गुणस्तर कायम गर्नमा विशेष ध्यान दिनुपर्ने बताए। डा. शर्माले नेपालमा कतिपय सामुदायिक विद्यालयले पनि अब्बल शिक्षा दिइरहेका बताउँदै सबै सामुदायिक विद्यालयको गुणस्तर सुधार गर्नुपर्नेमा जोड दिए। सो कार्यक्रममा शिक्षा विभागका विभागीय प्रमुख गोविन्द प्रसाद शर्मा, राष्ट्रिय तथ्याङ्क कार्यालयका निर्देशक राजेश धिताल, पूर्व प्रमुख निर्वाचन आयुक्त केशव राज शर्मा, प्रेस युनियनका महासचिव दिलिप पौडेल , नेपाल प्रहरीका सिंहदरबार वृत्तका प्रमुख प्रहरी उपरीक्षक चक्र बहादुर शाह , नेपाल होस्टल एसोसिएसनका काठमाडौं जिल्ला अध्यक्ष गोविन्द श्रेष्ठ , एसोसिएसनका विभिन्न जिल्ला कार्यसमिति अध्यक्ष तथा प्रतिनिधि , संस्थापक अध्यक्ष किरण राजभण्डारी लगायतको उपस्थिति रहेको थियो ।",
    image: mainImage,
    previousId: null,
    nextId: 2,
  },
  {
    id: 2,
    title: "Hostel Monitor By Sub-metro Itahari",
    date: "March 27, 2024",
    content: "Full content for hostel monitoring...",
    image: mainImage,
    previousId: 1,
    nextId: 3,
  },
  {
    id: 3,
    title: "Better Hostel Management By Kathmandu Metro",
    date: "March 20, 2024",
    content: "Full content for better hostel management...",
    image: mainImage,
    previousId: 2,
    nextId: null,
  },
];

const BlogDetail = () => {
  const { blogId } = useParams();
  const currentBlog = blogData.find((blog) => blog.id === parseInt(blogId));

  if (!currentBlog) {
    return <p>Blog not found</p>;
  }

  return (
    <>
    <Navbar/>
    <div className="blog-detail">
      <h2 className="blog-detail-title">{currentBlog.title}</h2>
      <img src={currentBlog.image} alt={currentBlog.title} className="blog-detail-image" />
      <p className="blog-detail-date">{currentBlog.date}</p>
      <p className="blog-detail-content">{currentBlog.content}</p>

      <div className="blog-navigation">
        {currentBlog.previousId && (
          <Link to={`/blogs/${currentBlog.previousId}`} className="nav-link prev-link">
            &larr; Previous Blog
          </Link>
        )}
        {currentBlog.nextId && (
          <Link to={`/blogs/${currentBlog.nextId}`} className="nav-link next-link">
            Next Blog &rarr;
          </Link>
        )}
      </div>
    </div>
    <Blog_comment/>
    <Partners/>
    <Footer/>
    </>
  );
};

export default BlogDetail;
