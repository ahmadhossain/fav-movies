import { useState } from "react";
import MovieEdit from "./MovieEdit";
import useMovieContext from "../hooks/use-movie-context";

const MovieShow = ({ movie }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteMovie } = useMovieContext();

  const handleDeleteClick = () => {
    deleteMovie(movie.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
  };

  let content = <h3>{movie.title}</h3>;
  if (showEdit) {
    content = <MovieEdit movie={movie} onSubmit={handleSubmit} />;
  }
  return (
    <div className="movie-show">
      <img alt="movie" src={`https://picsum.photos/seed/${movie.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieShow;
