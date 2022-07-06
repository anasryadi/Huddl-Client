import React from 'react'
import { CardImg } from 'reactstrap'
import Swinging from "../Images/Swinging.jpeg"

const Home = () => {
  return (
    <div>
      <h1>Let's Make Plans !</h1>
      <br />
      <CardImg src={Swinging} alt="Swinging" />
    </div>
  )
}

export default Home