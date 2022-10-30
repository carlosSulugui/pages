import React from "react";
import { Route, Routes } from "react-router-dom";
import { CardBody } from "./components/cardsBody";
import { Details } from "./details";
import {data} from "./data"
import "./App.css";



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CardBody data={data}/>} />
        <Route path="/details/:title" element={<Details data={data}/>} />
      </Routes>
    </>
  );
};


export default data;