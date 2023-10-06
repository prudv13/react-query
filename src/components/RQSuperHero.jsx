import React from 'react'
import { useSuperHeroData } from '../hooks/useSuperHeroData';
import { useParams } from 'react-router-dom';

const RQSuperHero = () => {
    const {heroId} = useParams();
    const {isError, isFetching, isLoading, data, error} = useSuperHeroData(heroId);

    if(isLoading || isFetching){
        return <h2>Loading...</h2>
      }
    
      if(isError){
        return <h2>{error.message}</h2>
      }

    return (
    <div>
      <h1>{data?.data.name} - {data?.data.alterEgo}</h1>
    </div>
  )
}

export default RQSuperHero;
