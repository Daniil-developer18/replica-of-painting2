import styles from "./Hero.module.scss";
// import classNames from "classnames";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <img src="/bird.png" alt="Bird" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titlePart1}>Реплики картин </span>
            <br />
            <span className={styles.titlePart2}> от</span>
            <span className={styles.titlePart3}> Replica of Paintings</span>
          </h1>
          <p className={styles.heroDescription}>
            Высокое качество копий картин известных художников на плотной бумаге
            или льняном холсте. Редкие произведения по доступным ценам.
          </p>
          <button className={styles.heroButton}>Продукция</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
