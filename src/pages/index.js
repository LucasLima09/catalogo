import { useState, useEffect } from "react";
import Card from "@/components/card";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          setProdutos(data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
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

  return (
    <div className="layout">
      <Header />
      <main className="conteudo">
        {loading ? (
          <div className="carregamento">Carregando...</div>
        ) : (
          <div className="grade">{renderProdutos()}</div>
        )}
      </main>
      <Footer />
    </div>
  );
}
