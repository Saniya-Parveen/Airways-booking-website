import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './FlightResults.css'





export default function FlightResults() {

    const location = useLocation();
    const navigate = useNavigate();
    const { searchData, tripType } = location.state || {};
    const dummyFlights = [
        {
            id: 1,
            airline: 'SkyWays',
            flightNumber: 'SW123',
            departure: 'JFK',
            arrival: 'LHR',
            departureTime: '08:00',
            arrivalTime: '20:00',
            duration: '7h',
            price: 549,
            stops: 1
        },
        {
            id: 2,
            airline: 'GlobalAir',
            flightNumber: 'GA456',
            departure: 'JFK',
            arrival: 'LHR',
            departureTime: '11:30',
            arrivalTime: '23:30',
            duration: '7h',
            price: 489,
            stops: 0
        }
    ];

    const handleSelectFlight = (flight) => {
        navigate('/passenger-information', {
            state: {
                selectedFlight: flight,
                searchData,
                tripType
            }
        });
    };
  return (
    <div className='page-container'>
        <div className="results-conatiner">
            <div className="results-header">
                <h2>Flight Results</h2>
                <div className="search-summary">
                    {searchData?.from} - {searchData?.to}
                    <span className='text-gray-500 ml-2'>
                        {searchData?.departDate}
                        {tripType === 'return' && `- ${searchData?.returnDate}`}
                    </span> 
                </div>
                <button className='modify-search'
                    onClick={() => navigate('/')}>
                    Modify Search
                </button>

            </div>

            <div className='flight-list'>
                {dummyFlights.map(flight => (
                    <div key={flight.id} className='flight-card'>
                        <div className='flight-info'>
                            <div className='airline-info'>
                                <div className='airline-name'>{flight.airline}</div>
                                <div className='flight-number'>Flight {flight.flightNumber}</div>
                            </div>

                            <div className='flight-schedule'>
                                <div className='departure'>
                                    <div className='time'>{flight.departureTime}</div>
                                    <div className='airport'>{flight.departure}</div>
                                </div>

                                <div className='flight-duration'>
                                    <div className='duration'>{flight.duration}</div>
                                    <div className='stops'>
                                        {flight.stops === 0 ? 'Direct' : `${flight.stops} stop`}
                                    </div>
                                </div>

                                <div className='arrival'>
                                    <div className='time'>${flight.arrivalTime}</div>
                                    <div className='airport'>{flight.arrival}</div>
                                </div>
                            </div>

                            <div className="price-section">
                                <div className="price">${flight.price}</div>
                                <button className="select-button" onClick={() => handleSelectFlight(flight)}>Select</button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
