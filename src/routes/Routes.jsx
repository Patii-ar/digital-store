import {Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";


export default function PageRoutes ({onAddToCart}) {
    return (
        <Routes>
            <Route path="/" element={<HomePage onAddToCart={onAddToCart}/>}/>
            <Route path="/produtos" element={<ProductListingPage onAddToCart={onAddToCart} />}/>
            <Route path="/produtos/:id" element={<ProductViewPage onAddToCart={onAddToCart} />}/>
        </Routes>
    )
}