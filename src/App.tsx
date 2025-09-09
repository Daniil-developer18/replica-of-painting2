import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Reproduction from "./components/reproduction/Reproduction";
import Promo from "./components/promo/Promo";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import type { CartItem } from "./components/constant/Cart";
import type { Painting } from "./components/constant/Painting";

function App() {
  // Состояние корзины
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Изменение количества товара в корзине
  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.painting.id !== id);
      }
      return prevItems.map((item) =>
        item.painting.id === id ? { ...item, quantity: quantity } : item
      );
    });
  };

  // Функция добавления в корзину
  const addToCart = (painting: Painting) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.painting.id === painting.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.painting.id === painting.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { painting, quantity: 1 }];
      }
    });
  };

  // Функция удаления из корзины
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.painting.id !== id)
    );
  };
  return (
    <BrowserRouter>
      <Header
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
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
