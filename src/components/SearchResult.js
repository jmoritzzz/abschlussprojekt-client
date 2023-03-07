export const SearchResult = ({ result }) => {
  const { name, seasonNumber, episodeNumber, searchField } = result;

  const fieldLabels = {
      name: "Episodentitel",
      summary: "Kurzbeschreibung",
      actors: "Gastauftritt",
      callers: "Gastanrufer",
      scenes: "Besondere Szenen"
  };

  const label = fieldLabels[searchField] || "undefiniert";

  return (
      <div className="search-result">
          <p className="search-result-name"><span className="search-result-foundIn">Gefunden in:</span> {name} (S:{seasonNumber}, E:{episodeNumber})</p>
          <p className="search-result-field">{label}</p> 
          <hr className="hr3" />
      </div>
  );
};
