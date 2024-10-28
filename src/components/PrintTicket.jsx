import React from 'react'
import { useNavigate } from 'react-router-dom';
import './PrintTicket.css'




export default function PrintTicket() {
    const navigate = useNavigate();
  
  
  const ticketData = {
    flightNumber: "SW123",
    passenger: {
      name: "Saniya Parveen",
      email: "Saniya@example.com"
    },
    flight: {
      from: "New York (JFK)",
      to: "London (LHR)",
      date: "October 30, 2024",
      departure: "10:30 AM",
      arrival: "10:45 PM",
      gate: "B12"
    },
    bookingReference: "BOOK" + Math.random().toString(36).substr(2, 6).toUpperCase()
  };


  return (
    <div className="ticket-page">
    <div className="ticket-container">
      <div className="ticket-header">
        <h2>Booking Confirmed!</h2>
        <p className="booking-reference">Booking Reference: {ticketData.bookingReference}</p>
      </div>

      <div className="ticket">
        <div className="ticket-airline">
          <h3>Skyway</h3>
          <p>Flight {ticketData.flightNumber}</p>
        </div>

        <div className="ticket-flight-details">
          <div className="flight-cities">
            <div className="departure">
              <h4>{ticketData.flight.from}</h4>
              <p>{ticketData.flight.departure}</p>
            </div>
            <div className="flight-arrow">→</div>
            <div className="arrival">
              <h4>{ticketData.flight.to}</h4>
              <p>{ticketData.flight.arrival}</p>
            </div>
          </div>
          <div className="flight-date">
            <p>Date: {ticketData.flight.date}</p>
            <p>Gate: {ticketData.flight.gate}</p>
          </div>
        </div>

        <div className="passenger-details">
          <h4>Passenger Information</h4>
          <p>Name: {ticketData.passenger.name}</p>
          <p>Email: {ticketData.passenger.email}</p>
        </div>

        <div className="ticket-footer">
          <p>Please arrive at the airport at least 2 hours before departure</p>
          <p>Show this ticket and valid ID at check-in</p>
        </div>
      </div>

      <div className="ticket-actions">
        <button className="print-button" onClick={() => window.print()}>
          Print Ticket
        </button>
        <button className="home-button" onClick={() => navigate('/')}>
          Return to Home
        </button>
      </div>
    </div>
  </div>
  )
}
