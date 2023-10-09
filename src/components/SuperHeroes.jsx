import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SuperHeroes = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
      (async() => {
        try {
          const response = await axios.get('http://localhost:4000/superheroes');
          const superheroesdata = await response.data;
          setData(superheroesdata);
          setIsLoading(false);
        }
        catch(error){
          setError(error.message);
          setIsLoading(false);
        }
      })();
    }, []);

    if(isLoading) {
        return <h2 style={{margin: "30px"}}>Loading...</h2>
    }

    if(error) {
      return <h2 style={{margin: "30px", color:"red"}}>{error}</h2>
  }
  return (
    <div style={{margin: "30px"}}>
        <h2 style={{marginBottom: "20px"}}>Super Heroes</h2>
        <ul>
            {
                data.map((hero) => {
                    return <li style={{listStyle: "none"}} key={hero.id}>{hero.name}</li>
                })
            }
        </ul>
    </div>
  )
}

export default SuperHeroes;