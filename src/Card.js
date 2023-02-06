import React from "react";
import './Card.css'

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.download_url} alt="" style={{width: "100%"}} />
        <div className="container">
        </div>
      </div>
  </>
  );
}

export default Card;
