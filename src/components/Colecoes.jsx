import { Link } from "react-router-dom";

import camisetasIcon from "../public/icons-colecoes/shirt.svg";
import calcasIcon from "../public/icons-colecoes/pants.svg";
import headphonesIcon from "../public/icons-colecoes/headphone.svg";
import tenisIcon from "../public/icons-colecoes/shoe.svg";



const Colecoes = () => {
    const colecoes = [
        {nome: "Camisetas", icone: camisetasIcon, link: "camisetas"},
        {nome: "Calças", icone:calcasIcon, link: "calcas"},
        /*{nome: "bonés", icone:"/icons-colecoes/calcas.svg", link: "/calcas"},*/
        {nome: "Headphones", icone:headphonesIcon, link: "headphones"},
        {nome: "Tenis", icone:tenisIcon, link: "tenis"},
    ];


    return (
        <div className="text-center py-10 bg-gray-50">
            <h2 className="text-xl font-semibold mb-8">Coleções em destaque</h2>
            <div className="flex justify-center gap-10 flex-wrap">
                {colecoes.map((item, index) => (
                    <Link
                        key={index}
                        to={`/produto/${item.link}`}
                        className="flex flex-col items-center hover:text-(--principal)  hover:scale-110 transition-transform"
                    >
                        <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center mb-2 overflow-hidden p-1">
                            <img
                                src={item.icone}
                                alt={item.nome}
                                className="w-[50%] h-[50%]"
                            />
                        </div>
                        <span className="text-sm">{item.nome}</span>
                    </Link>
             ))}
            </div>
        </div>
    );
};


export default Colecoes;
