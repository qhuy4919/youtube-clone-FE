import { useState } from "react";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import "./carousel.scss";
// import { ImageSlider } from "../../model/carousel";

type Props = {
  slide?: Array<any>;
};

export function Carousel({ slide }: Props) {
  const [current, setCurrent] = useState(0);
  const length = slide?.length || 0;
  //get image from prop
  var image_list: Array<string> = [];
  if (slide) {
    image_list = slide.map((item) => {
      return item.snippet.thumbnails.high.url
    });
  }
  //
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slide) || slide.length <= 0) {
    return null;
  }
  // TODO: index as key
  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {(image_list ?? [])
        .map((slide_item, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide_item} alt="video" className="image" />
              )}
            </div>
          );
        })}
    </div>
  );
}