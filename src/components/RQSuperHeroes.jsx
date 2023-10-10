import { Link } from 'react-router-dom';
import useSuperHeroesData from '../hooks/useSuperHeroesData';


const RQSuperHeroes = () => {

    const onSuccess = () => {
        console.log("Perform side effect after data fetching");
    }

    const onError = () => {
        console.log("Perform side effect after encountering error");
    }

    const {data, isLoading, isFetching, isError, error, refetch} = useSuperHeroesData(onSuccess, onError);

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
                data?.data.map((hero) => {
                    return  <li style={{listStyle: "none"}} key={hero.id}>
                                <Link to={`/rq-super-heroes/${hero.id}`} style={{textDecoration: "none"}}>{hero.name}</Link>
                            </li>
                })
            }
            </ul>
        }
    </div>
  )
}

export default RQSuperHeroes;