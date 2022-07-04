import React, { useEffect } from "react";
import { useSpringCarousel } from "react-spring-carousel";

type Props = {
  items: Array<React.ReactNode>;
  itemsPerSlide: number;
  loop: boolean;
  autoplay: boolean;
  delay: number;
};

const Carousel = ({ items, itemsPerSlide, loop, autoplay, delay }: Props) => {
  const { carouselFragment, slideToNextItem, useListenToCustomEvent } =
    getSpringCarousel(items, itemsPerSlide, loop);

  useEffect(() => {
    if (autoplay) {
      const timer = setTimeout(() => {
        slideToNextItem();
      }, delay);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  useListenToCustomEvent(event => {
    //Triggered when the slide animation is completed
    if (event.eventName === "onSlideChange" && autoplay) {
      //Start timer to trigger next slide
      const timer = setTimeout(() => {
        slideToNextItem();
      }, delay);
    }
  });

  return <div style={{ overflow: "hidden" }}>{carouselFragment}</div>;
};

function getSpringCarousel(
  items: Array<React.ReactNode>,
  itemsPerSlide: number,
  loop: boolean
) {
  return loop
    ? useSpringCarousel({
        itemsPerSlide: itemsPerSlide,
        withLoop: true,
        disableGestures: true,
        items: items.map((item, i) => ({
          id: "item-" + i,
          renderItem: <div style={{ margin: "0 auto" }}>{item}</div>,
        })),
      })
    : useSpringCarousel({
        itemsPerSlide: itemsPerSlide,
        withLoop: false,
        disableGestures: true,
        items: items.map((item, i) => ({
          id: "item-" + i,
          renderItem: <div style={{ margin: "0 auto" }}>{item}</div>,
        })),
      });
}

Carousel.defaultProps = {
  autoplay: false,
  delay: 1000,
};

export default Carousel;
