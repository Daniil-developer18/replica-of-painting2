import styles from "./Header.module.scss";
import { useLocation, Link } from "react-router-dom";
import classNames from "classnames";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import MobileMenu from "../mobile-menu/MobileMenu";
import { ROUTES } from "../constant/Routes";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);
  // const [cartItems, setCartItems] = useState(0);

  return (
    <header className={styles.header}>
      <Link
        className={styles.logo}
        to={ROUTES.HOME}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Replica of Paintings
      </Link>
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

// //     const reproductionElement = document.getElementById("reproduction");
// reproductionElement?.scrollIntoView({ behavior: "smooth" });
// };
