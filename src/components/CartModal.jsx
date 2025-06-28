import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../css/CartModal.css";
import { FiTrash } from "react-icons/fi";



export default function CartModal({ isOpen, onClose, cartItems, onClearCart, onChangeQuantity, onRemove }) {

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => {
  const price = typeof item.price === "number" ? item.price : 1;
  const quantity = typeof item.quantity === "number" ? item.quantity : 1;
  return acc + price * quantity;
}, 0).toFixed(2);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-10 z-40" onClick={onClose} />

      <div className="cart-modal">
        <h3 className="text-lg font-bold cart-title">Meu Carrinho</h3>
        <h4 className="text-sm text-gray-600 mb-2">{totalItems} item(s) no carrinho</h4>

        <div className="max-h-72 overflow-y-auto cart-items">
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">Seu carrinho está vazio.</p>
          ) : (

            cartItems.map((item, index) => (
              <div key={index} className="flex gap-4 border-b cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain rounded bg-gray-100"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    Cor: <strong>{item.color}</strong> | Tamanho: <strong>{item.size}</strong>
                  </p>
                  <div className="flex gap-2 items-center mt-1">
                    <button
                      onClick={() => onChangeQuantity(index, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-2 rounded hover:bg-gray-200 hover:cursor-pointer"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => onChangeQuantity(index, item.quantity + 1)}
                      className="px-2 rounded hover:bg-gray-200 hover:cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm font-semibold mt-1">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </p>
                  {item.oldPrice && (
                    <p className="text-xs text-gray-400 line-through mt-[2px]">
                      R$ {(item.oldPrice * item.quantity).toFixed(2)}
                    </p>
                  )}
                  
                </div>
                <button
                    onClick={() => onRemove(index)}
                    className="relative items-center text-gray-400 hover:text-pink-600 hover:cursor-pointer transition"
                    aria-label="Remover item"
                  >
                    <FiTrash className="text-lg" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-between items-center text-sm font-medium cart-total">
          <span>Valor total:</span>
          <span className="text-pink-600 font-bold">R$ {total}</span>
        </div>

        <div className="flex justify-between items-center cart-actions">
          <button onClick={onClearCart} className="text-gray-500 underline hover:text-pink-600 hover:cursor-pointer">
            Esvaziar
          </button>
          <button
            onClick={() => {
              onClose();
              navigate("/carrinho");
            }}
            className="bg-pink-600 text-white rounded hover:bg-pink-700 hover:cursor-pointer transition cart-button"
          >
            Ver Carrinho
          </button>
        </div>
      </div>
    </>
  );
}
