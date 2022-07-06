import React from 'react'
import { CardImg } from 'reactstrap'
import Swinging from "../Images/Swinging.jpeg"

const Home = () => {
  return (
    <div>
      <CardImg src={Swinging} alt="Swinging" />
    </div>
  )
}

export default Home