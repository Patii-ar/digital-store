import { useNavigate } from "react-router-dom";
import tenisImage from "../assets/tenis-air-jordan.svg";
import "../css/SpecialOffer.css";

export default function SpecialOffer() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-10 px-5 md:px-20 rounded-lg shadow-md flex items-center gap-20">
      
      {/* Imagem com fundo circular */}
      <div className= "special-offer relative  w-[466px] h-[466px] md:w-[466px] md:h-[466px]">
        <div
          className="absolute rounded-full inset-10 z-0"
          style={{
            
            background: "linear-gradient(to bottom, rgba(66, 0, 255, 0.25) -40.67%, rgba(255,255,255,0) 60%)",
          }}
        />
        <img
          src={tenisImage}
          alt="Tênis Air Jordan"
          className="absolute w[573px] h-[330px] object-contain z-10"
          style={{ top: '30px', left: '-20px' }}
          
        />
      </div>

      {/* Texto e botão */}
      <div className="flex-1 text-left max-w-lg special-offer-text">
        <p className="special-offer-title text-pink-600 font-semibold text-sm uppercase tracking-wide">
          Oferta especial
        </p>

        <p className="special-offer-heading text-3xl font-bold leading-snug">
          Air Jordan edição de colecionador
        </p>
        <p className="special-offer-description text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <button
          onClick={() => navigate("/produtos")}
          className="special-offer-button bg-pink-700 hover:bg-pink-800 text-white font-semibold rounded-lg transition"
        >
          Ver Oferta
        </button>
      </div>

    </section>
  );
}



