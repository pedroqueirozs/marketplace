import * as React from "react";
import "./product.css";
import ProductCard from "./productCard.js";
export default function Product({ data }) {
  const products = [
    {
      name: "Carregador Iphone",
      price: 1500,
      image:
        "https://images-americanas.b2w.io/produtos/4817228966/imagens/carregador-para-iphone-7-plus-com-nota-fiscal/4817228966_1_large.jpg",
      description: "Carregador de iphone",
    },
    {
      name: "Capinha para Iphone",
      price: 15.0,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_963382-MLB45197026743_032021-O.jpg",
      description: "Capinha para iphone",
    },
    {
      name: "Carregador Android",
      price: 1500,
      image: "https://m.media-amazon.com/images/I/51mTPPBgJxL._AC_SX522_.jpg",
      description: "Carregador de  android barato",
    },
    {
      name: "Fone de ouvido Android",
      price: 1200,
      image:
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/134/189/products/foto1_powertunes11-300df072d62b7fe9e816327218029616-1024-1024.png",
      description: "Fone de ouvido bluetooth",
    },
  ];
  return (
    <div className="cardContainer">
      {products.map((item, index) => (
        <ProductCard data={item} key={index} />
      ))}
    </div>
  );
}
