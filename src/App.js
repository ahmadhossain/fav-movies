import MovieCreate from "./components/MovieCreate";
import { useState } from "react";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const creatMovie = (title) => {
    const updatedMovie = [
      ...movies,
      { id: Math.round(Math.random() * 1000), title },
    ];
    setMovies(updatedMovie);
  };

  const deleteMovie = (id) => {
    const updatedMovie = movies.filter((book) => {
      return book.id !== id;
    });
    setMovies(updatedMovie);
  };

  const editMovie = (id, newTitle) => {
    const updatedMovie = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, title: newTitle };
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
