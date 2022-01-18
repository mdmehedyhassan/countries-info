import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([])
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        axios(url)
            .then(data => setCountry(data.data))
    }, [])
console.log(country)
    return (
        <div className="container text-center mt-5">
            {
                country.map((con, index) => <div key={index}>
                    <img className="w-50" src={con.flags.svg} alt="" />
                    <h1>Country: {con.name.common}</h1>
                    {
                       con.capital  && <h4>Capital: {con.capital[0]}</h4>
                    }
                    <p>Population: {con.population}</p>
                    <ul>
                        {
                            con.borders && con.borders.map(bd => <li>{bd}</li>)
                        }
                    </ul>

                </div>)
            }
        </div>
    );
};

export default CountryDetails;