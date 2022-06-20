import React, { useEffect } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import { H2 } from "../globals/typography";
import { Wrapper } from "./styles";

type Props = {
  items: Array<React.ReactNode>;
  itemsPerSlide: number;
  loop: boolean;
  autoplay: boolean;

  title: string;
  onClick: () => void;
};

const Carousel = ({
  items,
  itemsPerSlide,
  loop,
  autoplay,
  title,
  onClick,
}: Props) => {
  const { carouselFragment, slideToNextItem } = getSpringCarousel(
    items,
    itemsPerSlide,
    loop
  );

  /*useEffect(() => {
    console.log("effect call");

    const timer = setInterval(() => {
      console.log("timer call");
      slideToPrevItem();
    }, 1500);
    return () => {
      clearInterval(timer);
    };
    /*
    if (autoplay) {
      const timer = setTimeout(() => {
        //slideToPrevItem();
        console.log("timer call");
      }, 1500);
      return () => {
        window.clearTimeout(timer);
        console.log("timer clear");
      };
    }
    // You MUST add the slide methods to the dependency list useEffect!
  }, []);*/

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

export default Carousel;
