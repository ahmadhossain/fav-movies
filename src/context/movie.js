import { createContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

const Provider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get("http://localhost:3001/movies");
    setMovies(response.data);
  };

  const creatMovie = async (title) => {
    const response = await axios.post("http://localhost:3001/movies", {
      title,
    });
    const updatedMovie = [...movies, response.data];
    setMovies(updatedMovie);
  };

  const deleteMovie = async (id) => {
    await axios.delete(`http://localhost:3001/movies/${id}`);
    const updatedMovie = movies.filter((book) => {
      return book.id !== id;
    });
    setMovies(updatedMovie);
  };

  const editMovie = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/movies/${id}`, {
      title: newTitle,
    });
    const updatedMovie = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, ...response.data };
      }
      return movie;
    });
    setMovies(updatedMovie);
  };

  const valueToShare = {
    movies,
    fetchMovies,
    creatMovie,
    deleteMovie,
    editMovie,
  };
  return (
    <MovieContext.Provider value={valueToShare}>
      {children}
    </MovieContext.Provider>
  );
};

export { Provider };
export default MovieContext;
