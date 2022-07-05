import React, { useState } from "react";

const ListItem = (props) => {
  const [count, setCount] = useState(0);

  return (
    <li>
      <h3>
        {props.activity} {count}
      </h3>
      <button className="vote" onClick={() => setCount(count + 1)}>
        Vote
      </button>
    </li>
  );
};

export default ListItem;
