import React from "react";
import useQuotes from "../services/useQuotes";


export default function AllQuotes() {
    const allQuotes = useQuotes();

    allQuotes.sort((a, b) => {

        if (a.seasonNumber < b.seasonNumber) return -1;
        if (a.seasonNumber > b.seasonNumber) return 1;

        if (a.episodeNumber < b.episodeNumber) return -1;
        if (a.episodeNumber > b.episodeNumber) return 1;

        return 0;
    });

    return (
        <div className="allquotes-container">
            {allQuotes.length &&
                allQuotes.map((allquote) => (
                    <div key={allquote._id} className="allquotes-item">
                        <p>{allquote.figure}: "{allquote.quote}"</p>
                        {allquote.reply ? <p>{allquote.interlocutor}: "{allquote.reply}"</p> : null}
                        <p className="allquotes-season">(Staffel: {allquote.seasonNumber}, Episode: {allquote.episodeNumber})</p>
                    </div>
                ))}
        </div>
    );
}