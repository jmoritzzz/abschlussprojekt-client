import React from 'react';
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
import Guestbook from './components/Guestbook';
// import { SearchBar } from './components/SearchBar';
// import { SearchResultsList } from './components/SearchResultsList';
import Search from './components/Search';
// import { AiOutlineSearch } from 'react-icons/ai';
import { FaSearch } from "react-icons/fa";
import WelcomeOverlay from './components/WelcomeOverlay';




function App() {

  // const [results, setResults] = useState([]);

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
        <NavLink className="navbar-link" to="/search">
          <FaSearch id="search-icon" />
        </NavLink>
        <hr className="hr2" />
        {/* <div><Search/></div> */}
        {/* <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </div> */}
      </nav>

      <div className='display-content'>
      <WelcomeOverlay />
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
          <Route path="/search" element={< Search />} />
        </Routes>
      </div>

    </div>
  )
}

export default App;