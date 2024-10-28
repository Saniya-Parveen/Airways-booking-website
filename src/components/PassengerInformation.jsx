import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PassengerInformation.css'

export default function PassengerInformation() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        passportNumber: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/payment');
    }
  return (
    <div className='passenger-page'>
        <div className='passenger-container'>
            <h2>Passenger Details</h2>

            <form onSubmit={handleSubmit} className='passenger-form'>
               <div className='passenger-form-group'>
                    <label>First Name</label>
                    <input type='text' name='firstName' value={FormData.firstName}
                    onChange={handleChange}
                    placeholder='Enter first name' required />
                </div> 
                <div className='passenger-form-group'>
                <label>Last Name</label>
                    <input type='text' name='lastName' value={FormData.lastName}
                    onChange={handleChange}
                    placeholder='Enter last name' required />
                </div>
                <div className='passenger-form-group'>
                    <label>Email</label>
                    <input type='email' name='email' value={FormData.email}
                    onChange={handleChange}
                    placeholder='Enter email' required />
                </div>

                <div className='passenger-form-group'>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' value={FormData.phone}
                    onChange={handleChange}
                    placeholder='Enter phone number' required />
                </div>

                <div className="passenger-form-group">
                    <label>Passport Number</label>
                    <input type="text" name="passportNumber" value={formData.passportNumber}
                    onChange={handleChange}
                    placeholder="Enter passport number" required />
                </div>
                <div className="form-buttons">
                    <button type="button" className="back-button" onClick={() => navigate(-1)}>
                     Back
                    </button>
                    <button type="submit" className="submit-button">
                    Continue to Payment
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
