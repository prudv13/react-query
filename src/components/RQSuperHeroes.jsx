import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


function fetchSuperHeroes(){
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroes = () => {

    const onSuccess = () => {
        console.log("Perform side effect after data fetching");
    }

    const onError = () => {
        console.log("Perform side effect after encountering error");
    }

    const {data, isLoading, isFetching, isError, error, refetch} = useQuery(['super-heroes'], () => fetchSuperHeroes(), {
        //cacheTime: 5000,
        //staleTime: 30000,
        //refetchOnMount: true, false, 'always',
        //refetchOnWindowFocus: true, false,
        //refetchInterval: false, 2000,
        //refetchIntervalInBackground: true,
        enabled: false,
        onSuccess: onSuccess,
        onError: onError,
        select: (data) => {
            const superHeroNames = data.data.map(hero => hero.name)
            return superHeroNames;
        }

    });

    if(isError){
        return <h2 style={{margin: "30px", color:"red"}}>{error.message}</h2>
    }

    return (
    <div style={{margin: "30px"}}>
        <button style={{marginBottom: "20px"}} onClick={refetch}>Fetch Heroes</button>
        <h2 style={{marginBottom: "20px"}}>Super Heroes</h2>
        {
            isLoading || isFetching ?
            <h2 style={{margin: "30px"}}>Loading...</h2> :
            <ul>
            {
                data.map((heroName) => {
                    return <li style={{listStyle: "none"}} key={heroName}>{heroName}</li>
                })
            }
            </ul>
        }
    </div>
  )
}

export default RQSuperHeroes;