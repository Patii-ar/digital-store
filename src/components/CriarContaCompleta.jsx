import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CriarConta.css";

export default function CriarContaCompleta() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const emailSalvo = localStorage.getItem("emailTemp");
    if (emailSalvo) {
      setFormData((prev) => ({ ...prev, email: emailSalvo }));
    }
  }, []);

  function validate() {
    const newErrors = {};
    const cpfRegex = /^\d{11}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const celularRegex = /^\d{10,11}$/;

    if (!formData.nome?.trim()) newErrors.nome = "Nome é obrigatório";
    if (!cpfRegex.test(formData.cpf || "")) newErrors.cpf = "CPF inválido (11 dígitos)";
    if (!emailRegex.test(formData.email || "")) newErrors.email = "Email inválido";
    if (!celularRegex.test(formData.celular || "")) newErrors.celular = "Celular inválido";

    if (!formData.endereco) newErrors.endereco = "Endereço obrigatório";
    if (!formData.bairro) newErrors.bairro = "Bairro obrigatório";
    if (!formData.cidade) newErrors.cidade = "Cidade obrigatória";
    if (!formData.cep || formData.cep.length !== 8) newErrors.cep = "CEP inválido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function buscarCEP(cep) {
    if (cep.length !== 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setFormData((prev) => ({
          ...prev,
          endereco: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
        }));
      }
    } catch (error) {
      console.log("Erro ao buscar CEP:", error);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "cep" && value.length === 8) {
      buscarCEP(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    users.push(formData);
    localStorage.setItem("usuarios", JSON.stringify(users));
    localStorage.removeItem("emailTemp");

    alert("Conta criada com sucesso!");
    navigate("/");
  }

  return (
    <main className="criarconta-container bg-[#f9f6ff] min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
            <section className="w-full max-w-2xl bg-white bg-[#f9f6ff] shadow-md rounded-lg md:p-10 box-container">
                <div className="bg-[#f9f6ff]">
                    <h2 className="text-2xl font-semibold text-gray-900 text-criar-conta ">Criar Conta</h2>
                </div>
                
                <form onSubmit={handleSubmit}>

                    {/* Pessoais */}
                    <fieldset className="box-pessoal">
                        <legend className="text-base font-medium text-gray-800 text-inf">Informações Pessoais</legend>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 box-inf-pessoal">
                            <div>
                                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                                    Nome completo <span className="text-red-500">*</span>
                                </label>
                                <input name="nome" id="nome" placeholder="Nome completo" onChange={handleChange} value={formData.nome || ""} className="input" />
                                {errors.nome && <p className="error">{errors.nome}</p>}
                            </div>

                            <div>
                                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                                    CPF <span className="text-red-500">*</span>
                                </label>
                                <input name="cpf" id="cpf" placeholder="CPF" onChange={handleChange} value={formData.cpf || ""} className="input" />
                                {errors.cpf && <p className="error">{errors.cpf}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input name="email" id="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email || ""} className="input" />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="celular" className="block text-sm font-medium text-gray-700">
                                    Celular <span className="text-red-500">*</span>
                                </label>
                                <input name="celular" id="celular" type="tel" placeholder="Celular" onChange={handleChange} value={formData.celular || ""} className="input" />
                                {errors.celular && <p className="error">{errors.celular}</p>}
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="box-adress">
                        <legend className="text-base font-medium text-gray-800 text-inf">Informações de Entrega</legend>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <div>
                                <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-1">
                                    Endereço <span className="text-red-500">*</span>
                                </label>
                                <input name="endereco" id="endereco" placeholder="Endereço" onChange={handleChange} value={formData.endereco || ""} className="input" />
                                {errors.endereco && <p className="error">{errors.endereco}</p>}
                            </div>

                            <div>
                                <label htmlFor="bairro" className="block text-sm font-medium text-gray-700 mb-1">
                                    Bairro <span className="text-red-500">*</span>
                                </label>
                                <input name="bairro" id="bairro" placeholder="Bairro" onChange={handleChange} value={formData.bairro || ""} className="input" />
                                {errors.bairro && <p className="error">{errors.bairro}</p>}
                            </div>

                            <div>   
                                <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">
                                    Cidade <span className="text-red-500">*</span>
                                </label>
                                <input name="cidade" id="cidade" placeholder="Cidade" onChange={handleChange} value={formData.cidade || ""} className="input" />
                                {errors.cidade && <p className="error">{errors.cidade}</p>}
                            </div>

                            <div>
                                <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">
                                    CEP <span className="text-red-500">*</span>
                                </label>
                                <input name="cep" id="cep" placeholder="CEP" onChange={handleChange} value={formData.cep || ""} className="input" />
                                {errors.cep && <p className="error">{errors.cep}</p>}
                            </div>

                            <div className="md:col-span-1">
                                <label htmlFor="complemento" className="block text-sm font-medium text-gray-700 mb-1">
                                    Complemento
                                </label>
                                <input name="complemento" id="complemento" placeholder="Complemento" onChange={handleChange} value={formData.complemento || ""} className="input" />
                            </div>
                        </div>
                        </fieldset>
                        {/* Checkbox */}
                        <div className="bg-[#f9f6ff]">
                            <label className="flex items-center gap-2 text-sm text-gray-600 checkbox">
                            <input type="checkbox" id="newsletter"/>
                                Quero receber por email ofertas e novidades da loja.
                            </label>

                            <button type="submit" className="w-full bg-[#cf2284] text-white py-2 rounded-md hover:bg-[#b61e73] hover:cursor-pointer transition">
                                Criar Conta
                            </button>
                        </div>
                        
                    </form>
                </section>
            </div>
        </main>
    );
}
