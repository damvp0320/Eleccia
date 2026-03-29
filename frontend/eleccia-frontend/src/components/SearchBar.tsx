import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import styles from "../styles/SearchBar.module.css";

interface SearchResult {
  id: number;
  name: string;
  image?: string;
}

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  width?: string;
  results?: SearchResult[];
  onSelect?: (id: number) => void;
}

export default function SearchBar({
  value,
  onChange,
  placeholder,
  width,
  results = [],
  onSelect,
}: SearchBarProps) {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [results]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!results.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1 < results.length ? prev + 1 : 0));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : results.length - 1));
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const selected = results[highlightedIndex];
      if (selected && onSelect) {
        onSelect(selected.id);
        onChange("");
      }
    }
  };

  return (
    <div className={styles.wrapper} style={{ width }}>
      <div className={styles.searchWrapper}>
        <Search className={styles.icon} size={20} />
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "Buscar candidato..."}
          onKeyDown={handleKeyDown}
        />
        {value && (
          <button className={styles.clearBtn} onClick={() => onChange("")}>✕</button>
        )}
      </div>

      {value.trim() !== "" && results.length > 0 && (
        <div className={styles.dropdown}>
          {results.map((c, i) => (
            <div
              key={c.id}
              className={`${styles.dropdownItem} ${highlightedIndex === i ? styles.activeItem : ""}`}
              onMouseEnter={() => setHighlightedIndex(i)}
              onClick={() => { onSelect && onSelect(c.id); onChange(""); }}
            >
              {c.image && (
                <img src={c.image} alt={c.name} className={styles.dropdownPhoto} />
              )}
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
