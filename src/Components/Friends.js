import React, { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiUrl from "../apiURL";

const Friends = () => {
  const [activity, setActivity] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [movie, setMovie] = useState("");
  const [toggleAlertContent, setAlertContent] = useState(false);
  const navigate = useNavigate();

  const sendEntry = useCallback((body) => {
    // Setting the POST request options to be used in the POST request
    const postRequestOP = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    // Calling the POST request
    fetch(`${apiUrl}/friends`, postRequestOP)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => {
        setAlertContent(false);
      })
      .catch(() => console.log("error"));
      setActivity("")
      setRestaurant("")
      setMovie("")
  }, []);

  // function to handle the submit button event
  const handleSubForm = useCallback(
    (e) => {
      e.preventDefault();

      sendEntry({
        Activity: activity,
        Restaurant: restaurant,
        Movie: movie,
      });

      // toggleConfirmContent();
      // navigate("/vote");
    },
    [activity, restaurant, movie, sendEntry]
  );

  const toggleConfirmContent = () => {
    setAlertContent(true);
  };

  function searchHandlerActivity(event) {
    setActivity(event.target.value);
  }
  function searchHandlerRestaurant(event) {
    setRestaurant(event.target.value);
  }
  function searchHandlerMovie(event) {
    setMovie(event.target.value);
  }


  return (
    <div>
      <br />
      <h1>Plan With Friends</h1>
      <br />
      <h2>Suggest an Activity</h2>
      <form onSubmit={handleSubForm}>
        <input
          value={activity}
          type="activity"
          placeholder="Suggest an activity"
          onChange={searchHandlerActivity}
        />
        <h2>Suggest a Restaurant</h2>
        <input
          value={restaurant}
          type="restaurant"
          placeholder="Suggest a restaurant"
          onChange={searchHandlerRestaurant}
        />
        <h2>Suggest a Movie</h2>
        <input
          value={movie}
          type="movie"
          placeholder="Suggest a movie"
          onChange={searchHandlerMovie}
        />
        <br />
        {/* <Link to="/vote"> */}
        {/* onClick={() => {navigate("/vote")}} */}
        {/* <input className="suggest" type="submit" value="Add Suggestions" /> */}
        <button className="suggest" type="submit">Suggestions</button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Friends;
