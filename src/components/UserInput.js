import React, { useState } from "react";

function UserInput() {
  const [name, setName] = useState("");
  const [movie, setMovie] = useState("");
  const [character, setCharacter] = useState("");
  const [rating, setRating] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  function handleRating(event) {
    const value = event.target.value;

    if (
      value === "" ||
      value === "1" ||
      value === "2" ||
      value === "3" ||
      value === "4" ||
      value === "5" ||
      value === "6" ||
      value === "7" ||
      value === "8" ||
      value === "9" ||
      value === "10"
    ) {
      setRating(value);
    }
  }

  function handleSubmit() {
    if (rating >= 1 && rating <= 10) {
      setShowInfo(true);
    } else {
      alert("Please enter a rating from 1 to 10.");
    }
  }

  function handleClear() {
    setName("");
    setMovie("");
    setCharacter("");
    setRating("");
    setShowInfo(false);
  }

  return (
    <div>
      <h2>Star Wars Fan Information</h2>

      <p>Name:</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <p>Favourite Star Wars Movie:</p>
      <select
        value={movie}
        onChange={(event) => setMovie(event.target.value)}
      >
        <option value="">Select a movie</option>
        <option value="A New Hope">A New Hope</option>
        <option value="The Empire Strikes Back">
          The Empire Strikes Back
        </option>
        <option value="Return of the Jedi">Return of the Jedi</option>
        <option value="The Phantom Menace">The Phantom Menace</option>
        <option value="Attack of the Clones">Attack of the Clones</option>
        <option value="Revenge of the Sith">Revenge of the Sith</option>
      </select>

      <p>Favourite Character:</p>
      <input
        type="text"
        value={character}
        onChange={(event) => setCharacter(event.target.value)}
        placeholder="Enter a character"
      />

      <p>Movie Rating:</p>
      <input
        type="text"
        value={rating}
        onChange={handleRating}
        placeholder="Enter a rating from 1 to 10"
      />

      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleClear}>Clear</button>

      {showInfo && (
        <div>
          <h3>Your Star Wars Information</h3>
          <p>Name: {name}</p>
          <p>Favourite Movie: {movie}</p>
          <p>Favourite Character: {character}</p>
          <p>Rating: {rating}/10</p>
        </div>
      )}
    </div>
  );
}

export default UserInput;