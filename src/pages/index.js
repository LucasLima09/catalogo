import { useState, useEffect } from "react";
import Card from "@/components/card";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProdutos(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderProdutos = () => {
    return produtos.map((products) => (
      <Card
        key={products.id}
        id={products.id}
        imagem={products.image}
        titulo={products.title}
        descricao={products.description}
        preco={products.price}
        categoria={products.category}
      ></Card>
    ));
  };

  return <>{renderProdutos()}</>;
}
