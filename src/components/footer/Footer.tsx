import styles from "./Footer.module.scss";
import { FaYoutube, FaVk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>Replica of Paintings</div>
          <p className={styles.footerNumber}>+7 (999) 999-99-99</p>
          <p className={styles.footerStudio}>Мастерская</p>
        </div>

        <div className={styles.footerBottomRow}>
          <div className={styles.footerReproduction}>
            <h3 className={styles.footerReproductionTitle}>Репродукция</h3>
            <div className={styles.footerReproductionButtons}>
              <a href="#">Франция</a>
              <a href="#">Германия</a>
              <a href="#">Англия</a>
            </div>
          </div>

          <div className={styles.footerNew}>
            <h3 className={styles.footerNewTitle}>Новинки</h3>
            <div className={styles.footerNewButtons}>
              <a href="#">2025</a>
              <a href="#">2024</a>
            </div>
          </div>

          <div className={styles.footerAbout}>
            <h3 className={styles.footerAboutTitle}>О нас</h3>
            <div className={styles.footerAboutButtons}>
              <a href="#">Художники</a>
              <a href="#">Менеджеры</a>
            </div>
          </div>

          <div className={styles.footerSocial}>
            <div className={styles.footerSocialIconsContent}>
              <a
                href="https://vk.com/danyaforyou"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaVk />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaYoutube />
              </a>
            </div>
            <p className={styles.copyright}>
              Replica of Paintings ® All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
