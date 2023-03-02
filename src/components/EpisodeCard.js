import useEpisodes from "../services/useEpisodes";
import { NavLink, useParams } from "react-router-dom";

export default function EpisodeCard() {
  const allEpisodes = useEpisodes();

  const { eid } = useParams();
  console.log(eid);
  console.log(allEpisodes);

  const thisEpisode = allEpisodes.length && allEpisodes.find(episode => episode.episodeNumber === eid);

  console.log('thisEpisode', thisEpisode)

  if (thisEpisode) {
    return (
      <>
          <div>
          <div className="Episode">
            <div className="title-wrapper">
              <div className="episode-title">
                {thisEpisode && thisEpisode.seasonNumber}.{thisEpisode && thisEpisode.episodeNumber}. {thisEpisode && thisEpisode.name}
              </div>
              <img className="Avatar" src={thisEpisode && thisEpisode.episodeImage.file.url} />
            </div>
            <div className="ShortSummaryWrapper"><u>Kurzbeschreibung</u>:
              <div className="ShortSummary">
                {thisEpisode && thisEpisode.summary}
              </div>
            </div>
            <div className="GuestAppearanceWrapper"><u>Gastauftritt:</u>
              <div className="GuestAppearance">
                {thisEpisode && thisEpisode.actors}
              </div>
            </div>

            <div className="GuestCallerWrapper"><u>Gastanrufer:</u>
              <div className="GuestCaller">
                {thisEpisode && thisEpisode.callers}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  else {
    return 'loading...'
  }
}
