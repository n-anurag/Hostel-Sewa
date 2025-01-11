import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Partners from '../Partners';
import Footer from '../Footer';
import './ProductDetail.css';
import image1 from '../Store/image1.png';

import esewa from '../Store/esewa.png'; // Replace with actual path

const products = [
  {
    id: 1,
    name: 'Automatic Water Pump',
    price: '5700.00',
    rating: 5,
    description: 'Product description here...',
    image: image1,
  },
  {
    id: 2,
    name: 'C.C Camera',
    price: '20999.00',
    rating: 4,
    description: 'Product description here...',
    image: image1,
  },
  // Add more products as needed
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  if (!product) return <p>Product not found</p>;

  return (
    <>
      <Navbar />
      <div className="product-detail-container">
        <section className="product-detail">
          <h2>Product Detail</h2>
          <div className="product-info">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-description">
              <h3>{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <p>{product.description}</p>
              <ul>
                <li>1-year warranty</li>
                <li>Free installation and delivery</li>
                <li>7-day replacement warranty</li>
                <li>For free installation Contact: Hostel Sewa Pvt. Ltd 9851167133</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="inquiry-form">
          <h2>For Inquiry</h2>
          <form>
            <div className="form-row">
              <input type="text" name="fullName" placeholder="Full Name*" required />
              <input type="text" name="address" placeholder="Address*" required />
            </div>
            <div className="form-row">
              <input type="text" name="mobile" placeholder="Mobile No.*" required />
              <input type="email" name="email" placeholder="Email Address*" required />
            </div>
            <textarea name="description" placeholder="Description" rows="4"></textarea>

            <div className="payment-methods-container">
              <h3>Select Payment Methods</h3>
              <div className="payment-methods">
                <label className={`payment-card ${selectedMethod === 'ime' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="ime"
                    checked={selectedMethod === 'ime'}
                    onChange={handleMethodChange}
                  />
                  <img src={esewa} alt="Global IME Bank" className="payment-logo" />
                  <div className="payment-info">
                    <span className="payment-name">Global IME Bank</span>
                  
                  </div>
                </label>

                <label className={`payment-card ${selectedMethod === 'esewa' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="esewa"
                    checked={selectedMethod === 'esewa'}
                    onChange={handleMethodChange}
                  />
                  <img src={esewa} alt="eSewa" className="payment-logo" />
                  <div className="payment-info">
                    <span className="payment-name">eSewa</span>
               
                  </div>
                </label>
              </div>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
      </div>
      <Partners />
      <Footer />
    </>
  );
};

export default ProductDetail;
