import { useState, useEffect } from "react";
import "../css/CartPage.css";
import { lista } from "./ProductListing";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function CartPage({ cartItems, onUpdateCart }) {
  const [cep, setCep] = useState(() => localStorage.getItem("cep") || "");
  const [frete, setFrete] = useState(() => parseFloat(localStorage.getItem("frete")) || 0);
  const [freteCalculado, setFreteCalculado] = useState(false);
  const [localCartItems, setLocalCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

    useEffect(() => {
        if(cartItems && cartItems.length) {
            setLocalCartItems(cartItems);
    }
    }, [cartItems]);

  // Estados para cupom de desconto
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  const navigate = useNavigate();

  // Sincroniza localCartItems com prop cartItems
  useEffect(() => {
    if (cartItems && cartItems.length) {
      setLocalCartItems(cartItems);
    }
  }, [cartItems]);

  // Atualiza localStorage e callback pai ao mudar localCartItems
  

  useEffect(() => {
    localStorage.setItem("cep", cep);
  }, [cep]);

  useEffect(() => {
    localStorage.setItem("frete", frete);
  }, [frete]);

  // Cálculo subtotal e descontos dos produtos
  const subtotal = localCartItems.reduce((acc, item) => {
    const precoComDesconto = item.desconto
      ? item.price * (1 - item.desconto / 100)
      : item.price;
    return acc + precoComDesconto * item.quantity;
  }, 0);

  const descontoProdutos = localCartItems.reduce((acc, item) => {
    return item.desconto
      ? acc + item.price * (item.desconto / 100) * item.quantity
      : acc;
  }, 0);

  // Desconto do cupom aplica sobre subtotal menos desconto dos produtos
  const descontoCupom = (subtotal - descontoProdutos) * (couponDiscount / 100);

  // Total desconto (produtos + cupom)
  const totalDesconto = descontoProdutos + descontoCupom;

  // Total final = subtotal - descontos + frete (se calculado)
  const total = subtotal - totalDesconto + (freteCalculado ? frete : 0);

  useEffect(() => {
    localStorage.setItem("subtotal", subtotal.toFixed(2));
    localStorage.setItem("frete", frete.toFixed(2));
    localStorage.setItem("total", total.toFixed(2));
  }, [subtotal, frete, total]);

  function handleQuantityChange(index, delta) {
    const updated = [...localCartItems];
    const newQuantity = updated[index].quantity + delta;
    if (newQuantity < 1) return;
    updated[index].quantity = newQuantity;
    setLocalCartItems(updated);
  }

  function handleRemove(index) {
    const updated = [...localCartItems];
    updated.splice(index, 1);
    setLocalCartItems(updated);
  }

  async function calcularFrete() {
    const normalizedCep = cep.replace(/\D/g, "");
    if (normalizedCep.length !== 8) return alert("CEP inválido");
    try {
      const response = await fetch(`https://viacep.com.br/ws/${normalizedCep}/json/`);
      const data = await response.json();
      if (data.erro) return alert("CEP não encontrado");
      setFrete(20.0);
      setFreteCalculado(true);
    } catch {
      alert("Erro ao buscar o CEP.");
    }
  }

  // Função para validar e aplicar cupom
  function aplicarCupom() {
    const code = couponCode.trim().toUpperCase();

    // Cupons válidos e respectivos descontos
    const cuponsValidos = {
      "DESCONTO10": 10,
      "PROMO20": 20,
    };

    if (cuponsValidos[code]) {
      setCouponDiscount(cuponsValidos[code]);
      setCouponApplied(true);
      alert(`Cupom aplicado! Você ganhou ${cuponsValidos[code]}% de desconto.`);
    } else {
      setCouponDiscount(0);
      setCouponApplied(false);
      alert("Cupom inválido.");
    }
  }

  function handleProceedToCheckout() {
    localStorage.setItem("cartItems", JSON.stringify(localCartItems));
    navigate("/checkout", {
      state: {
        localCartItems,
        subtotal,
        frete: freteCalculado ? frete : 0,
        total,
        couponCode: couponApplied ? couponCode : null,
        couponDiscount,
      },
    });
  }

const idsCarrinho = localCartItems.map(i => i.id);

const categoriasCarrinho = localCartItems
  .map(i => lista.find(p => p.id === i.id)?.category)
  .filter(Boolean);

const produtosRelacionados = lista
  .filter(item =>
    categoriasCarrinho.includes(item.category) && 
    !idsCarrinho.includes(item.id)                
  )
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);

  return (
    <div className="cart-spacing bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white rounded-lg flex-col sm:flex-row shadow-md box-cart">
          <h2 className="text-lg font-bold uppercase mb-4 text-center bg-gray-100">MEU CARRINHO</h2>

          <div className="cart-header hidden  sm:grid grid-cols-12 font-semibold text-sm border-b py-3 px-2 text-gray-700">
            <div className="col-span-5">Produto</div>
            <div className="col-span-2 text-center box-text">Quantidade</div>
            <div className="col-span-2 text-center box-text">Unitário</div>
            <div className="col-span-3 text-right">Total</div>
          </div>

          {localCartItems.map((item, index) => {
            const precoComDesconto = item.desconto
              ? item.price * (1 - item.desconto / 100)
              : item.price;

            return (
              <div key={item.id} className="grid grid-cols-12 items-center py-4 border-b gap-y-4">
                <div className="col-span-5 flex gap-4 box-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded bg-gray-100"
                  />
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      Cor: <strong>{item.color}</strong>
                    </p>
                    <p className="text-xs text-gray-500">
                      Tamanho: <strong>{item.size}</strong>
                    </p>
                    <button
                      onClick={() => handleRemove(index)}
                      className="text-xs text-pink-600 underline mt-1 hover:cursor-pointer"
                    >
                      Remover item
                    </button>
                  </div>
                </div>

                <div className="col-span-2 flex justify-center items-center gap-2">
                  <button
                    className=" px-2 py-1 rounded hover:cursor-pointer"
                    onClick={() => handleQuantityChange(index, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className=" px-2 py-1 rounded hover:cursor-pointer"
                    onClick={() => handleQuantityChange(index, 1)}
                  >
                    +
                  </button>
                </div>

                <div className="col-span-2 text-center text-sm">
                  {item.desconto ? (
                    <>
                      <p className="line-through text-gray-400 text-xs">R$ {item.price.toFixed(2)}</p>
                      <p className="font-semibold">R$ {precoComDesconto.toFixed(2)}</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 box-frete-cupom">
            <div>
              <label className="block font-medium text-sm mb-1">Cupom de desconto</label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Insira seu código"
                  className="flex-1 border border-gray-300 px-3 py-2 rounded-l text-sm"
                  value={couponCode}
                  onChange={(e) => {
                    setCouponCode(e.target.value);
                    setCouponApplied(false);
                    setCouponDiscount(0);
                  }}
                  disabled={couponApplied}
                />
                <button
                  className="bg-gray-200 px-4 rounded-r text-sm hover:cursor-pointer"
                  onClick={aplicarCupom}
                  disabled={couponApplied}
                >
                  OK
                </button>
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
                  onChange={(e) => {
                    setCep(e.target.value);
                    setFreteCalculado(false);
                    setFrete(0);
                  }}
                  className="flex-1 border border-gray-300 px-3 py-2 rounded-l text-sm"
                />
                <button
                  className="bg-gray-200 px-4 rounded-r text-sm hover:cursor-pointer"
                  onClick={calcularFrete}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RESUMO */}
        <div className=" box-resume w-full sm:w-1/2 lg:w-80 bg-white rounded-lg shadow-md p-4 space-y-3 h-fit">
            <h3 className="text-base text-resume font-semibold uppercase">RESUMO</h3>
            <div className="text-sm text-box-resume space-y-2 ">
                <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                </div>

                {freteCalculado && (
                    <div className="flex justify-between">
                        <span>Frete:</span>
                        <span>R$ {frete.toFixed(2)}</span>
                    </div>
                )}

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

                <button
                    onClick={handleProceedToCheckout}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer text-white rounded font-semibold"
                >
                    Continuar
                </button>
            </div>
        </div>
    </div>

        {/* PRODUTOS RELACIONADOS */}
        <div className="mt-12">
            <h2 className="text-lg font-semibold mb-4 text-pr">Produtos Relacionados</h2>
            <ProductCard lista = {produtosRelacionados} />
        </div>
    </div>
  );
}
