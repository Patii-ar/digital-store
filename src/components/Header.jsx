import {useState} from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";


import "../css/Header.css";



export default function Header ({onCartClick, cartQuantity}) {
  
    return (
    
        <header className="w-full flex flex-col">
            <section className="primeira-section flex justify-between">
                <Link to="/"><img src={logo} alt="Logo Digital Store" /></Link>

                <div className="searchbar bg-(--lightgray3) flex justify-between rounded-lg">
                    <input className="input-pesquisa w-7/8" type="text" placeholder="Pesquisar Produto..."></input>
                    <button className="botao-pesquisa cursor-pointer"><CiSearch /></button>
                </div>

                <div className="areacadastro flex gap-10">
                    <Link to="/"><h4 className="font-normal underline underline-offset-2 text-center text-(--darkgray2) hover:text-(--principal) cursor-pointer">Cadastre-se</h4></Link>
                    <Link to="/"><button className="botatoentrar hover:bg-[#dd257e] transition duration-500 rounded-lg bg-(--principal) font-bold text-white cursor-pointer">Entrar</button></Link>
                </div>
                
                <div className="cart-icon-wrapper">
                    <button onClick={onCartClick}>
                        <FaShoppingCart className="text-xl text-pink-600 hover:text-pink-700 cursor-pointer" />
                            {cartQuantity > 0 && (
                                <span className="cart-quantity-badge">
                                    {cartQuantity}
                                </span>
                            )}
                        </button>
                    </div>
            </section>
            <nav>
                <ul className="lista flex text-(--darkgray2)">
                    <li className="font-semibold hover:underline hover:underline-offset-7 hover:text-(--principal)"><Link to="/">Home</Link></li>
                    <li className="font-semibold hover:underline hover:underline-offset-7 hover:text-(--principal)"><Link to="/produtos">Produtos</Link></li>
                    <li className="font-semibold hover:underline hover:underline-offset-7 hover:text-(--principal)"><Link to="/">Categorias</Link></li>
                    <li className="font-semibold hover:underline hover:underline-offset-7 hover:text-(--principal)"><Link to="/">Meus Pedidos</Link></li>
                </ul>   
            </nav>
            
        </header>
        
    );
};


