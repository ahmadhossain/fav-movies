import useMovieContext from "../hooks/use-movie-context";
import MovieShow from "./MovieShow";

const MovieList = () => {
  const { movies } = useMovieContext();

  const renderedMovies = movies.map((movie) => (
    <MovieShow key={movie.id} movie={movie} />
  ));

  return <div className="movie-list">{renderedMovies}</div>;
};

export default MovieList;
