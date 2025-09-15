import * as Dialog from "@radix-ui/react-dialog";
import styles from "./CartModal.module.scss";
import { FiShoppingCart, FiX, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import type { CartItem } from "../../config/interfaces/Cart";
import DeleteConfirmModal from "../delete-cart-modal/DeleteConfirmModal";

interface CartModalProps {
  cartItems: CartItem[];
  onRemoveFromCart: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onCalculateTotalPriceWithDiscount: (cartItems: CartItem[]) => number;
  onCalculateTotalQuantity: (cartItems: CartItem[]) => number;
  onCalculateDiscount: (cartItems: CartItem[]) => number;
  onDeleteAll: () => void;
}

const CartModal = ({
  cartItems,
  onRemoveFromCart,
  onUpdateQuantity,
  onCalculateTotalPriceWithDiscount,
  onCalculateTotalQuantity,
  onCalculateDiscount,
  onDeleteAll,
}: CartModalProps) => {
  // // Подсчет ПО СТАРОМУ общей суммы
  // const totalPrice = cartItems.reduce(
  //   (sum, item) => sum + item.painting.price * item.quantity,
  //   0
  // );
  // const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const priceWithDiscount = onCalculateTotalPriceWithDiscount(cartItems);
  const totalQuantity = onCalculateTotalQuantity(cartItems);
  const discount = onCalculateDiscount(cartItems);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.cartButton} aria-label="Открыть корзину">
          <FiShoppingCart />
          {totalQuantity > 0 && (
            <span className={styles.cartCounter}>{totalQuantity}</span>
          )}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.cartModalOverlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>
            <div className={styles.cart}>
              <div>Корзина</div>
              {totalQuantity >= 1 && (
                <DeleteConfirmModal onDeleteAll={onDeleteAll} />
              )}
            </div>
          </Dialog.Title>
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
              Итого: {priceWithDiscount} руб. ({totalQuantity} шт.)
            </p>
            <p style={{ fontSize: "12px", color: "red" }}>
              {totalQuantity <= 2
                ? "При заказе от 3 штук - скидка 10%"
                : `Скидка 10% применена, экономия: ${discount} руб.`}
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
