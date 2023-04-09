import { useState } from "react";
import useMovieContext from "../hooks/use-movie-context";

const MovieEdit = ({ movie, onSubmit }) => {
  const [title, setTitle] = useState(movie.title);

  const { editMovie } = useMovieContext();

  const hadleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editMovie(movie.id, title);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <input className="input" value={title} onChange={hadleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default MovieEdit;
