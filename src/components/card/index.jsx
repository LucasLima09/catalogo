import React from "react";
import Link from "next/link";
import styles from "./card.module.css";

export default function Card({ id, titulo, descricao, preco, imagem }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imagem} alt={titulo} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.description}>{descricao}</p>
        <p className={styles.price}>
          R$ {preco?.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
        <Link href={`/produto/${id}`} className={styles.button}>
          Ver mais
        </Link>
      </div>
    </div>
  );
}
