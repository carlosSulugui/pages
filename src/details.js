import React from "react";
import { useParams } from "react-router-dom";
import "./cardContent.css";
import ReactPlayer from 'react-player'


export const Details = ({ data }) => {
  const { title } = useParams();

  return (
    <>
      {data
        .filter((card) => card.title === title)
        .map((card, index) => (
          <div key={index}>
            <section className="card">
              <h3 className="title">{
  
              card.title
              }</h3>
              <ReactPlayer className="video" url={card.url} width="100%"/>
              <p className="content">{card.content}</p>
            </section>
          </div>
        ))}
    </>
  );
};
