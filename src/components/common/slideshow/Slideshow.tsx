import React, { useEffect } from "react";
import styled from "styled-components";
import { useTransitionCarousel } from "react-spring-carousel";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

type Props = {
  items: Array<React.ReactNode>;
  loop: boolean;
  autoplay: boolean;
  delay: number;
};

//const delay = ms => new Promise(res => setTimeout(res, ms));

const Slideshow = ({ items, loop, autoplay, delay }: Props) => {
  const { carouselFragment, slideToNextItem } = useTransitionCarousel({
    withLoop: loop,
    items: items.map((item, i) => ({
      id: "item-" + i,
      renderItem: <div style={{ height: "100%" }}>{item}</div>,
    })),
  });

  useEffect(() => {
    if (autoplay) {
      const timer = setTimeout(() => {
        slideToNextItem();
      }, delay);
      return () => {
        window.clearTimeout(timer);
      };
    }
    // You MUST add the slide methods to the dependency list useEffect!
  }, [slideToNextItem]);

  return <Wrapper>{carouselFragment}</Wrapper>;
};

Slideshow.defaultprops = {
  loop: false,
  autoplay: false,
  delay: 1000,
};

export default Slideshow;
