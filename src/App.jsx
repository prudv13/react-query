import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SuperHeroes from "./components/SuperHeroes";
import RQSuperHeroes from "./components/RQSuperHeroes";
import Home from "./components/Home";


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/super-heroes' element={<SuperHeroes />} />
        <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
      </Routes>
    </div>
  );
}

export default App;

