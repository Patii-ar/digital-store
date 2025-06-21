import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import CartPage from "../components/CartPage";
import CriarContaSimples from "../components/CriarContaSimples";
import CriarContaCompleta from "../components/CriarContaCompleta";



export default function PageRoutes ({onAddToCart, cartItems, onRemove, onUpdateCart}) {
    return (
        <Routes>
            <Route path="/" element={<HomePage onAddToCart={onAddToCart}/>}/>
            <Route path="/criar-conta-simples" element={<CriarContaSimples />} />
            <Route path="/criar-conta" element={<CriarContaCompleta />} />  
            <Route path="/produtos" element={<ProductListingPage onAddToCart={onAddToCart} />}/>
            <Route path="/produtos/:id" element={<ProductViewPage onAddToCart={onAddToCart} />}/>
            <Route path="/carrinho" element={<CartPage cartItems={cartItems} onRemove={onRemove} onUpdateCart={onUpdateCart} />} />

        </Routes>
    )
}