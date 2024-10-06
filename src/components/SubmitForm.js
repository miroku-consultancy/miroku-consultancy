// src/components/SubmitForm.js
import React, { useState } from 'react';
import { init, send } from 'emailjs-com'; // Import EmailJS functions
import './SubmitForm.css'; // Create a CSS file for styles

const SubmitForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        description: ''
    });

    // Initialize EmailJS
    init('YvJ5NmnZ_iL6nOCM3'); // Replace with your EmailJS user ID

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS credentials
        send('service_5pzx9x5', 'template_d09ikm7', formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ name: '', mobile: '', email: '', description: '' }); // Reset form
            })
            .catch((err) => {
                console.error('Failed to send message. Error: ', err);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <div className="submit-form-container">
            <h1>Ask Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Mobile:</label>
                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitForm;
