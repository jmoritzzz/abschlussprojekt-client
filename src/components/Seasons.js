import React, { useEffect, useState } from "react"
import { NavLink, Routes, Route } from "react-router-dom"
import useSeasons from "../services/useSeasons";


export default function Seasons() {

    const seasons = useSeasons();
    return (
        
        <div className="">
            <h1>Hier kommt die Staffelübersich rein</h1>
            <div>Lorem ipsum</div>
        </div>
            
    );
}