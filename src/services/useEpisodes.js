import { useState, useEffect } from "react";

export default function useEpisodes() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const episodesResponse = await fetch('https://abschlussprojekt-server.onrender.com/episodes');
                const episodesData = await episodesResponse.json();
                setEpisodes(episodesData);

            } catch (error) {
                console.error("Achtung, Fehler", error);
            }
        }

        fetchData();
    }, []);

        return episodes.sort((a, b) => a.episodeNumber - b.episodeNumber);
}


