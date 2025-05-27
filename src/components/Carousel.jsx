import Slider from "react-slick";
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import "../css/Carousel.css"
const Slides = import.meta.glob('../public/home-slide/*.jpeg', { eager: true });



export default function Carousel () {
    
    const imageElements = Object.values(Slides).map((img) => (
  <div><img className="w-[100vw] h-[681px]"  src={img.default} /></div>
));



    const setings = {
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
    return (
        <div className="w-full carousel">
            <Slider {...setings}>
                {imageElements}
            </Slider>
        </div>
        
    )
}
