import ProductCard from "./ProductCard";
import tenis1 from "../public/shoes-images/tenis1.svg";
import { Link } from "react-router-dom";
import "../css/ProductListing.css";
import { FaArrowRightLong } from "react-icons/fa6";

export const lista = [
{
    image: "/product-list/bone7.jpg",
    name: "Tênis 1",
    price: 200,
    discount: 30,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:2,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:3,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:4,
    image:tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:5,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:6,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:7,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:8,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:9,
    image: "/product-list/camiseta6.jpg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:10,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:11,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:12,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:13,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:14,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:15,
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
}
]

export function ProductListing ({title, link, limit}){
    const produtosexibidos = limit ? lista.slice(0, limit) : lista;

    return(
        <div className="product-listing">
            <div className="header flex items-center justify-between info ">
                {title && <h2 className="text-(--darkgray2) text-[24px] font-bold">{title}</h2>}
                {link && 
                    <Link to={link.src}>
                        <h2 className="text-(--principal) flex gap-3 items-center">
                            {link.text} <FaArrowRightLong /> 
                        </h2>
                    </Link>
                }
            </div>
            <ProductCard lista = {produtosexibidos}/>
        </div>
    )
}