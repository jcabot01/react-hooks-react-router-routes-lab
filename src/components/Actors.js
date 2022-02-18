import React from "react";
import { actors } from "../data";

function Actors() {
  const actorData = actors.map((actor) => (
    <div key={actor.name}>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
      <ul> {/*nested array that needs to be mapped and rendered a certain way*/}
        {actor.movies?.map((movie) => ( 
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return ( 
    <div>
      <h1>Actors Page</h1>
      {actorData}
    </div>
  );
}

export default Actors;
