import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./produto.module.css";

export default function ProdutoDetalhe() {
  const [produto, setProduto] = useState({});
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  useEffect(() => {
    if (!id) return;
    try {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduto(data));
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  console.log(produto);

  const price = produto.price;
  const title = produto.title;
  const description = produto.description;
  const image = produto.imagem;

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backButton}>
        Voltar
      </Link>

      <div className={styles.productWrapper}>
        {/* Seção da Imagem */}
        <div className={styles.imageSection}>
          <img src={image} alt={title} className={styles.image} />
        </div>

        {/* Seção das Informações */}
        <div className={styles.infoSection}>
          <div>
            <span className={styles.badge}>Produto</span>
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.priceContainer}>
              <span className={styles.price}></span>
              <p className={styles.installments}>ou 10x de sem juros</p>
            </div>

            <div className={styles.descriptionSection}>
              <h2 className={styles.sectionTitle}>Descrição</h2>
              <p className={styles.description}>{description}</p>
            </div>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.buyButton}
              onClick={() =>
                alert(`Produto "${title}" adicionado ao carrinho!`)
              }
            >
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
