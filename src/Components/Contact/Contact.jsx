
import React, { useState } from 'react';
import './Contact.css';
import contact from '../../assets/contact.svg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const googleFormActionURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe5PMUa5h2-zfKOM8HqtrgvpclKWvBaGUDRCCBLhQbxieI5gA/formResponse";

    
    const formBody = new FormData();
    
    
    formBody.append("entry.1503700567", formData.fullName);   
    formBody.append("entry.1005075674", formData.email);      
    formBody.append("entry.801195198", formData.address);    
    formBody.append("entry.1080430510", formData.message);    


    fetch(googleFormActionURL, {
      method: 'POST',
      body: formBody,
      mode: 'no-cors'  
    })
    .then(() => {
      alert('Form submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        address: '',
        message: '',
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="contactContainer">
      <div className="img">
        <img src={contact} alt="image" />
      </div>
      
      <div className="contact">
        <h1>Contact Me</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter the Name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter the Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter the Address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
