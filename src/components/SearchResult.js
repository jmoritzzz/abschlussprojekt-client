// import "./SearchResult.css";

// export const SearchResult = ({ result }) => {
//   return (
//     <div
//       className="search-result"
//       onClick={(e) => alert(`You selected ${result}!`)}
//     >
//       {result}
//     </div>
//   );
// };

export const SearchResult = ({ result }) => {
    const { name, seasonNumber, episodeNumber } = result;
  
    return (
      <div className="search-result">
        <p>{name} (S:{seasonNumber}, E:{episodeNumber})</p>
        <hr className="hr3" />
        <p>
          {/* (S:{seasonNumber}, E:{episodeNumber}) */}
        </p>
      </div>
    );
  };