import styles from "./reproduction.module.scss";
import { useState } from "react";
import classnames from "classnames";
import { paintings } from "../../data/paintingsData";
import PaintingCard from "../painting-card/PaintingCard";
import type { Painting } from "../constant/Painting";

type Country = "France" | "Germany" | "England";

interface ReproductionProps {
  onAddToCart: (painting: Painting) => void;
}

const Reproduction = ({ onAddToCart }: ReproductionProps) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>("France");
  const filteredPaintings = paintings.filter(
    (painting) => painting.country === selectedCountry
  );

  return (
    <div className={styles.reproduction} id="reproduction">
      <div className={styles.reproductionHeader}>
        <h1 className={styles.reproductionTitle}>Репродукции</h1>
        <div className={styles.buttonsContainer}>
          <button
            className={classnames(styles.button, {
              [styles.selected]: selectedCountry === "France",
            })}
            onClick={() => setSelectedCountry("France")}
          >
            Франция
          </button>
          <button
            className={classnames(styles.button, {
              [styles.selected]: selectedCountry === "Germany",
            })}
            onClick={() => setSelectedCountry("Germany")}
          >
            Германия
          </button>
          <button
            className={classnames(styles.button, {
              [styles.selected]: selectedCountry === "England",
            })}
            onClick={() => setSelectedCountry("England")}
          >
            Англия
          </button>
        </div>
      </div>
      <div className={styles.paintingsGrid}>
        {filteredPaintings.map((painting) => (
          <PaintingCard
            key={painting.id}
            painting={painting}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Reproduction;
