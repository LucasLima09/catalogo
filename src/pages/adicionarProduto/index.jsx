import { useState } from "react";
import Input from "@/components/input/index";
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./adicionarProduto.module.css";

export default function NovoItem() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  function criarItem() {
    const novoItem = {
      title: nome,
      price: parseFloat(valor) || 0,
      description: descricao,
    };

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoItem),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Produto criado:", data);
        alert("Produto criado com sucesso! (ID: " + data.id + ")");
        setNome("");
        setDescricao("");
        setValor("");
      });
  }

  return (
    <div className="layout">
      <Header />
      <main className="conteudo">
        <div className={styles.container}>
          <div className={styles.formCard}>
            <h2 className={styles.title}>Adicionar Produto</h2>

            <Input
              label="Nome"
              placeholder="Digite o nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <Input
              label="Descrição"
              placeholder="Digite a descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <Input
              label="Valor"
              placeholder="Digite o valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />

            <button className={styles.button} onClick={criarItem}>
              Criar Item
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
