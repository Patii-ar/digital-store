import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tenisJordan from "../assets/tenis-air-jordan.svg";
import "../css/CriarConta.css"; 

export default function CriarContaSimples() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) {
      alert("Insira um email válido.");
      return;
    }

    // Simulação de salvamento temporário
    localStorage.setItem("emailTemp", email);
    navigate("/criar-conta"); 
  }

  return (
    <main className="criarconta-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#d3ccfa] to-[#f1ebff] px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Formulário */}
        <section className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Crie sua conta</h2>
          <p className="text-sm text-gray-600 mb-6">
            Já possui uma conta?{" "}
            <span className="text-[#cf2284] underline cursor-pointer">Entre aqui</span>.
          </p>
          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded mb-6 text-sm"
              placeholder="Insira seu email"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#cf2284] text-white py-2 rounded-md hover:bg-[#b61e73] transition"
            >
              Criar Conta
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">Ou faça login com</p>
          <div className="flex justify-center gap-4 mt-2">
            <img src="/icons/google.svg" alt="Google" className="w-6 h-6" />
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </div>
        </section>

        {/* Imagem */}
        <div className="hidden md:block">
          <img src={tenisJordan} alt="Tênis" className="w-[400px] object-contain" />
        </div>
      </div>
    </main>
  );
}
