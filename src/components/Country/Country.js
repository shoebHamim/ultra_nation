import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,population,region,area,flags,capital}=props.country
    return (
        <div className='country'>
            
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>{area} square kilometers</p>
            <p>{population} </p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <button onClick={()=>{props.handleAddCountry(props.country)}}>Add</button>

            
        </div>
    );
};

export default Country;