import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import styles from "../styles/SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  width?: string;
  results?: { id: number; name: string }[];
  onSelect?: (id: number) => void;
}

export default function SearchBar({
  value,
  onChange,
  placeholder,
  width,
  results = [],
  onSelect
}: SearchBarProps) {

  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset highlight when results change
  useEffect(() => {
    setHighlightedIndex(0);
  }, [results]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!results.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev + 1 < results.length ? prev + 1 : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev - 1 >= 0 ? prev - 1 : results.length - 1
      );
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const selected = results[highlightedIndex];
      if (selected && onSelect) {
        onSelect(selected.id);
      }
    }
  };

  return (
    <div className={styles.wrapper} style={{ width }}>
      <div className={styles.searchWrapper}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "Buscar candidato..."}
          onKeyDown={handleKeyDown}
        />
        <Search className={styles.icon} size={18} />
      </div>

      {/* Dropdown */}
      {value.trim() !== "" && results.length > 0 && (
        <div className={styles.dropdown}>
          {results.map((c, i) => (
            <div
              key={c.id}
              className={`${styles.dropdownItem} ${
                highlightedIndex === i ? styles.activeItem : ""
              }`}
              onMouseEnter={() => setHighlightedIndex(i)}
              onClick={() => onSelect && onSelect(c.id)}
            >
              {c.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
