import { useState } from "react";
import "../css/CartPage.css";
import {lista} from './ProductListing';






export default function CartPage({ cartItems, onRemove, onUpdateCart }) {
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState(0);

  function handleQuantityChange(index, delta) {
    const updated = [...cartItems];
    const newQuantity = updated[index].quantity + delta;

    if (newQuantity < 1) return;
    updated[index].quantity = newQuantity;
    onUpdateCart(updated);
  }

  async function calcularFrete() {
    if (cep.length !== 8) return alert("CEP inválido");
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) return alert("CEP não encontrado");

      
      setFrete(20.0);
    } catch {
      alert("Erro ao buscar o CEP.");
    }
  }

  const subtotal = cartItems.reduce((acc, item) => {
    const precoComDesconto = item.desconto
      ? item.price * (1 - item.desconto / 100)
      : item.price;
    return acc + precoComDesconto * item.quantity;
  }, 0);

  const totalDesconto = cartItems.reduce((acc, item) => {
    return item.desconto
      ? acc + item.price * (item.desconto / 100) * item.quantity
      : acc;
  }, 0);

  const total = subtotal + (frete ?? 0);

  function getRelatedProducts(cartItems, allProducts, max = 4) {
    if (cartItems.length === 0) return [];

    const categoriasNoCarrinho = [...new Set(cartItems.map(item => item.category))];
    const idsCarrinho = new Set(cartItems.map(item => item.id));

    const relacionados = allProducts.filter(
      (p) => categoriasNoCarrinho.includes(p.category) && !idsCarrinho.has(p.id)
    );

    return relacionados.slice(0, max);
  }

    const relatedProducts = getRelatedProducts(cartItems, lista, 4);

  return (
    <div className="cart-spacing bg-gray-50">
        <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-bold uppercase mb-4 text-center bg-gray-100">MEU CARRINHO</h2>
                <div className="cart-header grid grid-cols-12 font-semibold text-sm border-b gap-2">
                    <div className="col-span-5 flex text-center">Produto</div>
                    <div className="col-span-2 flex justify-center">Quantidade</div>
                <div className="col-span-2 text-center">Unitário</div>
                <div className="col-span-3 text-right">Total</div>
            </div>

                {cartItems.map((item, index) => {
                const precoComDesconto = item.desconto
                    ? item.price * (1 - item.desconto / 100)
                    : item.price;

                return (
                    <div
                        key={index}
                        className="grid grid-cols-12 items-center py-4 border-b gap-y-4"
                    >
                        <div className="col-span-5 flex gap-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded bg-gray-100"
                            />
                            <div>
                                <p className="font-medium text-sm">{item.name}</p>
                                <p className="text-xs text-gray-500">
                                    Cor: {Array.isArray(item.cor) ? item.cor[0] : "N/A"}
                                </p>
                                <p className="text-xs text-gray-500">
                                    Tamanho: {Array.isArray(item.tamanho) ? item.tamanho[0] : "N/A"}
                                </p>
                                <button
                                    onClick={() => onRemove(index)}
                                    className="text-xs text-pink-600 underline mt-1"
                                >
                                    Remover item
                                </button>
                            </div>
                        </div>

                        <div className="col-span-2 flex justify-center items-center gap-2">
                            <button
                                className="bg-gray-200 px-2 py-1 rounded"
                                onClick={() => handleQuantityChange(index, -1)}
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                className="bg-gray-200 px-2 py-1 rounded"
                                onClick={() => handleQuantityChange(index, 1)}
                            >
                                +
                            </button>
                        </div>

                        <div className="col-span-2 text-center text-sm">
                            {item.desconto ? (
                                <>
                                    <p className="line-through text-gray-400 text-xs">R$ {item.price.toFixed(2)}</p>
                                    <p className="font-semibold">R$ {(item.price * (1 - item.desconto / 100)).toFixed(2)}</p>
                                </>
                            ) : (
                                <p className="font-semibold">R$ {item.price.toFixed(2)}</p>
                            )}
                        </div>

                        <div className="col-span-3 text-right font-medium text-sm">
                            R$ {(precoComDesconto * item.quantity).toFixed(2)}
                        </div>
                    </div>
                );
                })}

                {/* Produtos relacionados */}
                {relatedProducts.length > 0 && (
                    <div className="related-products mt-8">
                        <h3 className="text-lg font-bold mb-4 uppercase border-b pb-2">Produtos relacionados</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedProducts.map((item) => (
                                <div key={item.id} className="bg-white p-3 rounded shadow hover:shadow-lg transition cursor-pointer">
                                    <img
                                        src={item.image}
                                        alt={item.nome}
                                        className="w-full h-32 object-cover rounded mb-2"
                                    />
                                    <p className="text-sm font-medium">{item.name}</p>
                                    <p className="text-yellow-600 font-semibold">R$ {item.price.toFixed(2)}</p>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                )}


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div>
                            <label className="block font-medium text-sm mb-1">Cupom de desconto</label>
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Insira seu código"
                                    className="flex-1 border border-gray-300 px-3 py-2 rounded-l text-sm "
                                />
                                <button className="bg-gray-200 px-4 rounded-r text-sm hover:cursor-pointer">OK</button>
                            </div>
                        </div>
                        <div>
                            <label className="block font-medium text-sm mb-1">Calcular frete</label>
                            <div className="flex">
                            <input
                                type="text"
                                placeholder="Insira seu CEP"
                                maxLength={8}
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                className="flex-1 border border-gray-300 px-3 py-2 rounded-l text-sm"
                            />
                            <button
                                className="bg-gray-200 px-4 rounded-r text-sm hover:cursor-pointer "
                                onClick={calcularFrete}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* RESUMO */}
            <div className="w-full lg:w-80 bg-white rounded-lg shadow-md p-4 h-fit space-y-3">
                <h3 className="text-base font-semibold uppercase">RESUMO</h3>
                <div className="text-sm">
                    <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Frete:</span>
                        <span>R$ {frete.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Desconto:</span>
                        <span>R$ {totalDesconto.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-red-600 text-base border-t pt-2">
                        <span>Total:</span>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-500 text-xs">
                        ou 10x de R$ {(total / 10).toFixed(2)} sem juros
                    </p>
                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer text-white py-2 rounded font-semibold">
                        Continuar
                    </button>
                </div>
            </div>
        </div>

        {/* PRODUTOS RELACIONADOS */}
        <div className="mt-12">
            <h2 className="text-lg font-semibold mb-4">Produtos Relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedProducts.length > 0 ? (
                relatedProducts.map((item) => (
                    <div key={item.id} className="bg-white rounded shadow-md p-4 relative">
                        {item.desconto && (
                            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                {item.desconto}% OFF
                            </span>
                        )}
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-36 object-cover mb-2 rounded"
                        />
                        <h3 className="text-sm font-medium mb-1">{item.name}</h3>
                        <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
                        <div className="text-pink-600 font-semibold text-sm mb-2">
                            R$ {item.price.toFixed(2)}
                        </div>
                        <button className="w-full bg-pink-600 hover:bg-pink-700 hover:cursor-pointer text-white text-sm py-1 rounded">
                            Ver Produto
                        </button>
                    </div>
                ))
                ) : (
                    <p className="text-sm text-gray-500">Nenhum produto relacionado encontrado.</p>
                )}
            </div>
        </div>
    </div>
  );
}
