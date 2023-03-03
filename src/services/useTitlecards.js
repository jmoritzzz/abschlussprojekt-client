import { useState, useEffect } from "react";

export default function useTitlecards() {
    const [titlecards, setTitlecards] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const titlecardsResponse = await fetch('https://abschlussprojekt-server.onrender.com/titlecards');
                const titlecardsData = await titlecardsResponse.json();
                setTitlecards(titlecardsData);

            } catch (error) {
                console.error("Achtung, Fehler", error);
            }
        }

        fetchData();
    }, []);

    return titlecards;
}


