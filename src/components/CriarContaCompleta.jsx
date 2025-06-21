import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CriarConta.css";

export default function CriarContaCompleta() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const emailSalvo = localStorage.getItem("emailTemp");
    if (emailSalvo) {
      setFormData((prev) => ({ ...prev, email: emailSalvo }));
    }
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = Object.values(formData).every((v) => v && v.trim() !== "");
    if (!isValid) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    users.push(formData);
    localStorage.setItem("usuarios", JSON.stringify(users));
    localStorage.removeItem("emailTemp");

    alert("Conta criada com sucesso!");
    navigate("/");
  }

  return (
    <main className="criarconta-container bg-[#f9f6ff] min-h-screen flex items-center justify-center px-4">
      <section className="w-full max-w-2xl bg-white shadow-md rounded-md p-8">
        <h2 className="text-xl font-semibold mb-6">Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <fieldset className="mb-6">
            <legend className="font-medium text-gray-700 mb-2">Informações Pessoais</legend>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <input name="nome" type="text" placeholder="Nome completo" onChange={handleChange} value={formData.nome || ""} />
              <input name="cpf" type="text" placeholder="CPF" onChange={handleChange} value={formData.cpf || ""} />
              <input name="email" type="email" placeholder="E-mail" onChange={handleChange} value={formData.email || ""} />
              <input name="celular" type="tel" placeholder="Celular" onChange={handleChange} value={formData.celular || ""} />
            </div>
          </fieldset>

          <fieldset className="mb-6">
            <legend className="font-medium text-gray-700 mb-2">Informações de Entrega</legend>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <input name="endereco" type="text" placeholder="Endereço" onChange={handleChange} value={formData.endereco || ""} />
              <input name="bairro" type="text" placeholder="Bairro" onChange={handleChange} value={formData.bairro || ""} />
              <input name="cidade" type="text" placeholder="Cidade" onChange={handleChange} value={formData.cidade || ""} />
              <input name="cep" type="text" placeholder="CEP" onChange={handleChange} value={formData.cep || ""} />
              <input name="complemento" type="text" placeholder="Complemento" onChange={handleChange} value={formData.complemento || ""} />
            </div>
          </fieldset>

          <div className="mb-4">
            <label className="text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Quero receber por email ofertas e novidades da loja.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#cf2284] text-white py-2 rounded-md hover:bg-[#b61e73] transition"
          >
            Criar Conta
          </button>
        </form>
      </section>
    </main>
  );
}
