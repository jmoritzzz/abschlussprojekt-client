import React from "react"
import useQuotes from "../services/useQuotes";


export default function Quotes() {
    const quotes = useQuotes();
    const generateQuote = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[generateQuote];

    // let color = "#c0c0c0";
    // if (randomQuote && randomQuote.figure === "Frasier") {
    //   color = "#6A4F3C";
    // } else if (randomQuote && randomQuote.figure === "Nils") {
    //   color = "#8A705F";
    // }



    // return (
    //     <div className="">
    //         {randomQuote && (
    //             <div style={{ color }}>
    //                 <p>"{randomQuote.quote}"</p>
    //                 <p>{`(${randomQuote.figure})`}</p>
    //                 <p>"{randomQuote.reply}"</p>
    //                 <p>{`(${randomQuote.interlocutor}, S:${randomQuote.seasonNumber}, E:${randomQuote.episodeNumber})`}</p>
    //                 {/* <p>{`Season ${randomQuote.seasonNumber}, Episode ${randomQuote.episodeNumber}`}</p> */}
    //             </div>
    //         )}

    //     </div>
    // );

    let quoteColor = "#c0c0c0";
    let replyColor = "#c0c0c0";
    
    if (randomQuote) {
        if (randomQuote.figure === "Frasier") {
            quoteColor = "#a68461";
            replyColor = randomQuote.interlocutor === "Frasier" ? "#a68461" : randomQuote.interlocutor === "Nils" ? "#896443" : "c0c0c0";
        } else if (randomQuote.figure === "Nils") {
            quoteColor = "#a68461";
            replyColor = randomQuote.interlocutor === "Frasier" ? "#896443" : randomQuote.interlocutor === "Frasier" ? "#a68461" : "c0c0c0";
        }
    }

    return (
        <div className="">
            {randomQuote && (
                <>
                    <div style={{ color: quoteColor }}>{randomQuote.figure}: "{randomQuote.quote}"</div>
                    {randomQuote.interlocutor && (
                        <div style={{ color: replyColor }}>{randomQuote.interlocutor}: "{randomQuote.reply}"</div>
                    )}
                    {randomQuote.seasonNumber && (
                        <div>{`(Staffel: ${randomQuote.seasonNumber}, Episode: ${randomQuote.episodeNumber})`}</div>
                    )}
                </>
            )}
        </div>
    );
}