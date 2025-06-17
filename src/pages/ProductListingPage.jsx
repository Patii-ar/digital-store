import { useState } from "react";
import {Link} from "react-router-dom";
import SidebarFilter from "../components/SidebarFilter";
import ProductCard from "../components/ProductCard";
import { lista } from "../components/ProductListing"; 

export default function ProductListingPage ({onAddToCart}) {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const filteredProducts = lista.filter((product) => {
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        return matchesBrand && matchesCategory;

    });

     return (
        <div className="flex spacing-px-md spacing-my-lg">
            <aside className="w-1/4 hidden md:block spacing-pr-md">
                <SidebarFilter
                    selectedBrands={selectedBrands}
                    setSelectedBrands={setSelectedBrands}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                />
            </aside>

            <section className="flex-1">
                <h1 className="text-2xl font-bold spacing-mb-md">Todos os Produtos</h1>
                <ProductCard lista={filteredProducts} onAddToCart={onAddToCart} />
            </section>
        </div>
    );
};
