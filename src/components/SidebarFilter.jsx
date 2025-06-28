import "../css/SidebarFilter.css";






export default function SidebarFilter({
  selectedBrands,
  setSelectedBrands,
  selectedCategories,
  setSelectedCategories
}) {
  const brands = ["SONY", "Hering", "PUMA", "NIKE", "ADIDAS", "Hosek", "Cloth", "DOPE", "Ovrnight", "New Era", "JBL", "APPLE", "Audio-Technica", "Disorder"];
  const categories = ["pants", "sneaker", "tshirt", "cap", "headphone"];

  const handleToggle = (value, selected, setFn) => {
    setFn(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);       
    setSelectedCategories([]);   
  };

  return (
    <aside className="sidebar-container">
      <h2>Filtrar por</h2>

      
      <div className="sidebar-section">
        <h3>Marca</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="sidebar-checkbox">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleToggle(brand, selectedBrands, setSelectedBrands)}
              />
              <span className="capitalize">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      
        <div className="sidebar-section">
            <h3>Categoria</h3>
            <div className="space-y-2">
                {categories.map((category) => (
                    <label key={category} className="sidebar-checkbox">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleToggle(category, selectedCategories, setSelectedCategories)}
                        />
                        <span className="capitalize">{category}</span>
                    </label>
                ))}
            </div>
        </div>
        <button onClick={clearFilters} className="sidebar-clear">Limpar Filtros</button>
    </aside>
  );
}
