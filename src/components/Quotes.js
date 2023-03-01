import React from "react"
import useQuotes from "../services/useQuotes";


export default function Quotes() {
    const quotes = useQuotes();
    const generateQuote = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[generateQuote];

    let color = "#c0c0c0";
    if (randomQuote && randomQuote.figure === "Frasier") {
      color = "#6A4F3C";
    } else if (randomQuote && randomQuote.figure === "Nils") {
      color = "#8A705F";
    }

    return (
        <div className="">
            {randomQuote && (
                <div style={{ color }}>
                    <p>"{randomQuote.quote}"</p>
                    <p>{`(${randomQuote.figure}, S:${randomQuote.seasonNumber}, E:${randomQuote.episodeNumber})`}</p>
                    {/* <p>{`Season ${randomQuote.seasonNumber}, Episode ${randomQuote.episodeNumber}`}</p> */}
                </div>
            )}

        </div>
    );
}