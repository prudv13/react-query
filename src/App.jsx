import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import SuperHeroes from './components/SuperHeroes.page';
import RQSuperHeroes from './components/RQSuperHeroes.page';
import Home from './components/Home.page';
import RQSuperHero from './components/RQSuperHero';
import ParallelQueries from './components/ParallelQueries';

const App = () => {
  return (
    <div>

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/super-heroes'>Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
          </li>
          <li>
            <Link to='/rq-parallel'>RQ Parallel Queries</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/super-heroes' element={<SuperHeroes />} />
        <Route path='/rq-super-heroes/:heroId' element={<RQSuperHero />} />
        <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
        <Route path='/rq-parallel' element={<ParallelQueries />} />
      </Routes>
    </div>
  )
}

export default App;

