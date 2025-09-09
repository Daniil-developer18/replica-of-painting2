import styles from "./PaintingCard.module.scss";
import type { Painting } from "../constant/Painting";
import { useState } from "react";
import classnames from "classnames";

interface PaintingCardProps {
  painting: Painting;
  onAddToCart: (painting: Painting) => void;
}

const PaintingCard = ({ painting, onAddToCart }: PaintingCardProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = () => {
    onAddToCart(painting);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };
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
        className={classnames(styles.paintingButton, {
          [styles.added]: isAdded,
        })}
        onClick={handleAddToCart}
      >
        {isAdded ? "Добавлено" : "В корзину"}
      </button>
    </div>
  );
};

export default PaintingCard;
