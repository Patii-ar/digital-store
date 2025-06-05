import { Link } from "react-router-dom";
import "../css/ProductListing.css";
import tenis1 from "../public/shoes-images/tenis1.svg";

const lista = [
  { id: 1, nome: "K-Swiss V8 - Masculino", imagem: tenis1, precoOriginal: 200, precoAtual: 100, desconto: "30% OFF" },
  { id: 2, nome: "K-Swiss V8 - Masculino", imagem: tenis1, precoOriginal: 200, precoAtual: 100, desconto: "30% OFF" },
  { id: 3, nome: "K-Swiss V8 - Masculino", imagem: tenis1, precoOriginal: 200, precoAtual: 100 },
  { id: 4, nome: "K-Swiss V8 - Masculino", imagem: tenis1, precoOriginal: 190, precoAtual: 150 },
  { id: 5, nome: "K-Swiss V8 - Masculino", imagem: tenis1, precoOriginal: 200, precoAtual: 100, desconto: "30% OFF" },
  { id: 6, nome: "K-Swiss V8 - Masculino", imagem: tenis1, precoOriginal: 200, precoAtual: 100, desconto: "30% OFF" },
  { id: 7, nome: "K-Swiss V8 - Masculino", imagem: tenis1, precoOriginal: 200, precoAtual: 100 },
  { id: 8, nome: "K-Swiss V8 - Masculino", imagem: tenis1, precoOriginal: 190, precoAtual: 150 },
];

export function ProductListing() {
  return (
    <section className="product-listing">
    
      <div className="header flex justify-between items-center">
        <h2 className="title text-xl font-bold text-gray-800">Produtos em alta</h2>
        <Link
          to="/produtos"
          className="view-all text-pink-600 hover:underline flex items-center font-medium"
        >
          Ver todos <span className="ml-1">→</span>
        </Link>
      </div>

      <div className="products-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {lista.map((produto) => (
          <div
            key={produto.id}
            className="product-card rounded shadow-md hover:shadow-lg transition relative"
          >
            <div className="image-container">
              {produto.desconto && (
                <span className="badge absolute bg-lime-200 text-[10px] font-bold">
                  {produto.desconto}
                </span>
              )}
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="product-image object-contain mx-auto"
              />
            </div>

            <div className="card-text;
">
              <p className="category text-xs text-gray-400">Tênis</p>
              <h3 className="product-name font-semibold text-sm">{produto.nome}</h3>

                {produto.precoOriginal && (
                  <span className="original-price text-gray-400 line-through text-sm">
                    ${produto.precoOriginal}
                  </span>
                )}
                <span className="current-price font-bold text-sm">
                  ${produto.precoAtual}
                </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
