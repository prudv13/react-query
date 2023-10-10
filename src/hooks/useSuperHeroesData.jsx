import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchSuperHeroes(){
    return axios.get('http://localhost:4000/superheroes')
}

const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery(['super-heroes'], () => fetchSuperHeroes(), {
        //cacheTime: 5000,
        //staleTime: 30000,
        //refetchOnMount: true, false, 'always',
        //refetchOnWindowFocus: true, false,
        //refetchInterval: false, 2000,
        //refetchIntervalInBackground: true,
        enabled: false,
        onSuccess: onSuccess,
        onError: onError,
        // select: (data) => {
        //     const superHeroNames = data.data.map(hero => hero.name)
        //     return superHeroNames;
        // }

    });
}

export default useSuperHeroesData;