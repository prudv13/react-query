import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelQueries = ({heroIds}) => {
    console.log(heroIds);
    const queryResults = useQueries({
        queries: heroIds.map((id) => (
            {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id)
            }
        )
        )
    })

    console.log({queryResults})
  return (
    <div></div>
  )
}

export default DynamicParallelQueries;