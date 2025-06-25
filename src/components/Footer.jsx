import logo from "../assets/logofooter.svg";
import facebook from "../assets/logofacebook.svg";
import instagram from "../assets/logoinstagram.svg";
import x from "../assets/logox.svg";
import { Link } from "react-router-dom";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="bg-(--darkgray) text-white w-full flex flex-col">
      <div className="border-b principal flex flex-col sm:flex-row flex-wrap sm:justify-between gap-8 sm:gap-0">
        {/* Logo e descrição */}
        <div className="basis-full sm:basis-auto flex flex-col gap-6 text-center sm:text-left">
          <img src={logo} alt="Logo Digital store" className="mx-auto sm:mx-0" />
          <p className="text-sm max-w-md mx-auto sm:mx-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            reprehenderit, dolores, non amet eum nihil sint consectetur et maxime
            iste rerum nisi esse expedita omnis at ut deserunt. Officia, amet?
          </p>
          <div className="flex justify-center sm:justify-start gap-6">
            <Link to="/"><img src={facebook} alt="Facebook" /></Link>
            <Link to="/"><img src={instagram} alt="Instagram" /></Link>
            <Link to="/"><img src={x} alt="X" /></Link>
          </div>
        </div>

        {/* Coluna 1 */}
        <div className="text-center sm:text-left">
          <h5 className="font-semibold text-base">Informação</h5>
          <ul>
            <li className="text-sm"><Link to="/">Sobre Drip Store</Link></li>
            <li className="text-sm"><Link to="/">Segurança</Link></li>
            <li className="text-sm"><Link to="/">Wishlist</Link></li>
            <li className="text-sm"><Link to="/">Blog</Link></li>
            <li className="text-sm"><Link to="/">Trabalhe Conosco</Link></li>
            <li className="text-sm"><Link to="/">Meus Pedidos</Link></li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div className="text-center sm:text-left">
          <h5 className="font-semibold text-base">Categorias</h5>
          <ul>
            <li className="text-sm"><Link to="/">Camisetas</Link></li>
            <li className="text-sm"><Link to="/">Calças</Link></li>
            <li className="text-sm"><Link to="/">Bonés</Link></li>
            <li className="text-sm"><Link to="/">Headphones</Link></li>
            <li className="text-sm"><Link to="/">Tênis</Link></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className="contato text-center sm:text-left">
          <h5 className="font-semibold text-base">Contato</h5>
          <p>Av. Santos Dumont, 1510 - 1 andar -<br />Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>

      <h6 className="text-center py-4 text-sm">@ 2025 Digital College</h6>
    </footer>
  );
}
