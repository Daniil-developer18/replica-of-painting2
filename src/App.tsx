import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Reproduction from "./components/reproduction/Reproduction";
import Promo from "./components/promo/Promo";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import type { CartItem } from "./config/interfaces/Cart";
import type { Painting } from "./config/interfaces/Painting";

function App() {
  // Состояние корзины
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  //Удаление всех товаров
  const deleteAll = () => {
    setCartItems([]);
  };

  // Изменение количества определенного товара в корзине
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter((item) => item.painting.id !== id));
    } else
      setCartItems(
        cartItems.map((item) =>
          item.painting.id === id ? { ...item, quantity: quantity } : item
        )
      );
  };

  // Функция добавления в корзину
  const addToCart = (painting: Painting) => {
    const existingItem = cartItems.find(
      (item) => item.painting.id === painting.id
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.painting.id === painting.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { painting, quantity: 1 }]);
    }
  };

  // Функция удаления в корзине товара
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => {
      const deletedItem = prevItems.filter((item) => item.painting.id != id);
      return deletedItem;
    });
  };

  // Функция подсчета количества в штуках всех товаров
  const calculateTotalQuantity = (cartItems: CartItem[]) => {
    const totalQuantity = cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    return totalQuantity;
  };

  // Функция подсчета скидки
  const calculateTotalPriceWithDiscount = (cartItems: CartItem[]) => {
    const totalQuantity = calculateTotalQuantity(cartItems);
    const totalPrice = cartItems.reduce((acc, item) => {
      return acc + item.painting.price * item.quantity;
    }, 0);
    return totalQuantity >= 3 ? totalPrice - totalPrice / 10 : totalPrice;
  };

  // Функция подсчета экономии
  const calculateDiscount = (cartItems: CartItem[]) => {
    const totalQuantity = calculateTotalQuantity(cartItems);
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.painting.price * item.quantity;
    });
    const totalPriceWithDiscount = totalPrice - totalPrice / 10;
    const discount =
      totalQuantity >= 3 ? totalPrice - totalPriceWithDiscount : 0;
    return discount;
  };

  return (
    <BrowserRouter>
      <Header
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCalculateTotalPriceWithDiscount={calculateTotalPriceWithDiscount}
        onCalculateTotalQuantity={calculateTotalQuantity}
        onCalculateDiscount={calculateDiscount}
        onDeleteAll={deleteAll}
      />
      <main>
        <Hero />
        <Reproduction onAddToCart={addToCart} />
        <Promo />
        <About />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
