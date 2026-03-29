import { useState } from "react";
import styles from "../styles/ModalCandidate.module.css";

import type { Candidate } from "../data/candidates";
import { candidates } from "../data/candidates";
import { candidateDetails } from "../data/candidatesDetails";

import CategoryNavigation from "./CategoryNavigation";
import ProposalsList from "./ProposalsList";
import OptionsButtonGroup from "./OptionsButtonGroup";
import CandidateSelectionPanel from "./CandidateSelectionPanel";
import CandidateComparisonPanel from "./CandidateComparisonPanel";

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

  const details = candidateDetails.find((c) => c.id === candidate.id);
  if (!details) return null;

  const categories = details.categories;
  const current = categories[categoryIndex];

  const toggleCandidate = (id: number) => {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const options = [
    { label: "Comparar esta categoría", onClick: () => setShowCompare(true) },
    { label: "Ver más información", onClick: () => {} },
    { label: "Exportar", onClick: () => {} },
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>

          <div className={styles.photoWrapper}>
            <img src={candidate.image} alt={candidate.name} className={styles.photo} />
          </div>

          <div className={styles.info}>
            <h2 className={styles.name}>{candidate.name}</h2>

            <CategoryNavigation
              categories={categories}
              categoryIndex={categoryIndex}
              onCategoryChange={setCategoryIndex}
            />

            <ProposalsList proposals={current.proposals} />

            <OptionsButtonGroup options={options} />

            {showCompare && !showComparison && (
              <CandidateSelectionPanel
                categoryName={current.name}
                candidates={candidates}
                search={search}
                onSearchChange={setSearch}
                selectedCandidates={selectedCandidates}
                onSelectionChange={toggleCandidate}
                onCompare={() => setShowComparison(true)}
                onClose={() => setShowCompare(false)}
              />
            )}

            {showComparison && (
              <CandidateComparisonPanel
                categoryName={current.name}
                selectedCandidates={selectedCandidates}
                candidates={candidates}
                candidateDetails={candidateDetails}
                onClose={() => setShowComparison(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
