import React from "react";

const ViewAllPredictions = ({ predictions }) => {
  if (!predictions) {
    return <div>No predictions</div>;
  }

  return (
    <div>
      {predictions.map((prediction, index) => (
        <li key={index}>{prediction.name}</li>
      ))}
    </div>
  );
};

export default ViewAllPredictions;
