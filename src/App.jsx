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
      id: product.id,
      code: product.code,
      name: product.name,
      image: product.image,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    };

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.id === formattedProduct.id &&
          item.code === formattedProduct.code &&
          item.color === formattedProduct.color &&
          item.size === formattedProduct.size
      );

      if (existingIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
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

  function handleChangeQuantity(index, newQuantity) {
    if (newQuantity < 1) return;

    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQuantity;
      return updated;
    });
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
        onChangeQuantity={handleChangeQuantity}
        onRemove={handleRemoveItem}
      />
      <Footer />
    </div>
  );
};

