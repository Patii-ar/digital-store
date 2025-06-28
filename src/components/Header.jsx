import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "../css/Header.css";

export default function Header({ onCartClick, cartQuantity }) {

  const [menuAberto, setMenuAberto] = useState(false);

  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  const isCadastroPage =
    location.pathname === "/criar-conta" || location.pathname === "/criar-conta-simples" || location.pathname === "/login";

  return (
    <header className="w-full flex flex-col shadow-sm bg-white">
      {/* Mobile Header */}
      <div className=" block sm:hidden flex justify-between gap-4">
        {/* Ícone de menu hambúrguer */}
        <button onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? (
            <FaTimes className="text-2xl text-pink-600" />
          ) : (
            <GiHamburgerMenu className="text-2xl text-pink-600" />
          )}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo Digital Store" className="h-6" />
          
        </Link>

        {/* Ícones de busca e carrinho */}
        {!isCadastroPage && (
          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <CiSearch className="text-xl text-pink-600" />
            </button>
            <button onClick={onCartClick} className="relative">
              <FaShoppingCart className="text-xl text-pink-600" />
              {cartQuantity > 0 && (
                <span className="cart-quantity-badge">
                  {cartQuantity}
                </span>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Mobile SearchBar */}
      {!isCadastroPage && searchOpen && (
        <div className="sm:hidden px-4 pb-2">
          <div className="bg-gray-100 flex items-center rounded-lg px-3 py-2">
            <input
              type="text"
              className="w-full bg-transparent outline-none"
              placeholder="Pesquisar produto..."
            />
            <CiSearch className="text-xl text-gray-600" />
          </div>
        </div>
      )}

      <div className={`menu-mobile sm:hidden ${menuAberto ? "visible" : "hidden"}`}>
        <nav>
          <ul className="text-menu">
            <li>
              <Link to="/" onClick={() => setMenuAberto(false)}>Home</Link>
            </li>
            <li>
              <Link to="/produtos" onClick={() => setMenuAberto(false)}>Produtos</Link>
            </li>
            <li>
              <Link to="/categorias" onClick={() => setMenuAberto(false)}>Categorias</Link>
            </li>
            <li>
              <Link to="/pedidos" onClick={() => setMenuAberto(false)}>Meus Pedidos</Link>
            </li>
          </ul>

          <div className="auth-buttons">
            <Link to="/criar-conta-simples" onClick={() => setMenuAberto(false)}>
              <h4>Cadastre-se</h4>
            </Link>
            <Link to="/login" onClick={() => setMenuAberto(false)}>
              <button>Entrar</button>
            </Link>
          </div>
        </nav>
      </div>


      {/* Desktop Header */}
      <section className={`primeira-section hidden sm:flex items-center ${isCadastroPage ? "cadastro-page" : "justify-between"}`}>
        {/* Logo + Título */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo Digital Store" className="h-8 md:h-9" />
          
        </Link>

        {/* Barra de busca */}
        {!isCadastroPage && (
          <>
            <div className="searchbar bg-gray-100 rounded-lg flex items-center">
              <input
                type="text"
                className="input-pesquisa bg-transparent outline-none w-full text-gray-700"
                placeholder="Pesquisar Produto..."
              />
              <CiSearch className="text-xl text-gray-500" />
            </div>

            {/* Área de cadastro e carrinho */}
            <div className="areacadastro flex items-center gap-6">
              <Link to="/criar-conta-simples">
                <h4 className="text-gray-700 hover:text-pink-600 hover:cursor-pointer underline underline-offset-2">
                  Cadastre-se
                </h4>
              </Link>
              <Link to="/login">
                <button className="botatoentrar bg-pink-600 hover:bg-pink-700 hover:cursor-pointer text-white font-bold rounded-lg transition">
                  Entrar
                </button>
              </Link>
              <button onClick={onCartClick} className="carrinho relative">
                <FaShoppingCart className="text-xl text-pink-600 hover:cursor-pointer" />
                {cartQuantity > 0 && (
                  <span className="cart-quantity-badge">
                    {cartQuantity}
                  </span>
                )}
              </button>
            </div>
          </>
        )}
      </section>


      {/* Navegação (desktop) */}
      {!isCadastroPage && (
        <nav className="hidden sm:flex">
          <ul className="lista flex justify-center items-center py-2 text-gray-800 font-semibold">
            <li className="hover:text-pink-600 hover:underline">
              <Link to="/" className={location.pathname === "/" ? "text-pink-600 border-b-2 border-pink-600" : ""}>
                Home
              </Link>
            </li>
            <li className="hover:text-pink-600 hover:underline">
              <Link to="/produtos" className={location.pathname === "/produtos" ? "text-pink-600 border-b-2 border-pink-600" : ""}>
                Produtos
              </Link>
            </li>
            <li className="hover:text-pink-600 hover:underline">
              <Link to="/categorias">Categorias</Link>
            </li>
            <li className="hover:text-pink-600 hover:underline">
              <Link to="/pedidos">Meus Pedidos</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
