import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";

export default function WatchedBox({ watched, onDeleteWatched }) {
  return (
    <div className="box">
      <WatchedSummary watched={watched} />
      <WatchedMovieList watched={watched} onDeleteWatched={onDeleteWatched} />
    </div>
  );
}
