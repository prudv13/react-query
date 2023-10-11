import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHero = ({queryKey}) => {
    const heroID = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${heroID}`)
}

const useSuperHero = (heroID) => {
    const queryClient = useQueryClient();
    return useQuery(['super-hero', heroID], fetchSuperHero,{
        initialData: () => {
            const hero = queryClient.getQueryData('super-heroes')?.data?.find(hero => hero.id === parseInt(heroID))
            if(hero){
                return {
                    data: hero
                }
            }
            else {
                return undefined;
            }
        }
    })
}

export default useSuperHero;