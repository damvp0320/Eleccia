import { Flag, Eye, FileText, GitCompare, Users } from "lucide-react";
import styles from "../styles/AcercaDe.module.css";

const features = [
  {
    icon: <FileText size={36} />,
    title: "Clara",
    description: "Presentamos las propuestas de cada candidato de forma directa, sin tecnicismos ni lenguaje político complejo.",
  },
  {
    icon: <Eye size={36} />,
    title: "Visual",
    description: "Diseño intuitivo que facilita la exploración y el entendimiento de las ideas de cada candidato presidencial.",
  },
  {
    icon: <GitCompare size={36} />,
    title: "Comparativa",
    description: "Compara las propuestas de diferentes candidatos por categoría para tomar una decisión más informada.",
  },
];

export default function AcercaDePage() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <span className={styles.accentIcon}><Flag size={48} /></span>
        <h1 className={styles.title}>Acerca de Eleccia</h1>
        <p className={styles.subtitle}>
          Plataforma web que presenta las propuestas de los candidatos presidenciales
          de forma <strong>clara</strong>, <strong>visual</strong> y <strong>sencilla</strong>.
        </p>
      </section>

      <section className={styles.mission}>
        <span className={styles.missionIcon}><Users size={28} /></span>
        <p className={styles.missionText}>
          Nuestro objetivo es ayudar a los ciudadanos a entender y comparar las ideas
          de cada candidato sin tecnicismos ni información dispersa, promoviendo
          decisiones electorales más informadas.
        </p>
      </section>

      <section className={styles.cards}>
        {features.map((f) => (
          <div key={f.title} className={styles.card}>
            <span className={styles.accentIcon}>{f.icon}</span>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardText}>{f.description}</p>
          </div>
        ))}
      </section>

    </div>
  );
}
