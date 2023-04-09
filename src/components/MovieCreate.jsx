import { useState } from "react";
import useMovieContext from "../hooks/use-movie-context";

const MovieCreate = () => {
  const [title, setTitle] = useState("");
  const { creatMovie } = useMovieContext();

  const hadleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    creatMovie(title);
    setTitle("");
  };

  return (
    <div className="movie-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a Movie</h3>
        <label>Title</label>
        <input className="input" value={title} onChange={hadleChange} />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default MovieCreate;
