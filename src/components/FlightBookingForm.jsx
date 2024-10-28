import React, { useState } from 'react'
import { Plane, Calendar, MapIcon, MapPin, ChevronDown, PlusCircle,} from 'lucide-react'
import './FlightBookingForm.css'
import { useNavigate } from 'react-router-dom';


//Dummy data
const airports = [
    {code: 'JFK', name: 'New York JFK'},
    {code: 'LHR', name: 'London Heathrow'},
    {code: 'CDG', name: 'Paris Charles de Gaulle'},
    {code: 'DXB', name: 'Dubai International'},
    {code: 'ARN', name: 'Stockholm'}

];






export default function FlightBookingForm() {

    const navigate = useNavigate();
    const [tripType, setTripType] = useState('return');
    const [formData, setFormData] = useState({
      from: '',
      to: '',
      departDate: '23 Oct 2024',
      returnDate: '30 Oct 2024',
      passengers: 1,
      class: 'Economy'
    });
    
    const [showAirportList, setShowAirportList] = useState({ from: false, to: false });
  
    const handleTripTypeChange = (newtype) => {
      setTripType(newtype);
      
      if (newtype === 'oneway') {
        setFormData(prev => ({ ...prev, returnDate: '' }));
      }else if (newtype === 'return') {
        setFormData(prev => ({ ...prev, returnDate: '30 Oct 2024'}))
      }
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      navigate('/flight-results', {
        state: {
            searchData: formData,
            tripType: tripType
        }
      });
    };
  
    const handleAirportSelect = (type, airport) => {
      setFormData(prev => ({ ...prev, [type]: airport.code }));
      setShowAirportList({ ...showAirportList, [type]: false });
    };
  return (
    <div className='booking-container'>
        <nav className='booking-nav'>
            <div className='nav-item'>
                <Plane className='icon'/>
                <span>Book a flight</span>

            </div>
            <div className='nav-item'>
                <MapIcon className='icon' />
                <span>Stopover / Packages</span>
            </div>
            <div className='nav-item'>
                <Calendar className='icon'/>
                <span>Manage / Check in</span>
            </div>
            <div className='nav-item'>
                <MapPin className='icon'/>
                <span>Flight status</span>
            </div>

        </nav>


        {/* Trip Type */}

        <div className='trip-types'>
            <label className='trip-type'>
                <input type='radio' name='tripType' value='return'
                checked={tripType === 'return'}
                onChange={() => handleTripTypeChange('return')} />
                <span>Return</span>
            </label>
            <label className='trip-type'>
                <input type='radio' name='tripType' value='oneway'
                checked={tripType === 'oneway'}
                onChange={() => handleTripTypeChange('oneway')} />
                <span>One way</span>
            </label>
            <label className='trip-type'>
                <input type='radio' name='tripType' value='multicity'
                checked={tripType === 'multicity'}
                onChange={() => handleTripTypeChange('multicity')} />
                <span>Multi-city</span>
            </label>
        </div>


        {/* Main Form */}
        <div className='booking-form'>
            {/* Locations */}
            <div className='form-group locations'>
                <div className='location-input'>
                   <label>From</label>
                   <input type='text'value={formData.from}
                   onChange={(e) => setFormData({...formData, from: e.target.value })}
                   onFocus={() => setShowAirportList({ from: true, to: false })}
                   placeholder='Select departure' />
                   {showAirportList.from && (
                    <div className='airport-list'>
                        {airports.map(airport => (
                            <div key={airport.code} className='airport-item'
                            onClick={() => handleAirportSelect('from', airport)}>
                                {airport.code} - {airport.name}
                            </div>
                        ))}
                    </div>
                   )}
                </div>
                <button className='swap-button'>⇄</button>
                <div className='location-input'>
                <label>To</label>
                   <input type='text'value={formData.to}
                   onChange={(e) => setFormData({...formData, to: e.target.value })}
                   onFocus={() => setShowAirportList({ from: false, to: true })}
                   placeholder='Select destination' />
                   {showAirportList.to && (
                    <div className='airport-list'>
                        {airports.map(airport => (
                            <div key={airport.code} className='airport-item'
                            onClick={() => handleAirportSelect('to', airport)}>
                                {airport.code} - {airport.name}
                            </div>
                        ))}
                    </div>
                   )}
                </div>
            </div>


            {/* Dates */}
            <div className='form-group dates'>
                <div className='date-input'>
                    <label>Departure</label>
                    <div className='date-value'>{formData.departDate}
                    <Calendar className='icon' />
                    </div>
                    
                </div>
                {tripType ==='return' && (
                <div className='date-input'>
                    <label>Return</label>
                    <div className='date-value'>{formData.returnDate}
                    <Calendar className='icon'/>
                    </div>
                    
                </div>
                )}
            </div>


            {/* Passengers */}
            <div className='form-group passengers'>
                <label>Passengers / Class</label>
                <div className='passenger-selector'>
                    <span>{formData.passengers} Passenger {formData.class}</span>
                    <ChevronDown className='icon' />
                </div>
            </div>
        </div>

        {/* Actions */}
        <div className='form-actions'>
            <button className='promo-button'>
                <PlusCircle className='icon'/>
                Add promo code
            </button>
            <button className='search-button' onClick={handleSearch}>Search flights</button>
        </div>
    </div>
  )
}
