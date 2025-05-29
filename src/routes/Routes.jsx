import {Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";


export default function PageRoutes () {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/produtos" element={<ProductListingPage/>}/>
            <Route path="/produtos/id" element={<ProductViewPage/>}/>
        </Routes>
    )
}