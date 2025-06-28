import Slider from "react-slick";
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import "../css/Carousel.css"
import { useEffect, useRef } from "react";

export default function Carousel ({slides, settings, height, width}) {

  const sliderRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        sliderRef.current?.slickPause();
      } else {
        sliderRef.current?.slickPlay();
      }
    }
    
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () =>{
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    };

  }, [] );

  

  const imageElements = Object.values(slides).map((img, index) => (
    <div key={index} className="relative w-full aspect-[3/1] overflow-hidden">
      <img
        src={img.default}
        alt={`Slide ${index}`}
        loading="lazy"
        className="w-full h-full object-cover" 
        decoding="async"
      />
    </div>
  ));

  return(
    <div className="w-full carousel overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {imageElements}
      </Slider>
    </div>
  )
  
}
