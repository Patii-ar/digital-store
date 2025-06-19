import "../css/CartPage.css"



export default function CartPage ({cartItems, onRemove}) {
    const subtotal = cartItems.reduce((acc, item) => {
        const precoComDesconto = item.desconto
            ? item.price * (1 - item.desconto / 100)
            : item.price;
        return acc + precoComDesconto;
}, 0);

    const totalDesconto = cartItems.reduce((acc, item) => {
        return item.desconto
            ? acc + item.price * (item.desconto / 100)
            : acc;
    }, 0);
    
    const shipping = 0;
    const total = subtotal;

    return (
        <div className="cart-spacing bg-gray-50">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 bg-white rounded-lg shadow-md cart-padding">
                    <h2 className="text-lg font-semibold mb-4">MEU CARRINHO</h2>
                    <div className="grid grid-cols-12 font-semibold text-sm border-b py-2">
                         <div className="col-span-5">Produto</div>
                        <div className="col-span-2 text-center">Quantidade</div>
                        <div className="col-span-2 text-center">Unitário</div>
                        <div className="col-span-3 text-right">Total</div>
                    </div>
                    {cartItems.map((item, index) => {
                        const precoComDesconto = item.desconto
                            ? item.price * (1 - item.desconto / 100)
                            : item.price;

                        return (
                            <div key={index} className="grid grid-cols-12 items-center cart-item-spacing border-b">
                                <div className="col-span-5 flex gap-4">
                                    <img src={item.image} alt={item.nome} className="w-20 h-20 object-cover rounded bg-gray-100" />
                                    <div>
                                        <p className="font-medium">{item.nome}</p>
                                        <p className="text-xs text-gray-500">Cor: {item.cor.join(" / ")}</p>
                                        <p className="text-xs text-gray-500">Tamanho: {item.tamanho[0]}</p>
                                        <button onClick={() => onRemove(index)} className="text-xs text-pink-600 underline mt-1">
                                            Remover item
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-2 flex justify-center items-center gap-2">
                                    <button className="bg-gray-200 px-2 py-1 rounded">-</button>
                                        <span>1</span>
                                    <button className="bg-gray-200 px-2 py-1 rounded">+</button>
                                </div>
                                <div className="col-span-2 text-center">
                                    {item.desconto ? (
                                        <>
                                            <p className="line-through text-gray-400 text-xs">R$ {item.price.toFixed(2)}</p>
                                            <p className="font-semibold text-sm">R$ {precoComDesconto.toFixed(2)}</p>
                                        </>
                                    ) : (
                                        <p className="font-semibold text-sm">R$ {item.price.toFixed(2)}</p>
                                    )}
                                </div>
                                <div className="col-span-3 text-right font-medium text-sm">
                                    R$ {precoComDesconto.toFixed(2)}
                                </div>
                            </div>
                        );
                    })}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 cart-input-margin">
                        <div>
                            <label className="block font-medium text-sm mb-1">Cupom de desconto</label>
                            <div className="flex">
                                <input type="text" placeholder="Insira seu código" className="flex-1 border border-gray-300 px-3 py-2 rounded-l text-sm" />
                                <button className="bg-gray-200 px-4 rounded-r text-sm">OK</button>
                            </div>
                        </div>
                        <div>
                            <label className="block font-medium text-sm mb-1">Calcular frete</label>
                            <div className="flex">
                                <input type="text" placeholder="Insira seu CEP" className="flex-1 border border-gray-300 px-3 py-2 rounded-l text-sm" />
                                <button className="bg-gray-200 px-4 rounded-r text-sm">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-80 bg-white rounded-lg shadow-md cart-padding h-fit">
                    <h3 className="text-base font-semibold mb-4">RESUMO</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>R$ {subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Frete:</span>
                            <span>R$ {shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Desconto:</span>
                            <span>R$ {totalDesconto.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-red-600 text-base cart-summary-spacing border-t pt-2">
                            <span>Total:</span>
                            <span>R$ {total.toFixed(2)}</span>
                        </div>
                        <p className="text-gray-500 text-xs">
                            ou 10x de R$ {(total / 10).toFixed(2)} sem juros
                        </p>
                        <button className="w-full bg-yellow-400 text-white py-2 rounded font-semibold cart-summary-spacing">
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}