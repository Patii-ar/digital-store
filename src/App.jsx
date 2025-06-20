import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageRoutes from "./routes/Routes";
import "./css/App.css";
import CartModal from "./components/CartModal";


export default function App()  {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddToCart(product, selectedColor, selectedSize) {
  const formattedProduct = {
    ...product,
    color: selectedColor,
    size: selectedSize,
    quantity: 1,
  };

  setCartItems((prev) => {
    const existingIndex = prev.findIndex(
      (item) =>
        item.id === formattedProduct.id &&
        item.color === formattedProduct.color &&
        item.size === formattedProduct.size
    );

    if (existingIndex !== -1) {
      const updated = [...prev];
      updated[existingIndex].quantity += 1;
      return updated;
    } else {
      return [...prev, formattedProduct];
    }
  });
}

  function handleRemoveItem(index) {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  }

  function handleUpdateCart(newItems) {
    setCartItems(newItems);
  }


  function handleClearCart() {
    setCartItems([])
  }

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="main">
      <Header onCartClick={() => setIsModalOpen(true)} cartQuantity={totalQuantity} />
      <PageRoutes 
        onAddToCart={handleAddToCart} 
        cartItems={cartItems} 
        onRemove={handleRemoveItem}
        onUpdateCart={handleUpdateCart}
      />
      <CartModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      cartItems={cartItems}
      onClearCart={handleClearCart}
      />
      <Footer />
    </div>
  );
};

