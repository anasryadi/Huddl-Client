import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Links = () => {
  return (
    <div>
      <nav>
        <div className="nameItem">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <div className="BlueButton">
        <div className="down">
        <Link to="/friends">
          <Button color="primary">Plans With Friends</Button>
        </Link>
        </div>
        <br />
        <div className="down">
        <Link to="/date">
          <Button color="primary">Plans On A Date</Button>
        </Link>
        </div>
        <br />
        <div className="down">
        <Link to="/trip">
          <Button color="primary">Plans While On A Trip</Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;
