import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import tenisJordan from "../assets/jordanblue.png";
import gmail from "../assets/logogmail.svg";
import facebook from "../assets/facebook.svg";
import "../css/CriarContaSimples.css";

export default function CriarContaSimples() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) {
      alert("Insira um email válido.");
      return;
    }
    localStorage.setItem("emailTemp", email);
    navigate("/criar-conta");
  }

  return (
    <main className="criarconta-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#e8e3ff] to-[#f4f0ff]">
      <div className="criarconta-wrapper max-w-6xl w-full flex flex-col md:flex-row items-center justify-center">
    
        {/* Formulário */}
        <section className="section-form bg-white rounded-2xl shadow-md w-full max-w-md text-center md:text-left">
          <h2 className="text-criarconta text-3xl font-semibold text-gray-900">Crie sua conta</h2>
          <p className="text-possuiconta text-sm text-gray-600">
            Já possui uma conta?{" "}
            <Link to="/login" className="text-[#cf2284] underline">Entre aqui</Link>.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-email block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insira seu email"
              required
              className="box-email w-full bg-gray-100 border border-transparent rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#cf2284]"
            />
            <button
              type="submit"
              className="box-email-container w-full bg-[#cf2284] text-white rounded-md font-medium hover:bg-[#b61e73] hover:cursor-pointer transition duration-200"
            >
              Criar Conta
            </button>
          </form>

          <p className="text-login text-center text-sm text-gray-600">Ou faça login com</p>
          <div className="social-login flex justify-center">
            <img src={gmail} alt="Google" className="w-6 h-6" />
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
          </div>
        </section>

        {/* Imagem */}
        <div className="imagem-margem hidden md:block">
          <img src={tenisJordan} alt="Tênis" className="w-[720px] object-contain" />
        </div>
      </div>
    </main>

  );
}
