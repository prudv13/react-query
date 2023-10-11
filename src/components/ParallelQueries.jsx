import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

const ParallelQueries = () => {
    const {data: superheroes} = useQuery(['superheroes'], fetchSuperHeroes);
    const {data: friends} = useQuery(['friends'], fetchFriends);

  return (
    <div style={{margin: "25px"}}>
        <ul style={{marginBottom: "20px"}}>
            {
                superheroes.data.map(superhero => <li style={{listStyle: "none"}}>{superhero.name}</li>)
            }
        </ul>
        <ul style={{marginBottom: "20px"}}>
            {
                friends.data.map(friend => <li style={{listStyle: "none"}}>{friend.name}</li>)
            }
        </ul>
    </div>
  )
}

export default ParallelQueries;