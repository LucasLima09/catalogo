import React, { useId } from "react";
import styles from "./input.module.css";

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
        />
      </div>
    </div>
  );
}
