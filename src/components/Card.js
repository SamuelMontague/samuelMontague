import React from "react";

export default function Card(props) {
  return (
    <div className="container text-center justify-content-center projectsection col-2-md">
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <div alt="project" className="card-image">{props.image}</div>
        <div className="card-repo ">{props.repository}</div>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}
