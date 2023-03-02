import { useState, useEffect } from "react";

export default function useSeasons() {
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const seasonsResponse = await fetch('https://abschlussprojekt-server.onrender.com/seasons');
                const seasonsData = await seasonsResponse.json();
                setSeasons(seasonsData);

            } catch (error) {
                console.error("Achtung, Fehler", error);
            }
        }

        fetchData();
    }, []);

    // return seasons;
        return seasons.sort((a, b) => a.seasonNumber - b.seasonNumber);
}


