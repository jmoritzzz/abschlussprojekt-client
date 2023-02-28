import { useState, useEffect } from "react";

export default function App() {
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const seasonsResponse = await fetch('http://localhost:5000/seasons');
                const seasonsData = await seasonsResponse.json();
                setSeasons(seasonsData);

            } catch (error) {
                console.error("Achtung, Fehler", error);
            }
        }

        fetchData();
    }, []);


}


