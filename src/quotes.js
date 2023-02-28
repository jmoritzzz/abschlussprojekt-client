import React, { useState, useEffect } from 'react';

export default function Quotes() {
    let initialState = {
        quote: ""
    }

    const [quote, setquote] = useState(initialState)
    let quotes = [
        {
            "quote": "Oh, Das ist ein Dekorationsstil. Er wird eklektisch genannt."
        },
        {
            "quote": "Bin ich richtig gekleidet für eine Sache, die sich Bananarama nennt"
        },
         {
            "quote": "Ich bin es. Ich bin so high wie die Himalayas! Wäre ich eine Stadt in Deutschland, ich wäre High-delberg!"
        },
    ]
    let generateQuote = () => {
        console.log(quotes.length);
        var random = Math.floor(Math.random() * (quotes.length - 0)) + 0;
        console.log(random);
        setquote(quotes[random])

    }
    useEffect(() => {
        generateQuote();
    }, []) // Sarah fragen, prio low

    return (
        <p class="quote-container">
            {quote.quote}
        </p>
    )
}
