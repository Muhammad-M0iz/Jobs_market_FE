import React from "react";
import "./Card.css";

const Card = ({ children, bg = "" }) => {
  // Map bg prop to semantic class
  const bgClass = bg === "bg-indigo-100" ? "card-indigo" : "";
  return <div className={`card ${bgClass}`}>{children}</div>;
};

export default Card;
