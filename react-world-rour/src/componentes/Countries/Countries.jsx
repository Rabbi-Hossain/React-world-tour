import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setvisitedCountries] = useState([])
    //practice
    const [flages, setFlages] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const handelVisitedCountry = country =>{
        const newVisitedCountries = [...visitedCountries, country]
        setvisitedCountries(newVisitedCountries)
    }

    const flagesVar = flag =>{
        // console.log(flag)
        const secondVar = [...flages, flag]
        setFlages(secondVar)
    }
    // console.log(flages)
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flage-container">
                {
                    flages.map((f, idx)=> <img key={idx} width={200} src={f}></img>) 
                
                }
            </div>

           <div className="country-container">
           {
              countries.map(country=> <Country 
                handelVisitedCountry={handelVisitedCountry}
                flagesVar={flagesVar}
                 key={country.cca3} 
                 country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;
