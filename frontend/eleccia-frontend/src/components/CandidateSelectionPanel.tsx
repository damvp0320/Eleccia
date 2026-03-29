import styles from "../styles/ModalCandidate.module.css";
import type { Candidate } from "../data/candidates";

interface CandidateSelectionPanelProps {
  categoryName: string;
  candidates: Candidate[];
  search: string;
  onSearchChange: (value: string) => void;
  selectedCandidates: number[];
  onSelectionChange: (id: number) => void;
  onCompare: () => void;
  onClose: () => void;
}

export default function CandidateSelectionPanel({
  categoryName,
  candidates,
  search,
  onSearchChange,
  selectedCandidates,
  onSelectionChange,
  onCompare,
  onClose,
}: CandidateSelectionPanelProps) {
  const filtered = candidates.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.compareOverlay}>
      <div className={styles.selectPanel}>
        <h3 className={styles.compareTitle}>Comparar categoría: {categoryName}</h3>

        <input
          type="text"
          placeholder="Buscar candidato..."
          className={styles.searchInput}
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <div className={styles.candidateList}>
          {filtered.map((cand) => {
            const checked = selectedCandidates.includes(cand.id);
            return (
              <label
                key={cand.id}
                className={`${styles.candidateItem} ${checked ? styles.selectedCandidateItem : ""}`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onSelectionChange(cand.id)}
                />
                {cand.name}
              </label>
            );
          })}
        </div>

        <button
          className={styles.compareNow}
          onClick={onCompare}
          disabled={selectedCandidates.length < 2}
        >
          Comparar ahora ({selectedCandidates.length})
        </button>

        <button className={styles.closeCompare} onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
