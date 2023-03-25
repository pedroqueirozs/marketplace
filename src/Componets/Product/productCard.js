import * as React from "react";
import "./product.css";
export default function Product({ data }) {
  return (
    <>
      <div className="cardIten">
        <img src={data.image}></img>
        <p>{data.name} </p>
        <p>{data.price} </p>
        <p>{data.description} </p>
      </div>
    </>
  );
}
