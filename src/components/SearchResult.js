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