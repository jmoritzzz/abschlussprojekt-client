import React from "react";
import useQuotes from "../services/useQuotes";
import PostQuotes from "./PostQuotes";

export default function AllQuotes() {
  const allQuotes = useQuotes();

  allQuotes.sort((a, b) => {
    if (a.seasonNumber < b.seasonNumber) return -1;
    if (a.seasonNumber > b.seasonNumber) return 1;
    if (a.episodeNumber < b.episodeNumber) return -1;
    if (a.episodeNumber > b.episodeNumber) return 1;
    return 0;
  });

  // const getColor = (figure) => {
  //   switch (figure) {
  //     case "Frasier":
  //       return "#a79188";
  //     case "Nils":
  //       return "#c4b0a9";
  //     case "Daphne":
  //       return "#8b7266";
  //     case "Roz":
  //       return "#796052";
  //     case "Martin":
  //       return "#6e5345";
  //     default:
  //       return "#c0c0c0";
  //   }
  // };

  return (
    <div className="allquotes-container">
      
      {allQuotes.length &&
        allQuotes.map((allquote) => (
          <div key={allquote._id} className="allquotes-item">
            {/* <p style={{ color: getColor(allquote.figure) }}> */}
            <p className="allquotes-quote">
              {allquote.figure.toUpperCase()}: "{allquote.quote}"
            </p>
            {allquote.reply && (
              <p className="allquotes-reply"
                // style={{
                //   color: getColor(allquote.interlocutor),
                //   fontStyle: "italic",
                // }}
              >
                {allquote.interlocutor.toUpperCase()}: "<span style={{fontStyle: "italic"}}>{allquote.reply}</span>"
              </p>
            )}
            <p className="allquotes-season">
              (Staffel: {allquote.seasonNumber}, Episode: {allquote.episodeNumber})
            </p>
          </div>
        ))}
        
        <div className="postquote-container">
                  <PostQuotes />

        </div>
    </div>
  );
}
