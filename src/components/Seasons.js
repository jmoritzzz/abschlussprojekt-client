import React from "react"
// import { NavLink, Routes, Route } from "react-router-dom"
import useSeasons from "../services/useSeasons";


export default function Seasons() {
    const seasons = useSeasons();
    
    return (
        <div className="season-card">
            {/* <h1>Hier kommt die Staffelübersicht rein</h1>
            <div>Lorem ipsum</div> */}

            {seasons.length &&
                seasons.map((season) => (
                    <div key={season._id} className="season-card-item">
                        <h2>{season.seasonTitle}</h2>
                        {/* <p>Staffel Nummer: {season.seasonNumber}</p> */}
                        <img className="season-picture" src={season.seasonImage} alt={season.seasonTitle} />
                    </div>
                ))}
        </div>
    );
}