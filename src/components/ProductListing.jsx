import ProductCard from "./ProductCard";
import tenis1 from "../public/shoes-images/tenis1.svg";
import { Link } from "react-router-dom";
import "../css/ProductListing.css";
import { FaArrowRightLong } from "react-icons/fa6";

const lista = [{
    image: tenis1,
    name: "Tênis 1",
    price: 200,
    discount: 30
},
{
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15
},
{
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15
},
{
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15
},
{
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15
},
{
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15
},
{
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15
},
{
    image: tenis1,
    name: "Tênis 2",
    price: 150,
    discount: 15
}
]

export function ProductListing ({title, link}){
    return(
        <div className="produtos">
            <div className="flex items-center justify-between info ">
                {title && <h2 className="text-(--darkgray2) text-[24px] font-bold">{title}</h2>}
                {link && 
                    <Link to={link.src}>
                        <h2 className="text-(--principal) flex gap-3 items-center">
                            {link.text} <FaArrowRightLong /> 
                        </h2>
                    </Link>
                }
            </div>
            <ProductCard lista = {lista}/>
        </div>
    )
}