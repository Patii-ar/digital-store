import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageRoutes from "./routes/Routes";
import "./css/App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setIsModalOpen(true);
  };

  return (
    <div className="main">
      <Header
        cartItems={cartItems}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      <PageRoutes onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
};

export default App;