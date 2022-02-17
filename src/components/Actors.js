import React from "react";
import { actors } from "../data";

function Actors() {
  const actorData = actors.map((actor) => (
    <div key={actor.name}>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
        <ul>
          <li>{actor.movies}</li>
        </ul>
    </div>
    
  ))
  return ( 
    <div>
      <h1>Actors Page</h1>
      {actorData}
    </div>
    
  );
}

export default Actors;
