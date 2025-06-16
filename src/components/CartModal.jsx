import "../css/CartModal.css";



export default function CartModal({ isOpen, onClose, cartItems }) {
    if (!isOpen) return null;

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            <div className="fixed inset-0 bg-black opacity-10 z-40" onClick={onClose} />

            <div className="cart-modal">
                <h3>Meu Carrinho</h3>

                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.img} alt={item.name} />
                            <div>
                                <p className="text-sm font-medium text-gray-800">{item.name}</p>
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
                    ))}
                </div>

                <div className="cart-total">
                    <span>Valor total:</span>
                    <span className="text-pink-600 font-bold">R$ {total.toFixed(2)}</span>
                </div>

                <div className="cart-actions">
                    <button onClick={onClose} className="text-gray-500 underline hover:text-pink-600">
                        Esvaziar
                    </button>
                    <button className="bg-pink-600 text-white py-1 px-3 rounded hover:bg-pink-700 transition">
                        Ver Carrinho
                    </button>
                </div>
            </div>
        </>
    );
}
