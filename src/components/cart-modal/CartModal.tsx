import * as Dialog from "@radix-ui/react-dialog";
import styles from "./CartModal.module.scss";
import { FiShoppingCart, FiX, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import type { CartItem } from "../constant/Cart";

interface CartModalProps {
  cartItems: CartItem[];
  onRemoveFromCart: (id: number) => void;
}

const CartModal = ({ cartItems, onRemoveFromCart }: CartModalProps) => {
  // Подсчет общей суммы
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.painting.price * item.quantity,
    0
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.cartButton} aria-label="Открыть корзину">
          <FiShoppingCart />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.cartModalOverlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>Корзина</Dialog.Title>
          <div className={styles.cartItems}>
            {cartItems.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.painting.id} className={styles.cartItem}>
                  <img src={item.painting.image} alt={item.painting.name} />
                  <div>
                    <h4>{item.painting.name}</h4>
                    <p>
                      {item.painting.price} руб. x {item.quantity}
                    </p>
                  </div>
                  <button onClick={() => onRemoveFromCart(item.painting.id)}>
                    Удалить
                  </button>
                </div>
              ))
            )}
          </div>
          <div className={styles.total}>
            <p>Итого: {totalPrice} руб.</p>
          </div>
          <Dialog.Close asChild>
            <button className={styles.closeButton}>
              <FiX />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CartModal;