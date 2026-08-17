import React, { useEffect, useState } from "react";

function ApiData() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results);
      })
      .catch(() => {
        setError("Error loading film data.");
      });
  }, []);

  return (
    <div>
      <h2>Star Wars Films</h2>

      {error && <p>{error}</p>}

      {films.map((film) => (
        <div key={film.episode_id}>
          <h3>{film.title}</h3>
          <p>Director: {film.director}</p>
          <p>Release Date: {film.release_date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ApiData;