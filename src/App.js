import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import Seasons from './components/Seasons';
import Quotes from './components/Quotes';
import Season from './components/Season';
import Episodes from './components/Episodes';
import EpisodeCard from './components/EpisodeCard';
import AllQuotes from './components/AllQuotes';
import AllTitlecards from './components/Titlecards';
// import Search from './components/Search';
import Guestbook from './components/Guestbook';



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
             <NavLink className="navbar-link" to="/allquotes">
          Zitate
        </NavLink>
        <NavLink className="navbar-link" to="/titlecards">
          Titel-Karten
        </NavLink>
           <NavLink className="navbar-link" to="/guestbook">
          Café Nervosa
        </NavLink>
        <hr className="hr2" />
        {/* <div><Search/></div> */}
      </nav>

      <div className='display-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seasons" element={< Seasons />} />
          <Route path="/seasons/:id" element={<Season />} />
          <Route path="/seasons/:id/episodes" element={<Episodes />} />
          <Route path="/seasons/:id/episodes/:eid" element={<EpisodeCard />} />
          <Route path="/quotes" element={< Quotes />} />
          <Route path="/allquotes" element={< AllQuotes />} />
          <Route path="/titlecards" element={< AllTitlecards />} />
          <Route path="/guestbook" element={< Guestbook />} />
        </Routes>
      </div>

    </div>
  )
}

export default App;