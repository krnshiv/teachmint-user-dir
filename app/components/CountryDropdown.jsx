// components/CountryDropdown.js
import { useState, useEffect, useCallback } from 'react';

const CountryDropdown = ({ onSelect }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [label, setLabel] = useState('Select Country');


  const fetchCountries = useCallback(async () => {
    try {
      const response = await fetch('http://worldtimeapi.org/api/timezone');
      if (!response.ok) {
        throw new Error('Failed to fetch countries');
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error.message);
    }
  })

  useEffect(() => {  
    fetchCountries();
  }, []);

  const handleCountryChange = (event) => {

    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    setLabel(selectedCountry)
    onSelect(selectedCountry);
  };

  return (
    
      <select className='flex text-white cursor-pointer font-semibold bg-blue-600 text-[12px] p-1 max-w-[9rem] border-b-[1px] hover:bg-white hover:text-blue-700  border-white' name='country' id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value={selectedCountry}>{label}</option>        
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
  );
};

export default CountryDropdown;
