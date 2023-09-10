import { useState } from 'react';
import './Country.css'
const Country = ({country,handelVisitedCountry,flagesVar}) => {
    // console.log(country)
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false)

    const handelVisited = ()=>{
        setVisited(!visited)
    }

    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handelVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>flagesVar(country.flags.png)}>Add Flage</button>
            <br />
            <button onClick={handelVisited}>{visited ? 'Visited': 'Going'}</button>
            {visited ? 'I have visited this  country' : 'I went go to visited.'}
        </div>
    );
};

export default Country;
