import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { ROUTES } from "../../config/constant/Routes";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <Dialog.Trigger asChild>
        <button className={styles.mobileMenuButton}>
          <FiMenu />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.mobileMenuOverlay} />
        <Dialog.Content className={styles.mobileMenuContent}>
          <button className={styles.mobileMenuClose} onClick={onClose}>
            <FiX />
          </button>
          <Link
            className={styles.mobileMenuLink}
            to={ROUTES.REPRODUCTION}
            onClick={onClose}
          >
            Репродукция
          </Link>
          <Link
            className={styles.mobileMenuLink}
            to={ROUTES.NEW}
            onClick={onClose}
          >
            Новинки
          </Link>
          <Link
            className={styles.mobileMenuLink}
            to={ROUTES.ABOUT}
            onClick={onClose}
          >
            О нас
          </Link>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileMenu;
