import Carousel from "../components/Carousel";
import Colecoes from "../components/colecoes";
import Destaque from "../components/Destaque"
import { ProductListing } from "../components/ProductListing";
import SpecialOffer from "../components/SpecialOffer";
import "../css/HomePage.css";
const slides = import.meta.glob('../public/home-slide/*.jpg', { eager: true });


const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",

    customPaging: () => (
      <div className="w-3 h-3 bg-black opacity-60 rounded-full slick-dot"></div>
    ),
    appendDots: dots => (
      <div style={{ position: "absolute", bottom: "15px", width: "100%" }}>
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
};

const link = {
  src: "/",
  text: "Ver todos"
}

export default function HomePage ({onAddToCart}) {
    return (
        <div className="bg-[#F9F8FE]">
            <Carousel slides = {slides} settings = {settings} width = "w-full" height = "aspect-[16/9]" className=""/>
            <Destaque />
            <Colecoes />
            <ProductListing title="Produtos em alta" link={link} limit={8} onAddToCart={onAddToCart}/>
            <SpecialOffer/>
        </div>
    )
}