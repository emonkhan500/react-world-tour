import React, { useState } from "react";

const Country = ({ country ,handleVisitedCountry,handleFlag }) => {
  const [visited,setVisited]=useState(false)
  const handleVisited=()=>{
    setVisited(!visited)
  }

  const { flags, region, name } = country;
  return (
    <div
      style={{
        border: "2px solid gray",
        margin: "50px",
        padding:'20px'
      }}
    >
      <div className={` ${visited && 'visited'}`}>
        <h2>{name.common}</h2>
        <img src={flags.png} alt="" />
        <h3>Region :{region}</h3>
        <button onClick={handleVisited}>Visited</button>
        { visited && 'gechilam'}
        <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
        <button onClick={()=>{handleFlag(country)}}>Show Flag</button>
      </div>
    </div>
  );
};

export default Country;
