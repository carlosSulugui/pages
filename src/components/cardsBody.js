import React from "react";
import "../global.css";
import { Link } from "react-router-dom";

export const CardBody = ({ data }) => {
  return (
    <div className="card-body">
      {data.map((content, index) => {
        return (
          <div className="card-content">
            <div key={index}>
              <h3 className="card-title">{content.title}</h3>
              <h4 className="card-subtitle">{content.subtitle}</h4>
              <img className="img-card" src={content.image}/>
              <div>
                <p className="text">{content.content}</p>
                <strong>{content.text}</strong>
                <Link to={`/details/${content.title}`}>
                  <button className="button-22">
                    ver mas
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
