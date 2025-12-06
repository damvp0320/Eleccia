import { useState } from "react";
import { candidates } from "../data/candidates";
import type { Candidate } from "../data/candidates";
import styles from "../styles/Carousel.module.css";
import CandidateModal from "./ModalCandidate";
import SearchBar from "./SearchBar";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animationKey, setAnimationKey] = useState(0);

  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [search, setSearch] = useState("");


  const total = candidates.length;

  const next = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % total);
    setAnimationKey((prev) => prev + 1);
  };

  const prev = () => {
    setDirection("left");
    setIndex((prev) => (prev - 1 + total) % total);
    setAnimationKey((prev) => prev + 1);
  };

  const current = candidates[index];
  const left = candidates[(index - 1 + total) % total];
  const right = candidates[(index + 1) % total];

  return (
    <>
      <div className={styles.carouselContainer}>
        <h1 className={styles.candidateName}>{current.name}</h1>

        <div className={styles.wheel} key={animationKey}>
          
          {/* Left */}
          <div className={`${styles.sideWrapper} ${styles.left}`}>
            <img
              src={left.image}
              alt={left.name}
              className={`${styles.sideImage} ${styles.left} ${
                direction === "left" ? styles.animateRight : styles.animateLeft
              }`}
            />
          </div>

          {/* Main */}
          <div className={styles.mainWrapper}>
            <div className={styles.imageContainer}>
              <img
                src={current.image}
                alt={current.name}
                className={`${styles.mainImage} ${
                  direction === "left" ? styles.slideRight : styles.slideLeft
                }`}
                onClick={() => setSelectedCandidate(current)} // <-- abre modal
              />
            </div>
          </div>

          {/* Right */}
          <div className={`${styles.sideWrapper} ${styles.right}`}>
            <img
              src={right.image}
              alt={right.name}
              className={`${styles.sideImage} ${styles.right} ${
                direction === "left" ? styles.animateRight : styles.animateLeft
              }`}
            />
          </div>
        </div>
        <div className={styles.controlsContainer}>
          <div className={styles.searchBarContainer}>
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Buscar candidato..."
              width="300px"
            />
          </div>
          <div className={styles.buttons}>
            <button onClick={prev} className={styles.button}>←</button>
            <button onClick={next} className={styles.button}>→</button>
          </div>
        </div>
      </div>
      {/* MODAL */}
      {selectedCandidate && (
        <CandidateModal
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </>
  );
}
