import React, { useEffect, useState } from "react";
import Country from "../country/Country";
import "./country.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [visitedCountry, setVisitedCountry] = useState([]);
  const handleVisitedCountry = (country) => {
    const newArray = [...visitedCountry, country];
    setVisitedCountry(newArray);
  };
  const [visitedFlag, setVisitedFlag] = useState([]);
  const handleFlag = (flag) => {
    const newFlag = [...visitedFlag, flag];
    setVisitedFlag(newFlag);
  };

  return (
    <div>
      <h2>Countries:{countries.length}</h2>
      <div>
        <h2>Visited Country:{visitedCountry.length}</h2>
        <ul>
         
       
          {visitedCountry.map((country) => (
            <li>{country.name.common}</li>
          ))}

{
            visitedFlag.map(flag=><img src={flag.flags.png}></img>)
          }
        </ul>
        <ul>
        {/* {visitedFlag.map((flag) => (
            <img src={flag.flags.png} alt="" />
          ))} */}

          
        </ul>
      </div>
      <div className="country">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleFlag={handleFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
