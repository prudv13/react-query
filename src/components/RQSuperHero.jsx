import { useParams } from "react-router-dom";
import useSuperHero from "../hooks/useSuperHero";

const RQSuperHero = () => {
    const { heroID } = useParams();
    const {data, isLoading, isFetching, isError, error} = useSuperHero(heroID);

    if(isError){
        return <h2 style={{margin: "30px", color:"red"}}>{error.message}</h2>
    }

  return (
    <div>
        <h2 style={{margin: "20px"}}>Super Hero</h2>
        {
            isLoading || isFetching ?
            <h2 style={{margin: "30px"}}>Loading...</h2> :
            <p style={{margin: "30px"}}>{data?.data.name} - {data?.data.alterEgo}</p>
        }
    </div>
  )
}

export default RQSuperHero;