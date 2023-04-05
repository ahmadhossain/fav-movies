import React from "react";
import MovieShow from "./MovieShow";

const MovieList = ({ movies, onDelete, onEdit }) => {
  const renderedMovies = movies.map((movie) => (
    <MovieShow movie={movie} onDelete={onDelete} onEdit={onEdit} />
  ));

  return <div className="movie-list">{renderedMovies}</div>;
};

export default MovieList;
