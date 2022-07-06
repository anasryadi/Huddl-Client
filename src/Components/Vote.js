import React, { useEffect, useState } from "react";
import apiUrl from "../apiURL";
import ListItem from "./ListItem";
import ListItemMovie from "./ListItemMovie";
import ListItemRestaurant from "./ListItemRes";

const Vote = () => {
  const [voteData, setVoteData] = useState(null);

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
        <ListItem activity={voteItem.Activity} />
      );
    });
  }

  let votesMapActivity;

  if (voteData != null) {
    votesMapActivity = voteData.map((voteItem) => {
      console.log(voteItem);
      return (
        <ListItemRestaurant restaurant={voteItem.Restaurant} />
      );
    });
  }

  let votesMapMovies;

  if (voteData != null) {
    votesMapMovies = voteData.map((voteItem) => {
      console.log(voteItem);
      return (
        <ListItemMovie movie={voteItem.Movie} />
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
