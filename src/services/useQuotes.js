import { useState, useEffect } from "react";

export default function App() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const quotesResponse = await fetch('http://localhost:5000/quotes');
                const quotesData = await quotesResponse.json();
                setQuotes(quotesData);

            } catch (error) {
                console.error("Achtung, Fehler", error);
            }
        }

        fetchData();
    }, []);


}


