import { useParams, useNavigate } from "react-router-dom";
import { candidates } from "../data/candidates";
import { candidateDetails } from "../data/candidatesDetails";
import styles from "../styles/CandidatePage.module.css";
import { useState } from "react";

export default function CandidatePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const candidate = candidates.find((c) => c.id === Number(id));
  const details = candidateDetails.find((d) => d.id === Number(id));

  const [categoryIndex, setCategoryIndex] = useState(0);

  if (!candidate || !details) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Candidato no encontrado</h2>;
  }

  const categories = details.categories;
  const current = categories[categoryIndex];

  return (
    <div className={styles.page}>

      {/* Botón volver */}
      <button className={styles.backBtn} onClick={() => navigate("/")}>
        ← Volver
      </button>

      {/* Contenedor principal */}
      <div className={styles.container}>

        {/* Sección izquierda (Foto grande) */}
        <div className={styles.left}>
          <img src={candidate.image} alt={candidate.name} className={styles.photo} />
        </div>

        {/* Sección derecha (Nombre + descripción + categorías + propuestas) */}
        <div className={styles.right}>
          
          {/* Nombre */}
          <h1 className={styles.name}>{candidate.name}</h1>

          {/* Descripción corta opcional */}
          <p className={styles.description}>
            Aquí podría ir una descripción general del candidato, su perfil político o un resumen.
          </p>

          {/* Categorías */}
          <div className={styles.categories}>
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

          {/* Propuestas */}
          <div className={styles.proposalsBox}>
            <h2 className={styles.sectionTitle}>Propuestas</h2>

            <div className={styles.proposalsScroll}>
              {current.proposals.map((p, i) => (
                <p key={i} className={styles.proposal}>• {p}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
