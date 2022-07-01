import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import apiUrl from "../apiURL";

const Friends = () => {

const [activity, setActivity] = useState('')
const [restaurant, setRestaurant] = useState('')
const [movie, setMovie] = useState('')
const [uploadData, setUploadData] = useState({})
const [toggleAlertContent, setAlertContent] = useState(false)
const navigate = useNavigate()

const sendEntry = () => {
  // Setting the POST request options to be used in the POST request
  const postRequestOP = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(uploadData)
  }

// Calling the POST request
fetch(`${apiUrl}/friends`, postRequestOP)
  .then(response => response.json())
  .then(data => console.log(data))
  .then(()=>{setAlertContent(false)})
  .catch(()=> console.log('error'))
}

// function to handle the submit button event
const handleSubForm = (e) =>{
  e.preventDefault()
  console.log(e.target.form.id)

  setUploadData({
    Activity: activity,
    Restaurant: restaurant,
    Movie: movie
  })

  sendEntry()

  console.log(uploadData)

  toggleConfirmContent()
  navigate('/vote')

}



const toggleConfirmContent = () =>{
  setAlertContent(true)
}

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
      <h1>Plan With Friends</h1>
      <h2>Activity</h2>
      <form onSubmit={handleSubForm}>
      <input type="activity" placeholder="Suggest an activity" onChange={searchHandlerActivity} />
      <h2>Restaurant</h2>
      <input type="restaurant" placeholder="Suggest a restaurant" onChange={searchHandlerRestaurant} />
      <h2>Movie</h2>
      <input type="movie" placeholder="Suggest a movie" onChange={searchHandlerMovie} />
      <br />
      {/* <Link to="/vote"> */}
        <input
          className="suggest"
          // onClick={handleSubForm}
          type="submit"
          value="Submit"
        />
      {/* </Link> */}
      </form>
    </div>
  );
}

export default Friends;
