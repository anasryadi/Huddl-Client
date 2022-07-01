import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'

const Friends = () => {

const [activity, setActivity] = useState('')
const [restaurant, setRestaurant] = useState('')
const [movie, setMovie] = useState('')
const [uploadData, setUploadData] = useState({})
const [toggleAlertContent, setAlertContent] = useState(false)

// function to handle the submit button event
const handleSubForm = (e) =>{

  console.log(e.target.form.id)

  setUploadData({
    Activity: activity,
    Restaurant: restaurant,
    Movie: movie
  })
  console.log(uploadData)

  toggleConfirmContent()
}

const toggleConfirmContent = () =>{
  setAlertContent(true)
}

  return (
    <div>
      <h1>Plan With Friends</h1>
      <h2>Activity</h2>
      <input type="activity" placeholder="Suggest an activity" />
      <h2>Restaurant</h2>
      <input type="restaurant" placeholder="Suggest a restaurant" />
      <h2>Movie</h2>
      <input type="movie" placeholder="Suggest a movie" />
      <br />
      <Link to="/vote">
        <input
          className="suggest"
          onClick={handleSubForm}
          type="submit"
          value="Submit"
        />
      </Link>
    </div>
  );
}

export default Friends;
