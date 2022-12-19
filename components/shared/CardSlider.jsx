import React from "react";
import Slider from "react-slick";

import RightArrow from "../../public/rightArrow.svg";
import LeftArrow from "../../public/leftArrow.svg";
import SliderCard from "./SliderCard";

import styles from "../../styles/CardSlider.module.scss";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={` ${className} ${styles["slider-btn"]}`}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
      }}
      disabled={className?.includes("slick-disabled")}
    >
      <RightArrow className={styles["slider-btn-svg"]} />
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={` ${className} ${styles["slider-btn"]}`}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        zIndex: "10",
        // marginRight: "3rem",
      }}
      disabled={className?.includes("slick-disabled")}
    >
      <LeftArrow className={styles["slider-btn-svg"]} />
    </button>
  );
}

export default function CardSlider() {
  var settings = {
    // centerMode: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <div style={{ padding: "4rem" }}>
    <div style={{ width: "100%", padding: "0rem" }}>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el, index) => (
          <div key={index}>
            <SliderCard />
          </div>
        ))}
      </Slider>
    </div>
  );
}
