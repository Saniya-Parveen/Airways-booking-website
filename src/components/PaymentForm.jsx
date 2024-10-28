import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './PaymentForm.css'


export default function PaymentForm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    zipCode: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Payment submitted:', formData);
    navigate('/confirmation');
  };
  return (
    <div className="payment-page">
    <div className="payment-container">
      <h2>Payment Information</h2>
      
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="payment-form-group">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="payment-form-group">
          <label>Cardholder Name</label>
          <input
            type="text"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-row">
          <div className="payment-form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>

          <div className="payment-form-group">
            <label>CVV</label>
            <input
              type="password"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              required
              maxLength="3"
            />
          </div>
        </div>

        <div className="payment-form-group">
          <label>Billing Address</label>
          <input
            type="text"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            placeholder="123 Main St"
            required
          />
        </div>

        <div className="form-row">
          <div className="payment-form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
          </div>

          <div className="payment-form-group">
            <label>ZIP Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="12345"
              required
            />
          </div>
        </div>

        <div className="payment-form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            required
          />
        </div>

        <div className="form-buttons">
          <button 
            type="button" 
            className="back-button"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button type="submit" className="submit-button">
            Complete Payment
          </button>
        </div>
      </form>
    </div>
  </div>
);
};
  