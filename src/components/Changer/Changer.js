import React from "react";

const Changer = ({ showCounter, setShowCounter }) => {
  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Show Card Container" : "Show Counter"}
      </button>
    </div>
  );
};

export default Changer;
