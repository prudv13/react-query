import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHero = ({queryKey}) => {
    const heroID = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${heroID}`)
}

const useSuperHero = (heroID) => {
    return useQuery(['super-hero', heroID], fetchSuperHero)
}

export default useSuperHero;