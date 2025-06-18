import "../css/ProductsResults.css";

const traducaoCategorias = {
  pants: "Calças",
  sneaker: "Tênis",
  tshirt: "Camisetas",
  cap: "Bonés",
  headphone: "Fones de ouvido",
};

export default function ProductsResults({
  categoriasSelecionadas,
  total,
  sortOrder,
  setSortOrder,
}) {
  const titulo =
    categoriasSelecionadas.length > 0
      ? `Resultados para “${categoriasSelecionadas
          .map((cat) => traducaoCategorias[cat] || cat)
          .join(", ")}”`
      : "Todos os produtos";

  return (
    <div className="product-container">
      <div className="product-text">
        {titulo} - {total} produtos
      </div>

      <div className="product-sort-container">
        <label className="product-label" htmlFor="ordenar">
          Ordenar por:
        </label>
        <select
          id="ordenar"
          className="product-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="relevancia">mais relevantes</option>
          <option value="menor-preco">menor preço</option>
          <option value="maior-preco">maior preço</option>
          <option value="avaliacao">melhor avaliação</option>
        </select>
      </div>
    </div>
  );
}
