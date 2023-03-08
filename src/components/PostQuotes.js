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
                alert("Neues Zitat erfolgreich hinzugefügt");
            }
        } catch (error) {
            console.error("Error adding quote:", error);
        }
    };

    return (
        <form className="postquotes-form" onSubmit={handleSubmit}>
            <label>
                <span className="postquote-name">Zitat:</span> 
                <input className="postquotes-field"
                    type="text"
                    name="quote"
                    value={newQuote.quote}
                    onChange={handleInputChange}
                    placeholder="Bitte gebe das Zitat ein"
                />
            </label>
            <label>
            <span className="postquote-name"> Charakter:</span> 
                <input className="postquotes-field"
                    type="text"
                    name="figure"
                    value={newQuote.figure}
                    onChange={handleInputChange}
                    placeholder="Bitte gebe die Figur ein"
                />
            </label>
            <label>
            <span className="postquote-name">Staffel-Nummer:</span> 
                <input className="postquotes-field-number"
                    type="number"
                    name="seasonNumber"
                    value={newQuote.seasonNumber}
                    onChange={handleInputChange}
                    placeholder="1"
                />
            </label>
            <label>
            <span className="postquote-name">Episoden-Nummer:</span> 
                <input className="postquotes-field-number"
                    type="number"
                    name="episodeNumber"
                    value={newQuote.episodeNumber}
                    onChange={handleInputChange}
                    placeholder="1"
                />
            </label>
            <button className="postquote-button" type="submit">Übermitteln</button>
        </form>
    );
}
