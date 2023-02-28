import React, { useEffect, useState } from "react"
import useQuotes from "../services/useQuotes";


export default function Quotes() {

    const quotes = useQuotes();
    return (
        
        <>
            <h1>Hier kann man bald Zitate/Dialoge anschauen und eintragen</h1>
            <div>Lorem ipsum</div>
        </>
    );
}