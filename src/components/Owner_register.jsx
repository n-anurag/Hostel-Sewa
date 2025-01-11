import React from "react";
import "./Owner_register.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RegisterHostel = () => {
  return (
    <>
      <Navbar />
      <form className="register-hostel-form">
        <h2>Register Your Hostel</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" required />
          
          <label>District</label>
          <select required>
            <option value="Central">Central</option>
            {/* Add other district options as needed */}
          </select>

          <label>Address</label>
          <input type="text" placeholder="Address" required />

          <label>Address Detail</label>
          <input type="text" placeholder="Address Detail" required />
        </div>
        
        <div className="form-group">
          <label>Mobile Number</label>
          <input type="tel" placeholder="Mobile Number" required />

          <label>Contact Number</label>
          <input type="tel" placeholder="Contact Number" />

          <label>Fax Number</label>
          <input type="tel" placeholder="Fax Number" required />

          <label>Email</label>
          <input type="email" placeholder="Email" required />
        </div>
        
        <div className="form-group">
          <label>Website</label>
          <input type="url" placeholder="Website" />

          <label>Hostel Type</label>
          <select required>
            <option value="Boys Hostel">Boys Hostel</option>
            {/* Add other hostel types as needed */}
          </select>

          <label>Owner Detail</label>
          <input type="text" placeholder="Owner Detail" />

          <label>Owner Contact Number</label>
          <input type="tel" placeholder="Owner Contact Number" />
        </div>
        
        <div className="form-group">
          <label>Registration Number</label>
          <input type="text" placeholder="Registration Number" />

          <label>PAN Number</label>
          <input type="text" placeholder="PAN Number" />

          <label>Location Name</label>
          <input type="text" placeholder="Location Name" required />

          <label>Minimum Rate</label>
          <input type="number" placeholder="Minimum Rate" step="0.01" required />
        </div>
        
        <div className="form-group">
          <label>Maximum Rate</label>
          <input type="number" placeholder="Maximum Rate" step="0.01" required />

          <div className="file-input">
            <label>Hostel Logo</label>
            <input type="file" />
          </div>

          <div className="file-input">
            <label>Hostel PAN</label>
            <input type="file" />
          </div>

          <div className="file-input">
            <label>Hostel Registration</label>
            <input type="file" />
          </div>
        </div>
        
        <div className="form-group textarea-group">
          <label>Description</label>
          <textarea placeholder="Description" rows="2"></textarea>

          <label>Short Overview</label>
          <textarea placeholder="Short Overview" rows="2"></textarea>

          <label>Hostel Overview</label>
          <textarea placeholder="Hostel Overview" rows="4"></textarea>
        </div>

        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default RegisterHostel;
