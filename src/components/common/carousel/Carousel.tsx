import React, { useEffect } from "react";
import { useSpringCarousel } from "react-spring-carousel";

type Props = {
  items: Array<React.ReactNode>;
  itemsPerSlide: number;
  loop: boolean;
  autoplay: boolean;
  delay: number;
};

function debounce(fn: () => void, ms: number) {
  let timer: any;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, ms);
  };
}

const Carousel = ({ items, itemsPerSlide, loop, autoplay, delay }: Props) => {
  const { carouselFragment, slideToNextItem, useListenToCustomEvent } =
    getSpringCarousel(items, itemsPerSlide, loop);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      slideToNextItem();
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);

    if (autoplay) {
      const timer = setTimeout(() => {
        slideToNextItem();
      }, 1000); //First run
      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  useListenToCustomEvent(event => {
    //Triggered when the slide animation is completed
    if (event.eventName === "onSlideChange" && autoplay) {
      slideToNextItem();
      //Start timer to trigger next slide
      //const timer = setTimeout(() => {
      //  slideToNextItem();
      //}, delay);
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
        springConfig: {
          mass: 1,
          tension: 150,
          friction: 75,
        },
        items: items.map((item, i) => ({
          id: "item-" + i,
          renderItem: <div style={{ margin: "0 auto" }}>{item}</div>,
        })),
      })
    : useSpringCarousel({
        itemsPerSlide: itemsPerSlide,
        withLoop: false,
        disableGestures: true,
        springConfig: {
          mass: 1,
          tension: 150,
          friction: 75,
        },
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
