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
    <div className="flex flex-col lg:flex-row h-fit justify-center items-center gap-20 xl:gap-30 bg-(--secondary)">
      <div className="bg-(--white) flex flex-col gap-8 forms rounded-sm w-fit">
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-3xl'>Crie sua conta</h2>
          <p className='text-(--darkgray2) text-sm'>
            Já possui uma conta?{" "}
            <Link to="/login" className="text-[#cf2284] underline">Entre aqui</Link>.
          </p>
        </div>  
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
      </div>
      <img src={tenisJordan} alt="Tênis"className='w-[25rem] h-[30rem] xl:w-[45rem] xl:h-[55rem] hidden lg:inline image' />
    </div>

  );
}
