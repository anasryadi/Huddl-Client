import React, { useState } from "react";

const ListItem = (props) => {
  const [count, setCount] = useState(0);

  return (
    <li>
      <h3>
        {props.activity}
      </h3>
      <p>Number of votes : {count}</p>
      <button className="vote" onClick={() => setCount(count + 1)}>
        Vote
      </button>
    </li>
  );
};

export default ListItem;
