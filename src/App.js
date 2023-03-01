import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import Seasons from './components/Seasons';
import Quotes from './components/Quotes';
import AllQuotes from './components/AllQuotes';


function App() {
  return (
    <div className='App'>

      <nav>
        <NavLink className="navbar-link" to="/">
          Start
        </NavLink>
        <NavLink className="navbar-link" to="/seasons">
          Staffelübersicht
        </NavLink>
        {/* <NavLink className="navbar-link" to="/nervosa">
          Café Nervosa
        </NavLink> */}
        <NavLink className="navbar-link" to="/allquotes">
          Zitate
        </NavLink>
        <NavLink className="navbar-link" to="/titelkarten">
          Titel-Karten
        </NavLink>
        <hr className="hr2" />
      </nav>
      <div className='display-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seasons" element={< Seasons />} />
          <Route path="/quotes" element={< Quotes />} />
          <Route path="/allquotes" element={< AllQuotes />} />
        </Routes>
      </div>

    </div>
  )
}

export default App;