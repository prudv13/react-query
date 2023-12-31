import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SuperHeroes from "./components/SuperHeroes";
import RQSuperHeroes from "./components/RQSuperHeroes";
import Home from "./components/Home";
import RQSuperHero from "./components/RQSuperHero";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallelQueries from "./components/DynamicParallelQueries";
import DependentQueries from "./components/DependentQueries";
import PaginatedQueries from "./components/PaginatedQueries";
import InfiniteQueries from "./components/InfiniteQueries";


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
        <Route path='/dynamic-parallel-queries'  element={<DynamicParallelQueries heroIds={[1,3]} />} />
        <Route path='/dependent-queries' element={<DependentQueries email='vishwas@example.com' />} />
        <Route path='/paginated-queries' element={<PaginatedQueries />} />
        <Route path='/infinite-queries' element={<InfiniteQueries />} />
      </Routes>
    </div>
  );
}

export default App;

