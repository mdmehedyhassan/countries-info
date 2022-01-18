import React from 'react';
import { Link } from 'react-router-dom';
import './Countires.css'

const Countries = (props) => {
    console.log(props);
    const { name, flags, population } = props.country;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="countries-style">
                <img className="w-100" src={flags.svg} alt="" />
                <h5 className="mt-2">{name.common}</h5>
                <p>Population: {population}</p>
                <Link to={`/country/${name.common}`}>
                    <button className="btn btn-outline-info">Show details</button>
                </Link>
            </div>

        </div>
    );
};

export default Countries;