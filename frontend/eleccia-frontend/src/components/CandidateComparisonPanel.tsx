import styles from "../styles/ModalCandidate.module.css";
import type { Candidate } from "../data/candidates";
import type { CandidateDetails } from "../data/candidatesDetails";

interface CandidateComparisonPanelProps {
  categoryName: string;
  selectedCandidates: number[];
  candidates: Candidate[];
  candidateDetails: CandidateDetails[];
  onClose: () => void;
}

export default function CandidateComparisonPanel({
  categoryName,
  selectedCandidates,
  candidates,
  candidateDetails,
  onClose,
}: CandidateComparisonPanelProps) {
  return (
    <div className={styles.compareOverlay}>
      <div className={styles.comparePanel}>
        <h3 className={styles.compareTitle}>Comparación en {categoryName}</h3>

        <div className={styles.compareList}>
          {selectedCandidates.map((id) => {
            const cand = candidates.find((c) => c.id === id);
            const candDetails = candidateDetails.find((c) => c.id === id);
            const cat = candDetails?.categories.find((c) => c.name === categoryName);

            return (
              <div key={id} className={styles.compareItem}>
                <strong>{cand?.name}</strong>
                <p>{cat?.proposals[0] ?? "Sin propuesta"}</p>
              </div>
            );
          })}
        </div>

        <button className={styles.closeCompare} onClick={onClose}>
          Volver
        </button>
      </div>
    </div>
  );
}
