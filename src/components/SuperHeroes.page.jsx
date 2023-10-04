import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SuperHeroes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://apidata-zkgz.onrender.com/superheroes').then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
        .catch(err => {
            setError(err.message);
            setIsLoading(false);
        })
    }, []);

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(error) {
        return <h2>{error}</h2>
    }
    return (
    <div>
      <h3>Super Heroes page</h3>
      {
        data.map((hero) => {
            return (
                <div key={hero.id}>
                    <p>{hero.name}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default SuperHeroes;
