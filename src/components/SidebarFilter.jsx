import { useState } from "react";
import "../css/SidebarFilter.css";

const brands = ["Adiddas", "K-Swiss", "Nike", "Puma"];
const categories = ["Esportes e lazer", "Casual"];

export default function SidebarFilter () {
    const [selectedBrands, setSelectBrands] = useState (["Adiddas", "K-Swiss"]);
    const [selectedCategories, setSelectedCategories] = useState(["Esporte e lazer"]);

    const handleToggle = (value, setFn, selected) => {
        setFn(
            selected.includes(value)
                ? selected.filter((v) => v !== value)
                : [...selected, value]
        );
    };

    return (
        <aside className="sidebar-container w-full md:w-64 bg-white rounded-lg shadow text-sm">
            <h2 className="mb-6">Filtrar por </h2>

            <div className="sidebar-section">
                <h3 className="font-medium">Marca</h3>
                <div className="space-y-2">
                    {brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-2">
                            <input 
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleToggle(brand, setSelectBrands, selectedBrands)} className="accent-pink-600 w-4 h-4" />
                            <span>{brand}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="font-medium mb-2">Categoria</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center gap-2">
                            <input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => handleToggle(category, setSelectedCategories, selectedCategories)}
                            className="accent-pink-600 w-4 h-4" />
                            <span>{category}</span> 
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    )
}