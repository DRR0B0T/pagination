import React from 'react';

const Countries = ({ countries, loading }) => {
  if(loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul className="list-group mb-3">
      {
        countries.map((country, index) => (
          <li key={index} className="list-group-item">
            {country.name}
            <img
              style={{width:25}}
              src={country.flag}
              alt="flag"
              className="ml-2"/>
          </li>
        ))
      }
    </ul>
  );
};

export default Countries;
