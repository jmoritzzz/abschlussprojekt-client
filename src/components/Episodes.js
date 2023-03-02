import React, { useEffect, useState } from "react"
import EpisodeCard from "./EpisodeCard";

export default function Episodes({ seasonNumber }) {
    const [episodes, setEpisodes] = useState([]);

    const getAllEntries = async () => {
        try {
            const response = await fetch('https://abschlussprojekt-server.onrender.com/seasons');
            const data = await response.json();
            setEpisodes(data.records);
        } catch (error) {
            console.error("Achtung, Fehler", error);
        }
    };

    useEffect(() => {
        getAllEntries();
    }, []);

    const filteredEpisodes = episodes.filter(episode => episode.seasonNumber === seasonNumber);
    filteredEpisodes.sort((a, b) => a.episodeNumber - b.episodeNumber);

    return (
        <div>
            <div className="episode-card">
                {filteredEpisodes.length &&
                    filteredEpisodes.map((episode, index) => {
                        return (
                            <div key={index} className="episode-card-item">
                                <img className="season-picture" src={episode.episodeImage.file.url} />
                                <div className="episode-card-title">
                                    {episode.episodeNumber}-{episode.name}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
           
            <EpisodeCard episodes={filteredEpisodes} />
        </div>
    )
}
