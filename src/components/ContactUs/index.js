import React, { useState } from 'react';
import './SubmissionForm.css'; // Import your CSS file
import axios from 'axios';
// import hand from '../../images/image-removebg-preview.svg'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '', // Message field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to backend
      const response = await axios.post('http://localhost:5000/submit-form', formData);

      // Handle successful submission
      console.log('Form submitted successfully:', response.data);

      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '', // Reset message field
      });
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="body-container">
      <div className="container">
        <img src= 'src/images/image-removebg-preview.svg' alt="Handse" />
      </div>
      <div className="submission-form-container">
        <h2>Submission Form</h2>
        <form onSubmit={handleSubmit} className="submission-form">
          <div className="form-field">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message*</label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
