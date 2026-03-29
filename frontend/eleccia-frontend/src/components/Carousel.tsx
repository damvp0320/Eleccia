import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { candidates } from "../data/candidates";
import type { Candidate } from "../data/candidates";
import styles from "../styles/Carousel.module.css";
import CandidateModal from "./ModalCandidate";
import SearchBar from "./SearchBar";
import CarouselImage from "./CarouselImage";

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

  const searchResults = candidates
    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    .map((c) => ({ id: c.id, name: c.name, image: c.image }));

  const goToCandidate = (id: number) => {
    const targetIndex = candidates.findIndex((c) => c.id === id);
    if (targetIndex === index) return;
    setDirection(targetIndex > index ? "right" : "left");
    setIndex(targetIndex);
    setAnimationKey((prev) => prev + 1);
    setSearch("");
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <h1 className={styles.candidateName}>{current.name}</h1>

        <div className={styles.wheel} key={animationKey}>
          <CarouselImage image={left.image} name={left.name} position="left" direction={direction} />
          <CarouselImage
            image={current.image}
            name={current.name}
            position="center"
            direction={direction}
            onClick={() => setSelectedCandidate(current)}
          />
          <CarouselImage image={right.image} name={right.name} position="right" direction={direction} />
        </div>

        <button onClick={prev} className={`${styles.navButton} ${styles.navLeft}`}>
          <ChevronLeft size={28} />
        </button>
        <button onClick={next} className={`${styles.navButton} ${styles.navRight}`}>
          <ChevronRight size={28} />
        </button>

        <div className={styles.controlsContainer}>
          <div className={styles.searchBarContainer}>
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Buscar candidato..."
              width="460px"
              results={searchResults}
              onSelect={goToCandidate}
            />
          </div>
        </div>
      </div>

      {selectedCandidate && (
        <CandidateModal
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </>
  );
}
