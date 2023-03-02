import { NavLink, useParams } from "react-router-dom";
import useSeasons from "../services/useSeasons";
import useEpisodes from "../services/useEpisodes";


export default function Season() {

    const allSeasons = useSeasons()
    const allEpisodes = useEpisodes();

    console.log(allSeasons);
    console.log('all episodes', allEpisodes);

    const { id } = useParams();

    const thisSeason = allSeasons.length && allSeasons.find(season => season.seasonNumber === id);

    //array mit allen Episoden dieser Staffel
    //find() funktioniert hier nicht, weil es uns nur das erste Match ausgibt und wir ein Array returnen wollen
    const thisSeasonsEpisodes = allEpisodes.length && allEpisodes.filter(episode => episode.seasonNumber === id);

    console.log('this season', thisSeason)
    console.log('these episodes', thisSeasonsEpisodes);

    if (thisSeason) {
        return (
            <>
                <div className="season-card">
                    {thisSeasonsEpisodes.length &&
                        thisSeasonsEpisodes.map(
                            (season, index) => {

                                return <div key={index} className="episode-card-item">
                                    <NavLink className="link" to={`/seasons/${season.seasonNumber}/episodes/${season.episodeNumber}`}>
                                        <img className="episode-picture" src={season.episodePicture.file.url} />
                                    </NavLink>
                                    <div className="episode-card-number">{season.episodeNumber} - {season.name}</div>
                                    {/* <div className="episode-card-title"> {season.name}</div> */}

                                </div>
                            }
                        )
                    }
                </div>
            </>
        );
    }
    else {
        return 'Lade Daten...'
    }
}

// import { NavLink, useParams } from "react-router-dom";
// import useSeasons from "../services/useSeasons";
// import useEpisodes from "../services/useEpisodes";

// export default function Season() {
//   const allSeasons = useSeasons();
//   const allEpisodes = useEpisodes();
//   const { id = "" } = useParams(); // use a default value for id in case it is undefined

//   console.log(allSeasons);
//   console.log("all episodes", allEpisodes);

//   const thisSeason = allSeasons.find(
//     (season) => season.seasonNumber === id
//   );

//   // Use optional chaining and nullish coalescing operators to check if the array is not empty
//   const thisSeasonsEpisodes =
//     allEpisodes?.filter((episode) => episode.seasonNumber === id) ?? [];

//   console.log("this season", thisSeason);
//   console.log("these episodes", thisSeasonsEpisodes);

//   if (thisSeason) {
//     return (
//       <>
//         <div className="season-card">
//           {thisSeasonsEpisodes.map((episode, index) => (
//             <div key={index} className="episode-card-item">
//               <NavLink
//                 className="link"
//                 to={`/seasons/${episode.seasonNumber}/episodes/${episode.episodeNumber}`}
//               >
//                 <img
//                   className="episode-picture"
//                   src={episode.episodeImage.file.url}
//                   alt={`Episode ${episode.episodeNumber}`}
//                 />
//               </NavLink>
//               <div className="episode-card-number">
//                 {episode.episodeNumber} - {episode.name}
//               </div>
//               {/* <div className="episode-card-title"> {episode.name}</div> */}
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   } else {
//     return <div>Loading season information...</div>;
//   }
// }
