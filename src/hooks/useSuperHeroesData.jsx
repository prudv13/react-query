import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
    return axios.get('https://apidata-zkgz.onrender.com/superheroes')
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery(
        "super-heroes",
        fetchSuperHeroes,
        {
            //cacheTime: 5 minutes,
            //staleTime: 0 seconds,
            //refetchOnMount: true, false, 'always',
            //refetchOnWindowFocus: true, false, 'always',
            //refetchInterval: 2000,
            //refetchIntervalInBackground: true,
            //enabled: false,
            onSuccess,
            onError,
            // select: (data) => {
            //   const superHeroNames = data.data.map(hero => hero.name);
            //   return superHeroNames;
            // }
        }
      );
}