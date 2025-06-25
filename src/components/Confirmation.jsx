import { Link } from "react-router-dom";
import "../css/Confirmation.css";

export default function Confirmation({ order }) {
  if (!order) return null;

  return (
    <div className="confirmation-container">
      <div className="text-center mb-6">
        <div style={{ fontSize: "3rem", marginBottom: "8px" }}>🎉</div>
        <h2>Compra Realizada<br />com sucesso!</h2>
      </div>

      <hr style={{ marginBottom: "16px", borderColor: "#eee" }} />

      {/* Informações Pessoais */}
      <div className="confirmation-section">
        <h3>Informações Pessoais</h3>
        <p><strong>Nome:</strong> {order.name}</p>
        <p><strong>CPF:</strong> {order.cpf}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Celular:</strong> {order.phone}</p>
      </div>

      {/* Informações de Entrega */}
      <div className="confirmation-section">
        <h3>Informações de Entrega</h3>
        <p><strong>Endereço:</strong> {order.address}</p>
        <p><strong>Bairro:</strong> {order.neighborhood}</p>
        <p><strong>Cidade:</strong> {order.city}</p>
        <p><strong>CEP:</strong> {order.cep}</p>
        {order.complemento && <p><strong>Complemento:</strong> {order.complemento}</p>}
      </div>

      {/* Informações de Pagamento */}
      <div className="confirmation-section">
        <h3>Informações de Pagamento</h3>
        <p><strong>Titular do Cartão:</strong> {order.cardHolder}</p>
        <p><strong>Forma de Pagamento:</strong> {order.paymentMethod === "cartao" ? "Cartão de Crédito" : "Boleto Bancário"}</p>
      </div>

      {/* Resumo da compra */}
      <div className="confirmation-section confirmation-products">
        <h3>Resumo da compra</h3>
        {order.products?.map((item, index) => (
          <div key={index} className="item">
            <div className="item-info">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p style={{ fontSize: "12px", color: "#555" }}>Qtd: {item.quantity}</p>
              </div>
            </div>
            <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="confirmation-total">
        Total: R$ {order.total.toFixed(2).replace(".", ",")}
        <span>ou 10x de R$ {(order.total / 10).toFixed(2).replace(".", ",")} sem juros</span>
      </div>

      {/* Ações */}
      <div className="confirmation-actions">
        <button className="hover:cursor-pointer" onClick={() => window.print()}>Imprimir Recibo</button>
        <br />
        <Link to="/" className="hover:cursor-pointer" >Voltar para Home</Link>
      </div>
    </div>
  );
}

