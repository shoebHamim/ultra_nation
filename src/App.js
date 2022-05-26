import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [country_cart, setCountry_cart] = useState([]); // the purpose of useState is handle reactive data
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      })
  }, []);

  const handleAddCountry = (country) => {
    const newCart = [...country_cart, country];
    setCountry_cart(newCart)
    console.log('added', country.name.common)
  };

  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <h2>Country Added: {country_cart.length}</h2>
      <Cart cart={country_cart} />
      <div className='countries-container'>
        {countries.map(country =>
          <Country country={country}
            key={country.cca3}
            handleAddCountry={handleAddCountry}>

          </Country>)
        }
      </div>
    </div>
  );
}

export default App;
