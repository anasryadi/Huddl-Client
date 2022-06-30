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
      <div className="FriendsLink">
        <Link to="/friends">
          <Button color="primary">Plans With Friends</Button>
        </Link>
      </div>
    </div>
  );
};

export default Links;
