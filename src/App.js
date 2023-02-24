import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './home';


function App() {
  return (
    <div className='App'>
      
      <nav>
        <NavLink className="navbar-link" to="/">
          Home
        </NavLink>
        <NavLink className="navbar-link" to="/seasons">
          Seasons
        </NavLink>
        <hr class="hr2" />
      </nav>
      <div className='display-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/seasons" element={<Seasons />} /> */}
          {/* <Route path="/seasons/:id" element={<Season/>} /> */}
          {/* <Route path="/seasons/:id/episodes" element={<Episodes />} /> */}
          {/* <Route path="/seasons/:id/episodes/:eid" element={<EpisodeCard />} /> */}

        </Routes>
      </div>

    </div>
  )
}

export default App;