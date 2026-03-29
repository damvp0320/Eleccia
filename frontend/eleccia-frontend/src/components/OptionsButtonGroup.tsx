import styles from "../styles/ModalCandidate.module.css";

interface Option {
  label: string;
  onClick: () => void;
}

interface OptionsButtonGroupProps {
  options: Option[];
}

export default function OptionsButtonGroup({ options }: OptionsButtonGroupProps) {
  return (
    <div className={styles.optionsContainer}>
      {options.map((opt, idx) => (
        <button key={idx} className={styles.optionBtn} onClick={opt.onClick}>
          {opt.label}
        </button>
      ))}
    </div>
  );
}
