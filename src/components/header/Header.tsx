import styles from "./Header.module.scss";
import { useLocation, Link } from "react-router-dom";
import classNames from "classnames";
import { useEffect } from "react";
import MobileMenu from "../mobile-menu/MobileMenu";
import { ROUTES } from "../constant/Routes";
import CartModal from "../cart-modal/CartModal";
import type { CartItem } from "../constant/Cart";

interface HeaderProps {
  cartItems: CartItem[];
  onRemoveFromCart: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const Header = ({
  cartItems,
  onRemoveFromCart,
  onUpdateQuantity,
}: HeaderProps) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

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
      <MobileMenu />
      <CartModal
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onUpdateQuantity={onUpdateQuantity}
      />
    </header>
  );
};

export default Header;
