import logo from "../assets/logofooter.svg";
import facebook from "../assets/logofacebook.svg";
import instagram from "../assets/logoinstagram.svg";
import x from "../assets/logox.svg";
import { Link } from "react-router-dom";
export default function Footer () {
    return (
        <footer>
            <div>
                <div>
                    <img src={logo} alt="Logo Digital store"/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, reprehenderit, dolores, non amet eum nihil sint consectetur et maxime iste rerum nisi esse expedita omnis at ut deserunt. Officia, amet?</p>
                    <div>
                        <Link to="/"><img src={facebook} alt="Facebook" /></Link>
                        <Link to="/"><img src={instagram} alt="Instagram" /></Link>
                        <Link to="/"><img src={x} alt="X" /></Link>
                    </div>
                </div>
                <div>
                    <h5>Informação</h5>
                    <ul>
                        <li><Link to="/">Sobre Drip Store</Link></li>
                        <li><Link to="/">Segurnça</Link></li>
                        <li><Link to="/">Wishlist</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Trabalhe Conosco</Link></li>
                        <li><Link to="/">Meus Pedidos</Link></li>
                    </ul>
                </div>
                <div>
                    <h5>Categorias</h5>
                    <ul>
                        <li><Link to="/">Camisetas</Link></li>
                        <li><Link to="/">Calças</Link></li>
                        <li><Link to="/">Bonés</Link></li>
                        <li><Link to="/">Headphones</Link></li>
                        <li><Link to="/">Tênis</Link></li>
                    </ul>
                </div>
                <div>
                    <h5>Contato</h5>
                    <p>Av. Santos Dumont, 1510 -1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
            <h6>@ 2025 Digital College </h6>
        </footer>
    );
};