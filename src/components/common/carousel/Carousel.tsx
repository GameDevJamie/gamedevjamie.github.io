import React, { useEffect } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import { H2 } from "../globals/typography";
import { Wrapper } from "./styles";

type Props = {
  items: Array<React.ReactNode>;
  itemsPerSlide: number;
  loop: boolean;
  autoplay: boolean;
  delay: number;

  title: string;
  onClick: () => void;
};

const Carousel = ({
  items,
  itemsPerSlide,
  loop,
  autoplay,
  delay,
  title,
  onClick,
}: Props) => {
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

  return (
    <div style={{ marginTop: "30px" }}>
      <H2 style={{ textAlign: "left", marginLeft: "20px" }}>{title}</H2>
      <Wrapper onClick={onClick} style={{ overflow: "hidden" }}>
        {carouselFragment}
      </Wrapper>
    </div>
  );
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
