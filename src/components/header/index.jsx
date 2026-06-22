import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/">
        Inicio
      </Link>
      <Link className={styles.link} href="/adicionarProduto">
        Adicionar Produto
      </Link>
    </div>
  );
}
