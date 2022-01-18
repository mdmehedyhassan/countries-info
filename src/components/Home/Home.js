import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios('https://restcountries.com/v3.1/all')
        .then(data => setCountries(data.data))
    },[]);
    return (
        <div>
            <h1>This is header: {countries.length}</h1>
        </div>
    );
};

export default Home;