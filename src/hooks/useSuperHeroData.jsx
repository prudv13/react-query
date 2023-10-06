import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHero = ({queryKey}) => {
    const heroId = queryKey[1];
    return axios.get(`https://apidata-zkgz.onrender.com/superheroes/${heroId}`);
}

export const useSuperHeroData = (heroId) => {
    return useQuery(['super-hero', heroId], fetchSuperHero)
}