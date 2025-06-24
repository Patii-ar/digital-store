import { Link } from "react-router-dom";
import "../css/Confirmation.css"
export default function Confirmation({ order }) {
  if (!order) return null;
  console.log("CONFIRMATION ORDER:", order);
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md text-sm">
      <div className="text-center mb-6">
        <div className="text-3xl mb-2">🎉</div>
        <h2 className="text-xl font-bold">Compra Realizada<br />com sucesso!</h2>
      </div>

      <hr className="mb-4" />

      {/* Informações Pessoais */}
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Informações Pessoais</h3>
        <p><strong>Nome:</strong> {order.name}</p>
        <p><strong>CPF:</strong> {order.cpf}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Celular:</strong> {order.phone}</p>
      </div>

      {/* Informações de Entrega */}
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Informações de Entrega</h3>
        <p><strong>Endereço:</strong> {order.address}</p>
        <p><strong>Bairro:</strong> {order.neighborhood}</p>
        <p><strong>Cidade:</strong> {order.city}</p>
        <p><strong>CEP:</strong> {order.cep}</p>
      </div>

      {/* Informações de Pagamento */}
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Informações de Pagamento</h3>
        <p><strong>Titular do Cartão:</strong> {order.cardHolder}</p>
        <p><strong>Final:</strong> ************{order.cardEnd}</p>
      </div>

      {/* Resumo da compra */}
        <div className="mb-4">
            <h3 className="font-semibold mb-2">Resumo da compra</h3>
            {order.products?.map((item, index) => (
                <div key={index} className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                        <img src={item.image} alt={item.name} className="w-14 h-14 object-contain rounded bg-gray-100" />
                        <div>
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-gray-500">Qtd: {item.quantity}</p>
                        </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">R$ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
            ))}
        </div>

      {/* Total */}
      <div className="bg-orange-100 p-4 rounded text-right font-semibold text-lg mb-4">
        Total: R$ {order.total.toFixed(2).replace(".", ",")} <br />
        <span className="text-xs font-normal">ou 10x de R$ {(order.total / 10).toFixed(2).replace(".", ",")} sem juros</span>
      </div>

      {/* Ações */}
      <div className="text-center">
        <button onClick={() => window.print()} className="text-sm underline text-gray-600 mb-4">Imprimir Recibo</button>
        <br />
        <Link to="/" className="inline-block bg-orange-400 text-white py-2 px-6 rounded hover:bg-orange-500 transition">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
