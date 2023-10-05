import axios from 'axios';
import { Fragment } from 'react';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
    return axios.get('https://apidata-zkgz.onrender.com/superheroes')
}

const RQSuperHeroes = () => {
    const { isLoading, data, isError, error, isFetching } = useQuery(
      "super-heroes",
      fetchSuperHeroes,
      {
        //cacheTime: 5 minutes,
        //staleTime: 0 seconds,
        refetchOnMount: true, //false, 'always',
        refetchOnWindowFocus: true, //false, 'always',
      }
    );

    console.log(`Loading: ${isLoading}, Fetching: ${isFetching}`);

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

  return (
    <Fragment>
      <h2>RQ Super Heroes Page</h2>
      {
        data?.data.map((hero) => {
            return (
                <div key={hero.id}>
                    <p>{hero.name}</p>
                </div>
            )
        })
      }
    </Fragment>
  )
}

export default RQSuperHeroes;
