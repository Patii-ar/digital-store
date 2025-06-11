import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import "../css/ProductListing.css";
import { FaArrowRightLong } from "react-icons/fa6";

export const lista = [
{
    id:1,
    image: "/src/public/product-images/bone7.jpg",
    name: "Tênis 1",
    price: 200,
    discount: 30,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:2,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:3,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:4,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:5,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:6,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:7,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:8,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    tamanhos: [38, 39, 40, 41, 42]
},
{
    id:9,
    image: "/src/public/product-images/camiseta6.jpg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:10,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:11,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:12,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:13,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:14,
    image: "/src/public/product-images/tenis1.svg",
    name: "Tênis 2",
    price: 150,
    discount: 15,
    cores: ['#000000', '#FFFFFF', '#FF0000'],
    tamanhos: [38, 39, 40, 41, 42],
},
{
    id:15,
    image: "/src/public/product-images/tenis1.svg",
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
                {title && <h2 className="text-[var(--darkgray2)] text-[24px] font-bold">{title}</h2>}
                {link && 
                    <Link to={link.src}>
                        <h2 className="text-[var(--principal)] flex gap-3 items-center">
                            {link.text} <FaArrowRightLong /> 
                        </h2>
                    </Link>
                }
            </div>
            <ProductCard lista = {produtosexibidos}/>
        </div>
    )
}