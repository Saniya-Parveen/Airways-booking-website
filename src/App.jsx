import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import FlightBookingForm from './components/FlightBookingForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FlightResults from './components/FlightResults'
import PassengerInformation from './components/PassengerInformation'
import PaymentForm from './components/PaymentForm'
import PrintTicket from './components/PrintTicket'


const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <FlightBookingForm />
    </>
  );
};


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/flight-results" element={<FlightResults />} />
      <Route path="/passenger-information" element={<PassengerInformation />} />
      <Route path="/payment" element={<PaymentForm />} />
      <Route path="/confirmation" element={<PrintTicket />} />
    </Routes>
  </Router>
);
};

export default App
