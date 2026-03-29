import styles from "../styles/ModalCandidate.module.css";

interface ProposalsListProps {
  proposals: string[];
}

export default function ProposalsList({ proposals }: ProposalsListProps) {
  return (
    <div className={styles.proposalsScroll}>
      {proposals.map((p, idx) => (
        <p key={idx} className={styles.proposal}>• {p}</p>
      ))}
    </div>
  );
}
