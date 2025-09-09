import * as Dialog from "@radix-ui/react-dialog";
import styles from "./CartModal.module.scss";
import { FiShoppingCart, FiX, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import type { CartItem } from "../constant/Cart";

interface CartModalProps {
  cartItems: CartItem[];
  onRemoveFromCart: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartModal = ({
  cartItems,
  onRemoveFromCart,
  onUpdateQuantity,
}: CartModalProps) => {
  // Подсчет общей суммы
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.painting.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.cartButton} aria-label="Открыть корзину">
          <FiShoppingCart />
          {totalItems > 0 && (
            <span className={styles.cartCounter}>{totalItems}</span>
          )}
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
                  <div className={styles.itemInfo}>
                    <h4>{item.painting.name}</h4>
                    <p>{item.painting.price} руб.</p>
                    <div className={styles.quantityControls}>
                      <button
                        className={styles.quantityButton}
                        onClick={() =>
                          onUpdateQuantity(item.painting.id, item.quantity - 1)
                        }
                      >
                        <FiMinus />
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button
                        className={styles.quantityButton}
                        onClick={() =>
                          onUpdateQuantity(item.painting.id, item.quantity + 1)
                        }
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                  <button
                    className={styles.removeButton}
                    onClick={() => onRemoveFromCart(item.painting.id)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className={styles.total}>
            <p>
              Итого: {totalPrice} руб. ({totalItems} шт.)
            </p>
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
