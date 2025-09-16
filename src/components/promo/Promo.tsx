import styles from "./Promo.module.scss";

const Promo = () => {
  return (
    <div className={styles.promo} id="new">
      <img className={styles.promoImage} src="/promo.png" alt="Новинки" />
      <div className={styles.promoTextOverlay}>
        <h2 className={styles.promoTitle}>
          Новая коллекция французских авторов
        </h2>
        <p className={styles.promoMainText}>
          Сложно сказать, почему акционеры крупнейших компаний призывают нас к
          новым свершениям, которые, в свою очередь, должны быть заблокированы в
          рамках своих собственных рациональных ограничений.
          <br />
          <br />
          Принимая во внимание показатели успешности, граница обучения кадров
          предопределяет высокую востребованность направлений прогрессивного
          развития.
        </p>

        <a
          href="https://example.com"
          className={styles.promoButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ознакомиться
        </a>
      </div>
    </div>
  );
};

export default Promo;
