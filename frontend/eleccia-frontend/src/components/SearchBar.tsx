import React from "react";
import styles from "../styles/SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  width?: string; // ⭐ NUEVA PROP
}

export default function SearchBar({ value, onChange, placeholder, width }: SearchBarProps) {
  return (
    <div
      className={styles.searchWrapper}
      style={{ width: width ?? "100%" }} // ⭐ CONTROL DINÁMICO DE WIDTH
    >
      <span className={styles.icon}>⌕</span>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Buscar..."}
      />
    </div>
  );
}
