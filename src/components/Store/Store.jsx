import React from 'react';
import { useNavigate } from 'react-router-dom';
import student from '../Store/image.jpeg';
import Navbar from '../Navbar';
import Partners from '../Partners';
import Footer from '../Footer';
import './Store.css';
import image1 from '../Store/image1.png';

const products = [
  { id: 1, name: 'Automatic Water Pump', price: '5700.00', rating: 5, image: image1 },
  { id: 2, name: 'C.C Camera', price: '20999.00', rating: 4, image: image1 },
  { id: 3, name: 'Automatic Water Pump', price: '5700.00', rating: 4, image: image1 },
  { id: 4, name: 'Automatic Water Pump', price: '5700.00', rating: 4, image: image1 },
  { id: 5, name: 'Automatic Water Pump', price: '5700.00', rating: 5, image: image1 },
  { id: 6, name: 'C.C Camera', price: '20999.00', rating: 4, image: image1 },
  { id: 7, name: 'Automatic Water Pump', price: '5700.00', rating: 4, image: image1 },
  { id: 8, name: 'Automatic Water Pump', price: '5700.00', rating: 4, image: image1 },
];

const Store = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="cover-container">
        <img className="cover-image" src={student} alt="Student Login" />
        <div className="overlay_cover">
          <p className="welcome-text">Our Store</p>
        </div>
      </div>
      <div className="product-grid-container">
        <p className="heading-titles">Products</p>
        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.name} className="product-image" />
            
                <div className="product-rating">
                  {'★'.repeat(product.rating)}
                  {'☆'.repeat(5 - product.rating)}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">₹{product.price}</p>
              </div>
          
          ))}
        </div>
      </div>
      <Partners />
      <Footer />
    </>
  );
};

export default Store;
