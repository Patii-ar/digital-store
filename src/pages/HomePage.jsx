import Carousel from "../components/Carousel"
import Colecoes from "../components/colecoes";
import Destaque from "../components/Destaque"
const slides = import.meta.glob('../public/home-slide/*.jpeg', { eager: true });

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
      <div className="w-3 h-3 bg-black opacity-60 rounded-full"></div>
    ),
    appendDots: dots => (
      <div style={{ position: "absolute", bottom: "15px", width: "100%" }}>
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
};

export default function HomePage () {
    return (
        <div>
            <Carousel slides = {slides} settings = {settings} width = "w-[100vw]" height = "h-[681px]"/>
            <Destaque />
            <Colecoes />
        </div>
    )
}