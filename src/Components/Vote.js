import React, { useEffect, useState } from "react";
import apiUrl from "../apiURL";

const Vote = () => {
  const [voteData, setVoteData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`${apiUrl}/friends`)
      .then((response) => response.json())
      .then((data) => setVoteData(data.friends))
      .catch((error) => console.log("error"));
  }, []);

  let votesMap;

  if (voteData != null) {
    votesMap = voteData.map((voteItem) => {
      console.log(voteItem);
      return (
        <li>
          <h3>
            {voteItem.Activity} {count}
          </h3>
          <button
            className="vote"
            onClick={() => setCount(count + 1)}
          >
            Vote
          </button>
        </li>
      );
    });
  }

  let votesMapActivity;

  if (voteData != null) {
    votesMapActivity = voteData.map((voteItem) => {
      console.log(voteItem);
      return (
        <li>
          <h3>{voteItem.Restaurant}</h3>
        </li>
      );
    });
  }

  let votesMapMovies;

  if (voteData != null) {
    votesMapMovies = voteData.map((voteItem) => {
      console.log(voteItem);
      return (
        <li>
          <h3>{voteItem.Movie}</h3>
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Vote !</h1>
      <h2>Activities</h2>
      <ul>{votesMap}</ul>
      <h2>Restaurants</h2>
      <ul>{votesMapActivity}</ul>
      <h2>Movies</h2>
      <ul>{votesMapMovies}</ul>
    </div>
  );
};

export default Vote;
