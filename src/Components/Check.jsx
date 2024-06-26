import React from "react";
import './check.css'

function Check(props) {
  return (
    <>
      <button className="check" onClick={props.btnch}>Check!</button>
    </>
  );
}

export default Check;
