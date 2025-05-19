import logo from "../assets/logofooter.svg";
import facebook from "../assets/logofacebook.svg";
import instagram from "../assets/logoinstagram.svg";
import x from "../assets/logox.svg";

import { Link } from "react-router-dom";

import "../css/Footer.css";

export default function Footer () {
    return (
        <footer className="bg-(--darkgray) text-white flex flex-col w-full">
            <div className="border-b flex justify-between principal">
                <div className="basis-xs flex flex-col gap-9">
                    <img src={logo} alt="Logo Digital store"/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, reprehenderit, dolores, non amet eum nihil sint consectetur et maxime iste rerum nisi esse expedita omnis at ut deserunt. Officia, amet?</p>
                    <div className="flex gap-9">
                        <Link to="/"><img src={facebook} alt="Facebook" /></Link>
                        <Link to="/"><img src={instagram} alt="Instagram" /></Link>
                        <Link to="/"><img src={x} alt="X" /></Link>
                    </div>
                </div>
                <div>
                    <h5 className="font-semibold text-base">Informação</h5>
                    <ul>
                        <li className="text-sm"><Link to="/">Sobre Drip Store</Link></li>
                        <li className="text-sm"><Link to="/">Segurnça</Link></li>
                        <li className="text-sm"><Link to="/">Wishlist</Link></li>
                        <li className="text-sm"><Link to="/">Blog</Link></li>
                        <li className="text-sm"><Link to="/">Trabalhe Conosco</Link></li>
                        <li className="text-sm"><Link to="/">Meus Pedidos</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold text-base">Categorias</h5>
                    <ul>
                        <li className="text-sm"><Link to="/">Camisetas</Link></li>
                        <li className="text-sm"><Link to="/">Calças</Link></li>
                        <li className="text-sm"><Link to="/">Bonés</Link></li>
                        <li className="text-sm"><Link to="/">Headphones</Link></li>
                        <li className="text-sm"><Link to="/">Tênis</Link></li>
                    </ul>
                </div>
                <div className="contato basis-sm">
                    <h5 className="font-semibold text-base">Contato</h5>
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
            <h6 className="text-center">@ 2025 Digital College </h6>
        </footer>
    );
};