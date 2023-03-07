import React, { useState } from "react";
import useTitlecards from "../services/useTitlecards";
import fallbackImage from "../assets/fallback-image.png";

export default function AllTitlecards() {
  const allTitlecards = useTitlecards();

  const [fullImage, setFullImage] = useState(null);

  allTitlecards.sort((a, b) => {
    if (a.seasonNumber < b.seasonNumber) return -1;
    if (a.seasonNumber > b.seasonNumber) return 1;
    if (a.episodeNumber < b.episodeNumber) return -1;
    if (a.episodeNumber > b.episodeNumber) return 1;
    return 0;
  });

  return (
    <>
      <div className="titlecards-container">
        {allTitlecards.length &&
          allTitlecards.map((alltitlecard) => (
            <div key={alltitlecard._id} className="titlecards-item">
              <p className="titlecards-episodetitle">
                {alltitlecard.episodeTitle} (S:{alltitlecard.seasonNumber},
                E:{alltitlecard.episodeNumber})
              </p>

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
                    alt=""
                    onClick={() => setFullImage(image)}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>

      {fullImage && (
        <div className="fullscreen-titlecard-image">
          <img src={fullImage} onClick={() => setFullImage(null)} />
        </div>
      )}
    </>
  );
}
