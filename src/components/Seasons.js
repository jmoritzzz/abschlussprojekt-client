import React from "react"
import { NavLink } from "react-router-dom"
import useSeasons from "../services/useSeasons";


export default function Seasons() {
    const seasons = useSeasons();

    return (
        <div className="season-card">

            {seasons.length &&
                seasons.map((season) => (
                    <div key={season._id} className="season-card-item">
                        {/* <p>Staffel Nummer: {season.seasonNumber}</p> */}
                        
                        <NavLink className="link" to={`/seasons/${season.seasonNumber}`}>
                        <img className="season-picture" src={season.seasonImage} alt={season.seasonTitle} />
                        </NavLink>
                        <p>{season.seasonTitle}</p>

                    </div>
                ))}
        </div>
    );
}