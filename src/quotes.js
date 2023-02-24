import React, { useState, useEffect } from 'react';

export default function Quotes() {
    let initialState = {
        quote: ""
    }

    const [quote, setquote] = useState(initialState)
    let quotes = [

        // {
        //     "quote": "Niles, I would shave my head for you. A gesture which becomes less significant with each passing year."
        // },
        {
            "quote": "Oh, Das ist ein Dekorationstil. Er wird eklektisch genannt."
        },
        {
            "quote": "Bin ich richtig gekleidet für eine Sache, die sich Bananarama nennt"
        },
        {
            // "quote": "You think I'm pretentious? You'd eat a worm if I gave it a French name!"
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
