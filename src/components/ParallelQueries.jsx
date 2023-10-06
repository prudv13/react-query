import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
    return axios.get('https://apidata-zkgz.onrender.com/superheroes');
}

const fetchFriends = () => {
    return axios.get('https://apidata-zkgz.onrender.com/friends');
}

const ParallelQueries = () => {
    const {data: superHeroes} = useQuery('super-heroes', fetchSuperHeroes);
    const {data: friends} = useQuery('friends', fetchFriends);
  return (
    <div>
      
    </div>
  )
}

export default ParallelQueries;
