import React from "react";
import Spinner from "react-bootstrap/Spinner";

import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <Spinner animation="border"></Spinner>
      
    </div>
  );
};

export default Loading;
