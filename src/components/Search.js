// import React, { useState } from "react";
// import axios from "axios";

// function Search() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState(null);

//   const handleQueryChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSearchClick = async () => {
//     try {
//       const response = await axios.get(`/search?query=${query}`);
//       console.log(response.data);
//       setResults(response.data);
//       setError(null);
//     } catch (err) {
//       console.error(err);
//       setError("An error occurred while searching. Please try again later.");
//       setResults([]);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={query} onChange={handleQueryChange} />
//       <button onClick={handleSearchClick}>Suche</button>
//       {error && <div>{error}</div>}
//       {results.length > 0 ? (
//         <ul>
//           {results.map((result) => (
//             <li key={result._id}>{result.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <div>No results found</div>
//       )}
//     </div>
//   );
// }

// export default Search;





import { useState } from "react";

import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";

function Search() {
  const [results, setResults] = useState([]);

  return (
    <div className="Search">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default Search;