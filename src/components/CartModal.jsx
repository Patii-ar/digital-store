import { useNavigate } from "react-router-dom";
import "../css/CartModal.css";



export default function CartModal({ isOpen, onClose, cartItems }) {

  const navigate = useNavigate();

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-10 z-40" onClick={onClose} />

      <div className="cart-modal">
        <h3 className="text-lg font-bold cart-title">Meu Carrinho</h3>

        <div className="max-h-72 overflow-y-auto cart-items">
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border-b cart-item">
                <img
                  src={item.image}
                  alt={item.nome}
                  className="w-16 h-16 object-contain rounded bg-gray-100"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.nome}</p>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm font-semibold text-gray-800">
                      R$ {item.price.toFixed(2)}
                    </p>
                    {item.oldPrice && (
                      <p className="text-xs text-gray-400 line-through mt-[2px]">
                        R$ {item.oldPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-between items-center text-sm font-medium cart-total">
          <span>Valor total:</span>
          <span className="text-pink-600 font-bold">R$ {total}</span>
        </div>

        <div className="flex justify-between items-center cart-actions">
          <button onClick={onClearCart} className="text-gray-500 underline hover:text-pink-600">
            Esvaziar
          </button>
          <button
            onClick={() => {
              onClose();
              navigate("/carrinho");
            }}
            className="bg-pink-600 text-white rounded hover:bg-pink-700 transition cart-button"
          >
            Ver Carrinho
          </button>
        </div>
      </div>
    </>
  );
}
