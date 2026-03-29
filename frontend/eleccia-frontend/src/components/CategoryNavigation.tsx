import { useRef } from "react";
import styles from "../styles/ModalCandidate.module.css";
import type { CandidateCategory } from "../data/candidatesDetails";

interface CategoryNavigationProps {
  categories: CandidateCategory[];
  categoryIndex: number;
  onCategoryChange: (index: number) => void;
}

export default function CategoryNavigation({
  categories,
  categoryIndex,
  onCategoryChange,
}: CategoryNavigationProps) {
  const categoryRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: "left" | "right") => {
    const viewport = categoryRef.current;
    if (!viewport) return;
    viewport.scrollBy({
      left: direction === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.categoryContainer}>
      <button className={styles.navLeft} onClick={() => scrollCategories("left")}>←</button>

      <div className={styles.categoryViewport} ref={categoryRef}>
        <div className={styles.categoryTrack}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`${styles.categoryBtn} ${idx === categoryIndex ? styles.active : ""}`}
              onClick={() => onCategoryChange(idx)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <button className={styles.navRight} onClick={() => scrollCategories("right")}>→</button>
    </div>
  );
}
