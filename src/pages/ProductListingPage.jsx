import { Link } from "react-router-dom";
import SidebarFilter from "../components/SidebarFilter";
import ProductCard from "../components/ProductCard";
import { lista } from "../components/ProductListing"; 

export default function ProductListingPage () {
     return (
        <div className="flex spacing-px-md spacing-my-lg">
            <aside className="w-1/4 hidden md:block spacing-pr-md">
                <SidebarFilter />
            </aside>

            {/* Lista de produtos */}
            <section className="flex-1">
                <h1 className="text-2xl font-bold spacing-mb-md">Todos os Produtos</h1>
                <ProductCard lista={lista} />
            </section>
        </div>
    );
};
