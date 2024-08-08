import React, { useRef, forwardRef, useImperativeHandle } from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel = forwardRef(
  (
    {
      slides,
      slidesToShow = 1,
      slidesToShowOn1450 = 5,
      slidesToShowOn1200 = 4,
      slidesToShowOn1024 = 3,
      slidesToShowOn770 = 1,
      sliderProps,
      children,
      customPaging,
      ...passProps
    },
    ref
  ) => {
    const slickProps = {
      infinite: true,
      speed: 500,
      autoplay: true,
      cssEase: "linear",
      pauseOnHover: true,
      autoplaySpeed: 7000,
      arrows: false,
      swipeToSlide: true,
    };
    const settings = {
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      ...slickProps,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: slidesToShowOn1450,
            slidesToScroll: 1,
            ...slickProps,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: slidesToShowOn1200,
            slidesToScroll: 1,
            ...slickProps,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: slidesToShowOn1024,
            slidesToScroll: 1,
            ...slickProps,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: slidesToShowOn770,
            slidesToScroll: 1,
            ...slickProps,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            ...slickProps,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            ...slickProps,
          },
        },
      ],
    };

    let sliderRef = useRef(null);

    useImperativeHandle(ref, () => ({
      slickNext: () => {
        sliderRef.current.slickNext();
      },
      slickPrev: () => {
        sliderRef.current.slickPrev();
      },
    }));

    return (
      <Slider ref={sliderRef} {...settings} {...sliderProps}>
        {children}
      </Slider>
    );
  }
);

export default Carousel;
