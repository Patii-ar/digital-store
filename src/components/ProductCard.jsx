import "../css/Card.css";

export default function ProductCard({lista}) {

    return(
        <div className="flex gap-9 flex-wrap justify-center">
            {lista.map((item, index) => {

                const discountPrice = (item.price + (item.discount*item.price/100)).toFixed(2);
                
                return(
                    <div key={index} className="relative h-fit">
                        {item.discount && <h5 className="discount absolute top-0 left-0 z-40 bg-[#E7FF86] rounded-xl text-[14px] text-(--darkgray2)">{item.discount}% off</h5>}
                        <img src={item.image} alt="" className="h-[292px] w-[321px] z-10 bg-(--white)" />
                        <h3 className="text-[24px] text-(--darkgray)">{item.name}</h3>
                        <div className="flex gap-[0.6rem]">
                            <h4 className={`text-[24px] ${item.discount ? 'text-(--lightgray) line-through' : 'text-(--darkgray)'}`}>$ {item.price.toFixed(2)}</h4>
                            {item.discount && <h4 className="text-[24px] text-(--darkgray)">$ {discountPrice}</h4>}
                        </div>
                    </div>
            )})}
        </div>
    );
}