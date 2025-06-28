import { useState } from "react";
import {Link} from "react-router-dom";
import SidebarFilter from "../components/SidebarFilter";
import ProductCard from "../components/ProductCard";
import { lista } from "../components/ProductListing"; 
import ProductsResults from "../components/ProductsResults";

export default function ProductListingPage ({onAddToCart}) {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOrder, setSortOrder] = useState("relevancia");

    const filteredProducts = lista.filter((product) => {
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        return matchesBrand && matchesCategory;

    })
    .sort((a, b) => {
        if (sortOrder === "menor-preco") {
            return a.price - b.price;
        } else if (sortOrder === "maior-preco") {
            return b.price - a.price;
        } else if (sortOrder === "avaliacao") {
            return b.rating - a.rating; 
        }
        return 0; 
        });    

     return (
        <div className="flex flex-col spacing-px-md spacing-my-lg"> 
            <ProductsResults
                categoriasSelecionadas={selectedCategories}
                total={filteredProducts.length}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />
            <div className="flex">
                <aside className="w-1/4 hidden md:block spacing-pr-md">
                    <SidebarFilter
                        selectedBrands={selectedBrands}
                        setSelectedBrands={setSelectedBrands}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />
                </aside>

                <section className="flex-1">
                    <ProductCard lista={filteredProducts} onAddToCart={onAddToCart} />
                </section>
            </div>
        </div>
    );
};
