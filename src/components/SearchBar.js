import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const [selectedField, setSelectedField] = useState("name");

    // const fetchData = (value) => {
    //     fetch("https://abschlussprojekt-server.onrender.com/episodes")
    //         .then((response) => response.json())
    //         .then((json) => {
    //             const results = json.filter((episode) => {
    //                 return (
    //                     value &&
    //                     episode &&
    //                     episode[selectedField] &&
    //                     episode[selectedField].toLowerCase().includes(value)
    //                 );
    //             });
    //             setResults(results);
    //         });
    // };

    /* NEUE SUCHE OHNE KATEGORIENFILTER*/

    const fetchData = (value) => {
        fetch("https://abschlussprojekt-server.onrender.com/episodes")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((episode) => {
                    return (
                        value &&
                        Object.values(episode).some((fieldValue) => {
                            return (
                                fieldValue &&
                                typeof fieldValue === "string" &&
                                fieldValue.toLowerCase().includes(value)
                            );
                        })
                    );
                });
                setResults(results);
            });
    };


    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    // const handleSelectChange = (e) => {
    //     setSelectedField(e.target.value);
    // };

    return (
        <div className="search-site">

            <div className="search-input-wrapper">
                <FaSearch id="search-icon" />
                <input className="search-input"
                    placeholder="Wonach wird gesucht?"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
                {/* <select className="search-select" value={selectedField} onChange={handleSelectChange}>
                    <option value="name">Episodentitel</option>
                    <option value="summary">Kurzbeschreibung</option>
                    <option value="actors">Gast-Schauspieler</option>
                    <option value="callers">Gast-Anrufer</option>
                    <option value="scenes">Besondere Szenen</option>
                </select> */}
            </div>
        </div>
    );
};
