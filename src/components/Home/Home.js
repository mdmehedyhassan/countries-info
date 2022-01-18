import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios('https://restcountries.com/v3.1/all')
        .then(data => setCountries(data.data))
    },[]);
    return (
        <div className="container">
            <div className="row">
            {
                countries.map(country => <Countries country={country}></Countries>)
            }
            </div>
        </div>
    );
};

export default Home;