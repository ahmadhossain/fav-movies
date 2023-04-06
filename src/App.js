import MovieCreate from "./components/MovieCreate";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get("http://localhost:3001/movies");
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

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

  return (
    <div className="app">
      <h1>Movie List</h1>
      <MovieList movies={movies} onDelete={deleteMovie} onEdit={editMovie} />
      <MovieCreate onCreate={creatMovie} />
    </div>
  );
}

export default App;
