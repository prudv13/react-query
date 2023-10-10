import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


function fetchSuperHeroes(){
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroes = () => {

    const {data, isLoading, isFetching, isError, error} = useQuery(['super-heroes'], () => fetchSuperHeroes(), {
        //cacheTime: 5000,
        //staleTime: 30000,
        //refetchOnMount: true, false, 'always',
        //refetchOnWindowFocus: true, false,
        //refetchInterval: false, 2000,
        //refetchIntervalInBackground: true,
    });
    
    if(isLoading || isFetching) {
        return <h2 style={{margin: "30px"}}>Loading...</h2>
    }

    if(isLoading) {
        return <h2 style={{margin: "30px"}}>Loading...</h2>
    }

    if(isError){
        return <h2 style={{margin: "30px", color:"red"}}>{error.message}</h2>
    }

    return (
    <div style={{margin: "30px"}}>
        <h2 style={{marginBottom: "20px"}}>Super Heroes</h2>
        <ul>
            {
                data?.data.map((hero) => {
                    return <li style={{listStyle: "none"}} key={hero.id}>{hero.name}</li>
                })
            }
        </ul>
    </div>
  )
}

export default RQSuperHeroes;