import { Link } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";
import "../css/Card.css";

export default function ProductCard({lista, onAddToCart}) {

    if (!Array.isArray(lista)|| lista.length === 0) {
        return <p>Nenhum produto disponível.</p>;
    }
    return(
        <div className="products-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {lista.map((item, index) => {

                const discountPrice = (item.price - (item.discount * item.price / 100)).toFixed(2);

                const productToAdd = {
                    name: item.name,
                    price: item.discount ? Number(discountPrice) : item.price,
                    oldPrice: item.discount ? item.price : null,
                    img: item.image,
                };
                
                return(
                    <div key={index} className="relative h-fit">
                        <Link to={`/produtos/${item.id}`}>
                            {item.discount && <h5 className="discount absolute top-0 left-0 z-40 bg-[#E7FF86] rounded-xl text-[14px] text-(--darkgray2)">{item.discount}% off</h5>}
                            <img src={item.image} alt="" className="h-[292px] w-[321px] object-cover z-10 bg-(--white)" loading="lazy" decoding="async" />
                            <h5 className="product-name font-semibold text-sm">{item.category}</h5>
                            <h3 className="text-[24px] text-(--darkgray)">{item.name}</h3>
                            <div className="flex flex-col md:flex-row gap-[0.2rem] md:gap-[0.6rem]">
                                <h4 className={`text-[24px] ${item.discount ? 'text-(--lightgray) line-through' : 'text-(--darkgray)'}`}>$ {item.price.toFixed(2)}</h4>
                                {item.discount && <h4 className="text-[24px] text-(--darkgray)">$ {discountPrice}</h4>}
                            </div>
                        </Link>    
                        <button
                            className="mt-3 bg-(--lightgray) text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
                            onClick={() => onAddToCart?.(productToAdd)}
                        >
                            <TbShoppingCartPlus className="text-2xl"/>
                        </button>
                    </div>
                );
            })}
        </div>
    );
}