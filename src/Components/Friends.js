import React from "react";
import { Link } from "react-router-dom";

function Friends(props) {
  return (
    <div>
      <h1>Plan With Friends</h1>
      <h2>Activity</h2>
      <input type="activity" placeholder="Suggest an activity" />
      <h2>Restaurant</h2>
      <input type="restaurant" placeholder="Suggest a restaurant" />
      <h2>Movie</h2>
      <input type="movie" placeholder="Suggest a movie" />
      <Link to="/vote">
        <input
          className="suggest"
          onClick={props.submit}
          type="submit"
          value="Submit"
        />
      </Link>
    </div>
  );
}

export default Friends;
