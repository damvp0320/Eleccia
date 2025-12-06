import { useRef, useState } from "react";
import styles from "../styles/ModalCandidate.module.css";

import type { Candidate } from "../data/candidates";
import { candidates } from "../data/candidates";
import { candidateDetails } from "../data/candidatesDetails";

interface ModalProps {
  candidate: Candidate;
  onClose: () => void;
}

export default function CandidateModal({ candidate, onClose }: ModalProps) {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [showCompare, setShowCompare] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);

  const details = candidateDetails.find((c) => c.id === candidate.id);
  if (!details) return null;

  const categories = details.categories;
  const current = categories[categoryIndex];

  // Scroll horizontal de categorías
  const scrollCategories = (direction: "left" | "right") => {
    const viewport = categoryRef.current;
    if (!viewport) return;
    viewport.scrollBy({
      left: direction === "left" ? -150 : 150,
      behavior: "smooth"
    });
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <div className={styles.content}>

          {/* FOTO */}
          <div className={styles.photoWrapper}>
            <img src={candidate.image} alt={candidate.name} className={styles.photo} />
          </div>

          {/* INFORMACIÓN */}
          <div className={styles.info}>
            <h2 className={styles.name}>{candidate.name}</h2>

            {/* CATEGORÍAS */}
            <div className={styles.categoryContainer}>
              <button className={styles.navLeft} onClick={() => scrollCategories("left")}>←</button>

              <div className={styles.categoryViewport} ref={categoryRef}>
                <div className={styles.categoryTrack}>
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      className={`${styles.categoryBtn} ${idx === categoryIndex ? styles.active : ""}`}
                      onClick={() => setCategoryIndex(idx)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <button className={styles.navRight} onClick={() => scrollCategories("right")}>→</button>
            </div>

            {/* PROPUESTAS */}
            <div className={styles.proposalsScroll}>
              {current.proposals.map((p, idx) => (
                <p key={idx} className={styles.proposal}>• {p}</p>
              ))}
            </div>
            <div className={styles.optionsContainer}>
            <button className={styles.optionBtn} onClick={() => setShowCompare(true)}>
                Comparar esta categoría
            </button>
            <button className={styles.optionBtn}>
                Ver mas informacion
            </button>
            <button className={styles.optionBtn}>
                Exportar
            </button>
            </div>

            {/* PANEL DE SELECCIÓN DE CANDIDATOS */}
            {showCompare && !showComparison && (
              <div className={styles.compareOverlay}>
                <div className={styles.selectPanel}>

                  <h3 className={styles.compareTitle}>Comparar categoría: {current.name}</h3>

                  <input
                    type="text"
                    placeholder="Buscar candidato..."
                    className={styles.searchInput}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  <div className={styles.candidateList}>
                    {candidates
                      .filter((c) =>
                        c.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((cand) => {
                        const checked = selectedCandidates.includes(cand.id);

                        return (
                          <label
                            key={cand.id}
                            className={`${styles.candidateItem} ${
                                selectedCandidates.includes(cand.id) ? styles.selectedCandidateItem : ""
                            }`}
                            >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => {
                                setSelectedCandidates((prev) =>
                                  checked
                                    ? prev.filter((id) => id !== cand.id)
                                    : [...prev, cand.id]
                                );
                              }}
                            />
                            {cand.name}
                          </label>
                        );
                      })}
                  </div>

                  <button
                    className={styles.compareNow}
                    onClick={() => setShowComparison(true)}
                    disabled={selectedCandidates.length < 2}
                  >
                    Comparar ahora ({selectedCandidates.length})
                  </button>

                  <button className={styles.closeCompare} onClick={() => setShowCompare(false)}>
                    Cerrar
                  </button>
                </div>
              </div>
            )}

            {/* PANEL FINAL DE COMPARACIÓN */}
            {showComparison && (
              <div className={styles.compareOverlay}>
                <div className={styles.comparePanel}>
                  <h3 className={styles.compareTitle}>
                    Comparación en {current.name}
                  </h3>

                  <div className={styles.compareList}>
                    {selectedCandidates.map((id) => {
                      const cand = candidates.find((c) => c.id === id);
                      const candDetails = candidateDetails.find((c) => c.id === id);
                      const cat = candDetails?.categories.find((c) => c.name === current.name);

                      return (
                        <div key={id} className={styles.compareItem}>
                          <strong>{cand?.name}</strong>
                          <p>{cat?.proposals[0] ?? "Sin propuesta"}</p>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    className={styles.closeCompare}
                    onClick={() => setShowComparison(false)}
                  >
                    Volver
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
