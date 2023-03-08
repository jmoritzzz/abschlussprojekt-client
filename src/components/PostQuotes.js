import React, { useState } from "react";

export default function PostQuotes() {
  const [newQuote, setNewQuote] = useState({
    quote: "",
    figure: "",
    seasonNumber: "",
    episodeNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewQuote({ ...newQuote, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://abschlussprojekt-server.onrender.com/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuote),
      });
      if (response.ok) {
        setNewQuote({
          quote: "",
          figure: "",
          seasonNumber: "",
          episodeNumber: "",
        });
        alert("Quote successfully added!");
      }
    } catch (error) {
      console.error("Error adding quote:", error);
    }
  };

  return (
    <form className="postquotes-form" onSubmit={handleSubmit}>
      <label>
        Zitat:
        <input className="postquotes-field"
          type="text"
          name="quote"
          value={newQuote.quote}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Charakter:
        <input className="postquotes-field"
          type="text"
          name="figure"
          value={newQuote.figure}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Staffel-Nummer:
        <input className="postquotes-field"
          type="text"
          name="seasonNumber"
          value={newQuote.seasonNumber}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Episoden-Nummer:
        <input className="postquotes-field"
          type="text"
          name="episodeNumber"
          value={newQuote.episodeNumber}
          onChange={handleInputChange}
        />
      </label>
      <button className="postquote-button" type="submit">Add Quote</button>
    </form>
  );
}
