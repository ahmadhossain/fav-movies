import { useContext } from "react";
import MovieContext from "../context/movie";

const useMovieContext = () => {
  return useContext(MovieContext);
};

export default useMovieContext;
