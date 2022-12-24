import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        // console.log('results',res)
        setMovieList(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, [page]);

  console.log(movieList);

  const addMovie = (movie) => {
    console.log(movie);
    setWatchList([...watchList, movie]);
  };

  console.log(watchList);

  const removeMovie = (movie) => {
    const newState = watchList.filter((oldMovie) => {
      return oldMovie !== movie;
    });
    setWatchList(newState);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          watchList={watchList}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <Watchlist watchList={watchList} removeMovie={removeMovie} />
      </main>
      <h1>hello</h1>
    </div>
  );
}

export default App;
