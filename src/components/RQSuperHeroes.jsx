import { Link } from 'react-router-dom';
import useSuperHeroesData, { useAddSuperHeroData } from '../hooks/useSuperHeroesData';
import { useState } from 'react';


const RQSuperHeroes = () => {
    const [name, setName] = useState('');
    const [alterEgo, setAlterEgo] = useState('');

    const onSuccess = () => {
        console.log("Perform side effect after data fetching");
    }

    const onError = () => {
        console.log("Perform side effect after encountering error");
    }

    const {data, isLoading, isFetching, isError, error, refetch} = useSuperHeroesData(onSuccess, onError);

    const {mutate: addHero} = useAddSuperHeroData();

    if(isError){
        return <h2 style={{margin: "30px", color:"red"}}>{error.message}</h2>
    }

    const handleAddHeroClick = () => {
        console.log({name, alterEgo})
        const hero= {name, alterEgo}
        addHero(hero);
    }

    return (
    <div style={{margin: "30px"}}>

        <div style={{marginBottom: "20px"}}>
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type='text'
                value={alterEgo}
                onChange={e => setAlterEgo(e.target.value)}
            />
            <button onClick={handleAddHeroClick}>Add Hero</button>
        </div>

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