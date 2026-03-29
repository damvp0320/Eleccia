import { NavLink } from "react-router-dom";
import { Share2, Camera, Users, Briefcase, Mail, MapPin } from "lucide-react";
import styles from "../styles/Footer.module.css";

const navLinks = [
  { to: "/", label: "Candidatos" },
  { to: "/comparar", label: "Comparar" },
  { to: "/propuestas", label: "Propuestas" },
  { to: "/acerca", label: "Acerca de" },
];

const socialLinks = [
  { icon: <Share2 size={20} />, href: "#", label: "X / Twitter" },
  { icon: <Camera size={20} />, href: "#", label: "Instagram" },
  { icon: <Users size={20} />, href: "#", label: "Facebook" },
  { icon: <Briefcase size={20} />, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.logo}>Eleccia</span>
          <p className={styles.tagline}>
            Decisiones electorales más informadas para todos los colombianos.
          </p>
        </div>

        {/* Nav links */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Explorar</h4>
          <ul className={styles.linkList}>
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={styles.link}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Contacto</h4>
          <ul className={styles.linkList}>
            <li className={styles.contactItem}>
              <Mail size={15} className={styles.contactIcon} />
              <span>contacto@eleccia.co</span>
            </li>
            <li className={styles.contactItem}>
              <MapPin size={15} className={styles.contactIcon} />
              <span>Colombia</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Síguenos</h4>
          <div className={styles.socials}>
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Eleccia. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
