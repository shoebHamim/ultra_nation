import React from 'react';

const Cart = (props) => {
    const country_cart=props.cart;
    const totalPopulation=country_cart.reduce((sum,country)=>sum+country.population,0)
    return (
        <div>
            <h4>This is Cart: {country_cart.length}</h4>
            <h4>{totalPopulation}</h4>
        </div>
    );
};

export default Cart;