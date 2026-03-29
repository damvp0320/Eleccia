import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useEleccion, type EleccionType } from "../context/EleccionContext";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/Navbar.module.css";

const ELECCIONES: EleccionType[] = ["Presidencia", "Senado", "Cámara de Representantes"];

export default function Navbar() {
  const { eleccion, setEleccion } = useEleccion();
  const { isDark, toggleTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (e: EleccionType) => {
    setEleccion(e);
    setDropdownOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <span className={styles.brand}>Eleccia</span>

      <div className={styles.links}>

        <div className={styles.dropdownWrapper}>
          <button
            className={`${styles.dropdownTrigger} ${dropdownOpen ? styles.active : ""}`}
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            {eleccion} <span className={styles.caret}>▾</span>
          </button>

          {dropdownOpen && (
            <div className={styles.dropdown}>
              {ELECCIONES.map((e) => (
                <button
                  key={e}
                  className={`${styles.dropdownItem} ${e === eleccion ? styles.selectedItem : ""}`}
                  onClick={() => handleSelect(e)}
                >
                  {e}
                </button>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>
          Candidatos
        </NavLink>

        <NavLink to="/comparar" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>
          Comparar
        </NavLink>

        <NavLink to="/propuestas" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>
          Propuestas
        </NavLink>

        <NavLink to="/acerca" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>
          Acerca de
        </NavLink>

        <button className={styles.themeToggle} onClick={toggleTheme} title={isDark ? "Modo claro" : "Modo oscuro"}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      </div>
    </nav>
  );
}
