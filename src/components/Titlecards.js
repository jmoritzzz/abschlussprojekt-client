import React from "react";
import useTitlecards from "../services/useTitlecards";

import fallbackImage from "../assets/fallback-image.png";


export default function AllTitlecards() {
    const allTitlecards = useTitlecards();

    allTitlecards.sort((a, b) => {

        if (a.seasonNumber < b.seasonNumber) return -1;
        if (a.seasonNumber > b.seasonNumber) return 1;

        if (a.episodeNumber < b.episodeNumber) return -1;
        if (a.episodeNumber > b.episodeNumber) return 1;

        return 0;
    });

    return (
        <div className="titlecards-container">
            {allTitlecards.length &&
                allTitlecards.map((alltitlecard) => (
                    <div key={alltitlecard._id} className="titlecards-item">
                        <p className="titlecards-episodetitle">{alltitlecard.episodeTitle} (S:{alltitlecard.seasonNumber}, E:{alltitlecard.episodeNumber})</p>
                        {/* <p className="alltitlecards-season">(Staffel: {alltitlecard.seasonNumber}, Episode: {alltitlecard.episodeNumber})</p> */}

                        {/* {alltitlecard.image.map((image) => (
                            <img key={image} className="titlecard-image" src={image} alt=""/>
                        ))} */}
                        <div className="titlecard-image-container">

                            {alltitlecard.image.map((image) => (
                                <img
                                    className="titlecard-image"
                                    key={image}
                                    src={image}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = fallbackImage;
                                    }}
                                />
                            ))}
                        </div>
                        {/* <div className="popup-titlecard-image-container">
                            <span>&times;</span>
                        {alltitlecard.image.map((image) => (
                                <img
                                    className="popup-titlecard-image"
                                    key={image}
                                    src={image}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = fallbackImage;
                                    }}
                                />
                            ))}
                        </div> */}

                    </div>
                ))}
        </div>
    );
}
