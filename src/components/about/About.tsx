import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <img className={styles.aboutImage} src="/about.png" />
      <div className={styles.aboutText}>
        <h2 className={styles.aboutTitle}>Наша команда</h2>
        <p className={styles.aboutDescription}>
          Значимость этих проблем настолько очевидна, что базовый вектор
          развития позволяет оценить значение экспериментов, поражающих по своей
          масштабности и грандиозности. Мы вынуждены отталкиваться от того, что
          консультация с широким активом.
        </p>
        <div className={styles.teamPhotos}>
          <img src="/team1.png" alt="Команда" />
          <img src="/team2.png" alt="Команда" />
          <img src="/team3.png" alt="Команда" />
        </div>
      </div>
    </div>
  );
};

export default About;
