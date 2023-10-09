import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


function fetchSuperHeroes(){
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroes = () => {

    const {data, isLoading} = useQuery(['super-heroes'], () => fetchSuperHeroes());
    
    if(isLoading) {
        return <h2 style={{margin: "30px"}}>Loading...</h2>
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