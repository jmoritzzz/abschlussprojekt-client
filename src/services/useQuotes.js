import { useState, useEffect } from "react";

export default function useQuotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const quotesResponse = await fetch('https://abschlussprojekt-server.onrender.com/quotes');
                const quotesData = await quotesResponse.json();
                setQuotes(quotesData);

            } catch (error) {
                console.error("Achtung, Fehler", error);
            }
        }

        fetchData();
    }, []);

    return quotes;
}


