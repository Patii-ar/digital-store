import { useState } from "react";
import tenisImage from '../assets/tenis-air-jordan.svg';

function SpecialOffer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target.id === "modalOverlay") {
      setIsModalOpen(false);
    }
  };

  return (
    <section className="bg-white py-10 px-5 md:px-20 rounded-lg shadow-md relative flex flex-col md:flex-row items-center gap-10">

      <div className="flex-1 flex justify-center items-center relative">
        <div className="w-48 h-48 md:w-72 md:h-72 bg-purple-100 rounded-full flex justify-center items-center">
            <img
                src={tenisImage}
                alt="Tênis Air Jordan"
                className="max-w-full max-h-60 object-contain"
            />
        </div>

      </div>

      <div className="flex-1 text-center md:text-left">
        <h6 className="text-pink-600 font-semibold text-sm uppercase tracking-wide">
          Oferta especial
        </h6>
        <p className="text-3xl font-bold mt-2">Air Jordan edição de colecionador</p>
        <p className="text-gray-600 mt-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit in cumque rem maiores itaque quidem maxime ea quos accusantium ut totam voluptatum, odit odio error placeat quas exercitationem sit inventore.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-pink-700 hover:bg-pink-800 text-white font-semibold py-2 px-4 rounded-lg mt-4 transition"
        >
          Ver Oferta
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modalOverlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Detalhes da Oferta</h2>
            <p className="text-gray-600 mb-4">
              Aqui você encontra todos os detalhes do produto, informações de envio e condições especiais.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default SpecialOffer;
