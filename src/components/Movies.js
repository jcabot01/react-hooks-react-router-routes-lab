import React from "react";
import { movies } from "../data";

function Movies() {
  const flicks = movies.map((movie) => (
    <div>
      <h3 key={movie.title}>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
        <ul>
          <li>{movie.genres}</li>
        </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {flicks}
    </div>
  );
}

export default Movies;
