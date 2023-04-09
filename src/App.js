import { useContext, useEffect } from "react";
import MovieCreate from "./components/MovieCreate";
import MovieList from "./components/MovieList";
import MovieContext from "./context/movie";

function App() {
  const { fetchMovies } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie List</h1>
      <MovieList />
      <MovieCreate />
    </div>
  );
}

export default App;
