import React from "react";
import useQuotes from "../services/useQuotes";

export default function Quotes() {
  const quotes = useQuotes();
  const filteredQuotes = quotes.filter((quote) => {
    const words = quote.quote.split(" ");
    return words.length <= 20;
  });

  const generateQuote = Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote = filteredQuotes[generateQuote];

  // let quoteColor = "#c0c0c0";
  // let replyColor = "#c0c0c0";

  // if (randomQuote) {
  //   if (randomQuote.figure === "Frasier") {
  //     quoteColor = "#a68461";
  //     replyColor =
  //       randomQuote.interlocutor === "Frasier"
  //         ? "#a68461"
  //         : randomQuote.interlocutor === "Nils"
  //         ? "#896443"
  //         : "c0c0c0";
  //   } else if (randomQuote.figure === "Nils") {
  //     quoteColor = "#a68461";
  //     replyColor =
  //       randomQuote.interlocutor === "Frasier"
  //         ? "#896443"
  //         : randomQuote.interlocutor === "Frasier"
  //         ? "#a68461"
  //         : "c0c0c0";
  //   }
  // }

  return (
    <div className="">
      {randomQuote && (
        <>
          {/* <div style={{ color: quoteColor }}> */}
          <div>
            {randomQuote.figure}: "{randomQuote.quote}"
          </div>
          {randomQuote.interlocutor && (
            // <div style={{ color: replyColor }}>
            <div style={{fontStyle: "italic"}}>
              {randomQuote.interlocutor}: "{randomQuote.reply}"
            </div>
          )}
          {randomQuote.seasonNumber && (
            <div className="quote-start">
              {`(Staffel: ${randomQuote.seasonNumber}, Episode: ${randomQuote.episodeNumber})`}
            </div>
          )}
        </>
      )}
    </div>
  );
}
