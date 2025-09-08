import styles from "./PaintingCard.module.scss";
import type { Painting } from "../constant/Painting";

interface PaintingCardProps {
  painting: Painting;
  onAddToCart: (painting: Painting) => void;
}

const PaintingCard = ({ painting, onAddToCart }: PaintingCardProps) => {
  return (
    <div className={styles.paintingCard}>
      <img
        src={painting.image}
        alt={`${painting.author} - ${painting.name}`}
        className={styles.paintingImage}
      />
      <p className={styles.paintingAuthor}>{painting.author}</p>
      <p className={styles.paintingName}>{painting.name}</p>
      <p className={styles.paintingMaterial}>{painting.material}</p>

      <p className={styles.paintingPrice}>{painting.price} руб.</p>
      <button
        className={styles.paintingButton}
        onClick={() => onAddToCart(painting)}
      >
        В корзину
      </button>
    </div>
  );
};

export default PaintingCard;
