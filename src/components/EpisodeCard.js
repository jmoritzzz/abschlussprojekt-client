import useEpisodes from "../services/useEpisodes";
import { useParams, useNavigate } from "react-router-dom";
import fallbackImage from "../assets/fallback-image.png";
import { FaBackward } from "react-icons/fa";
import { useState } from "react";

export default function EpisodeCard() {
  const allEpisodes = useEpisodes();

  const navigate = useNavigate();

  const [fullImage, setFullImage] = useState(null);

  const { id, eid } = useParams();
  console.log(eid);
  console.log(allEpisodes);

  const thisEpisode = allEpisodes.length && allEpisodes.find(episode => episode.seasonNumber == id && episode.episodeNumber == eid);

  console.log('thisEpisode', thisEpisode)

  if (thisEpisode) {
    return (
      <>
        <div className="single-episode-container">
          <div className="button-container">

            <button className="back-button-icon" onClick={() => navigate(-1)}><FaBackward /></button>
          </div>
          <div className="Episodecard-Container">
            <div className="title-wrapper">
              <div className="episode-title">
                {thisEpisode && thisEpisode.seasonNumber}.{thisEpisode && thisEpisode.episodeNumber}. {thisEpisode && thisEpisode.name}
              </div>
              <div className="episode-image-container">
                <div className="episode-image-wrapper">
                  <img
                    className="Avatar"
                    src={thisEpisode && thisEpisode.episodeImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                    alt="Episode thumbnail"
                    onClick={() => setFullImage(thisEpisode.episodeImage)}
                  />
                </div>
              </div>
            </div>
            <div className="ShortSummaryWrapper">
              <div className="ShortSummary-Header">Kurzbeschreibung</div>
              <div className="ShortSummary">
                {thisEpisode && thisEpisode.summary ? thisEpisode.summary : 'Noch keine Daten verfügbar'}
              </div>
            </div>
            <div className="GuestAppearanceWrapper">
              <div className="Guest-Header">Gastauftritt</div>
              <div className="GuestAppearance">
                {thisEpisode && thisEpisode.actors ? thisEpisode.actors : 'Noch keine Daten verfügbar'}
              </div>
            </div>

            <div className="GuestCallerWrapper">
              <div className="Caller-Header">Gastanrufer</div>
              <div className="GuestCaller">
                {thisEpisode && thisEpisode.callers ? thisEpisode.callers : 'Noch keine Daten verfügbar'}
              </div>
            </div>

            <div className="ScenesWrapper">
              <div className="Scenes-Header">Besondere Szenen</div>
              <div className="Scenes">
                {thisEpisode && thisEpisode.scenes ? thisEpisode.scenes : 'Noch keine Daten verfügbar'}
              </div>
            </div>
            <button className="back-button" onClick={() => navigate(-1)}>Zurück</button>
          </div>
        </div>
        <div>
          {fullImage && (
            <div className="fullscreen-episode-image">
              <img src={fullImage} onClick={() => setFullImage(null)} />
            </div>
          )}
        </div>

      </>
    );
  }
  else {
    return 'loading...'
  }
}
