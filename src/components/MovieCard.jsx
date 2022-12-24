import React from "react";

const MovieCard = ({ movie, watchList, addMovie, removeMovie }) => {
  const inWatchlist = watchList.filter((oldMovie)=> {
    return oldMovie.id === movie.id
  });

  const button =
    inWatchlist.length === 0 ? (
      <button onClick={()=> addMovie(movie)}>Add to list</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    );

  return (
    <div className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
        {/* <p>{movie.overview}</p> */}
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
