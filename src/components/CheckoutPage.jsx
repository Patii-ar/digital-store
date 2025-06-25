import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Checkout.css";
import Confirmation from "./Confirmation"; 

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [data, setData] = useState({
    cartItems: [],
    subtotal: 0,
    frete: 0,
    total: 0,
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(() => {
    return localStorage.getItem("checkout_paymentMethod") || "cartao";
  });

  useEffect(() => {
    if (state?.cartItems?.length > 0) {
      setData(state);
    } else {
      const stored = {
        cartItems: JSON.parse(localStorage.getItem("checkout_cart")) || [],
        subtotal: parseFloat(localStorage.getItem("checkout_subtotal")) || 0,
        frete: parseFloat(localStorage.getItem("checkout_frete")) || 0,
        total: parseFloat(localStorage.getItem("checkout_total")) || 0,
      };
      setData(stored);
    }
    setIsLoaded(true);
  }, [state]);

  useEffect(() => {
    localStorage.setItem("checkout_paymentMethod", paymentMethod);
  }, [paymentMethod]);

  const { cartItems, total } = data;

  if (!isLoaded) return null;

  if (orderComplete) {
    const order = {
      name: "",
      cpf: "",
      email: "",
      phone: "",
      address: "",
      neighborhood: "",
      city: "",
      cep: "",
      cardHolder: "",
      cardEnd: "",
      products: cartItems,
      total: total,
    };

    return <Confirmation order={order} />;
  }

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-bold mb-4">Seu carrinho está vazio</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-pink-600 text-white px-4 py-2 rounded"
        >
          Voltar para loja
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderComplete(true);
    localStorage.clear();
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 md:px-12">
      {/* FORMULÁRIO */}
      <form onSubmit={handleSubmit} className="flex-1 bg-white rounded-xl shadow p-formulario">
        <h2 className="text-xl font-semibold mb-4">Informações Pessoais</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <input placeholder="Nome Completo" className="input" required />
          <input placeholder="CPF" className="input" required />
          <input placeholder="Email" className="input" required />
          <input placeholder="Celular" className="input" required />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4">Endereço de Entrega</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <input placeholder="Endereço" className="input" required />
          <input placeholder="Bairro" className="input" required />
          <input placeholder="Cidade" className="input" required />
          <input placeholder="CEP" className="input" required />
          <input placeholder="Complemento" className="input md:col-span-1" />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4">Pagamento</h2>
        <div className="flex items-center gap-4 mb-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="cartao"
              checked={paymentMethod === "cartao"}
              onChange={() => setPaymentMethod("cartao")}
            />
            Cartão de Crédito
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="boleto"
              checked={paymentMethod === "boleto"}
              onChange={() => setPaymentMethod("boleto")}
            />
            Boleto Bancário
          </label>
        </div>

        {paymentMethod === "cartao" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Número do Cartão" className="input" required />
            <input placeholder="Validade do Cartão" className="input" required />
            <input placeholder="Nome no Cartão" className="input" required />
            <input placeholder="CVV" className="input" required />
          </div>
        )}

        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-bold text-rose-600">R$ {total.toFixed(2)}</span>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 mt-4 rounded-xl"
        >
          Realizar Pagamento
        </button>
      </form>

      {/* RESUMO */}
      <div className="w-full md:w-1/3 bg-white rounded-xl shadow p-resumo h-fit">
        <h3 className="text-lg font-semibold mb-4">RESUMO</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 mb-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
            <div>
              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-xs">Qtd: {item.quantity}</p>
              <p className="text-sm font-bold text-gray-800">
                R$ {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}

        <div className="border-t pt-4 text-sm">
          <div className="flex justify-between mb-1">
            <span>Subtotal</span>
            <span>R$ {(total - 10).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Frete</span>
            <span>R$ 10,00</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="text-rose-600">R$ {total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 mt-6 rounded-xl"
        >
          Finalizar Pagamento
        </button>
      </div>
    </div>
  );
}
