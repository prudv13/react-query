import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SuperHeroes from "./components/SuperHeroes";
import RQSuperHeroes from "./components/RQSuperHeroes";
import Home from "./components/Home";
import RQSuperHero from "./components/RQSuperHero";
import ParallelQueries from "./components/ParallelQueries";


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/super-heroes' element={<SuperHeroes />} />
        <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
        <Route path='/rq-super-heroes/:heroID' element={<RQSuperHero />} />
        <Route path='/parallel-queries' element={<ParallelQueries />} />
      </Routes>
    </div>
  );
}

export default App;

