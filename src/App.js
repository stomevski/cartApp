import react, { useState } from "react";
import Cart from "./components/Cart";
import Food from "./components/Food";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { CartProvider } from './CartContext/CartContext'

function App() {
  const [modal, setModal] = useState(false);

  const onCartClick = () => {
    setModal(true);
  }

  const onCartClickFalse = () => {
    setModal(false);
  }





  return (
    <div className="App">
      <CartProvider>
        <Header onCartClick={onCartClick} />
        <Food />
        <Cart modal={modal} setFalse={onCartClickFalse} />
      </CartProvider>
    </div>
  );
}

export default App;
