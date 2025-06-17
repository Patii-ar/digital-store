import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageRoutes from "./routes/Routes";
import "./css/App.css";
import { lista } from "./components/ProductListing";
import CartModal from "./components/CartModal";

export default function App()  {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddToCart (product) {
    const formattedProduct = {
    ...product,
    image: product.img || product.image,
  };
  setCartItems((prev) => [...prev, formattedProduct]);
}


  function handleClearCart() {
    setCartItems([])
  }
  return (
    <div className="main">
      <Header onCartClick={() => setIsModalOpen(true)} cartQuantity={cartItems.length} />
      <PageRoutes onAddToCart={handleAddToCart} />
      <CartModal isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      cartItems={cartItems}
      onClearCart={handleClearCart}
      />
      <Footer />
    </div>
  );
};

