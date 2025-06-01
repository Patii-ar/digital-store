import { Link } from "react-router-dom";

import camisetasIcon from "../icons-colecoes/camisetas.jpg";
import calcasIcon from "../icons-colecoes/calcas.jpg";
import headphonesIcon from "../icons-colecoes/headphones.jpg";
import tenisIcon from "../icons-colecoes/tenis.jpg";



const Colecoes = () => {
    const colecoes = [
        { icone: camisetasIcon, link: "/camisetas"},
        {nome: "calças", icone:calcasIcon, link: "/calcas"},
        /*{nome: "bonés", icone:"/icons-colecoes/calcas.svg", link: "/calcas"},*/
        {nome: "headphones", icone:headphonesIcon, link: "/headphones"},
        {nome: "tenis", icone:tenisIcon, link: "/tenis"},
    ];


    return (
        <div className="text-center py-10 bg-gray-50">
            <h2 className="text-xl font-semibold mb-8">Coleções em destaque</h2>
            <div className="flex justify-center gap-10 flex-wrap">
                {colecoes.map((item, index) => (
                    <Link
                        key={index}
                        to={item.link}
                        className="flex flex-col items-center hover:scale-110 transition-transform"
                    >
                        <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center mb-2 overflow-hidden p-1">
                            <img
                                src={item.icone}
                                alt={item.nome}
                                className="w-full h-full aspect-square rounded-full object-cover object-center"
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
