import Slider from "react-slick";
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import "../css/Carousel.css"

export default function Carousel ({slides, settings, height, width}) {
  const imageElements = Object.values(slides).map((img) => (
    <div>
      <img className={`${height} ${width}`} src={img.default} />
    </div>
  ));

  return (
    <div className="w-full carousel">
      <Slider {...settings}>
        {imageElements}
      </Slider>
    </div>
  )
}
