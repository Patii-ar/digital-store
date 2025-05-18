import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import minicart from "../assets/mini-cart.svg"



export default function Header () {
    return (
        <header>
            <section>
                <Link to="/"><img src={logo} alt="Logo Digital Store" /></Link>
                <div>
                    <input type="text" placeholder="Pesquisar Produto..."></input>
                    <button><CiSearch/></button>
                </div>
                <Link to="/"><h4>Cadastre-se</h4></Link>
                <Link to="/"><button>Entrar</button></Link>
                <Link to="/"><img src={minicart} alt="Carrinho" /></Link>
            </section>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/">Categorias</Link></li>
                    <li><Link to="/">Meus Pedidos</Link></li>
                </ul>   
            </nav>
        </header>
    )
}
