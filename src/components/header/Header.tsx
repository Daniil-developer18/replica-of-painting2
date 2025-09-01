import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { FiShoppingCart } from "react-icons/fi";
// import { useState } from "react";
import MobileMenu from "../mobile-menu/MobileMenu";
import { ROUTES } from "../constant/Routes";

const Header = () => {
  const location = useLocation();
  // const [cartItems, setCartItems] = useState(0);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Replica of Paintings</div>
      <nav className={styles.nav}>
        <Link
          to={ROUTES.REPRODUCTION}
          className={classNames(styles.navLink, {
            [styles.active]: location.hash === "#reproduction",
          })}
        >
          Репродукция
        </Link>
        <Link
          to={ROUTES.NEW}
          className={classNames(styles.navLink, {
            [styles.active]: location.hash === "#new",
          })}
        >
          Новинки
        </Link>
        <Link
          to={ROUTES.ABOUT}
          className={classNames(styles.navLink, {
            [styles.active]: location.hash === "#about",
          })}
        >
          О нас
        </Link>
      </nav>
      <div className={styles.actions}>
        <div className={styles.cart}>
          <button className={styles.cartButton} aria-label="Открыть корзину">
            <FiShoppingCart />
          </button>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};

export default Header;
