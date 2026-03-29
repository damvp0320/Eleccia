import styles from "../styles/Carousel.module.css";

interface CarouselImageProps {
  image: string;
  name: string;
  position: "left" | "center" | "right";
  direction: "left" | "right";
  onClick?: () => void;
}

export default function CarouselImage({ image, name, position, direction, onClick }: CarouselImageProps) {
  if (position === "center") {
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={name}
            className={`${styles.mainImage} ${direction === "left" ? styles.slideRight : styles.slideLeft}`}
            onClick={onClick}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.sideWrapper} ${styles[position]}`}>
      <img
        src={image}
        alt={name}
        className={`${styles.sideImage} ${styles[position]} ${
          direction === "left" ? styles.animateRight : styles.animateLeft
        }`}
      />
    </div>
  );
}
