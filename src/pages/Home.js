import React from 'react';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <div className='home_head'>
                <h2 className="heading">WELCOME TO THE SHOP STORE</h2>
            </div>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;
