import axios from 'axios';
import { Fragment } from 'react';
import { useQuery } from 'react-query';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';

const RQSuperHeroes = () => {

  const onSuccess = () => {
    console.log("Perform side effect after data fetching")
  };

  const onError = () => {
    console.log("Perform side effect after data fetching");
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);

  console.log(`Loading: ${isLoading}, Fetching: ${isFetching}`);

  if(isLoading || isFetching){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <Fragment>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>fetch heroes</button>

      {
        data?.data.map((hero) => {
            return (
                <Link to={`/rq-super-heroes/${hero.id}`} key={hero.id}>
                    <p>{hero.name}</p>
                </Link>
            )
        })
      }

      { /*
        data.map(heroName => {
          return (
          <div key={heroName}>
              <p>{heroName}</p>
          </div>
          )
        })
      */}
    </Fragment>
  )
}

export default RQSuperHeroes;
