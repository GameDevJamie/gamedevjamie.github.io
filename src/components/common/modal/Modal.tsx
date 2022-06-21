import React from "react";
import {
  useSpring,
  useTransition,
  useChain,
  useSpringRef,
  config,
} from "react-spring";
import { AnimatedOverlay } from "../globals/common";
import { Wrapper, Container, Content } from "./styles";

type Props = {
  children: React.ReactNode;
  open: boolean;
  closeModal: () => void; //Call function when close button or overlay is clicked
};

const Modal = ({ children, open, closeModal }: Props) => {
  const modalApi = useSpringRef();
  const overlayApi = useSpringRef();
  const contentApi = useSpringRef();

  //Modal
  const transition = useTransition(open, {
    ref: modalApi,
    config: config.default,
    from: { width: "0%", height: "0%" },
    enter: { width: "100%", height: "100%" },
    leave: { width: "0%", height: "0%" },
  });

  //Overlay
  const overlayStyles = useSpring({
    ref: overlayApi,
    to: { opacity: open ? 0.5 : 0 },
  });

  const contentStyles = useSpring({
    ref: contentApi,
    to: { opacity: open ? 1 : 0 },
  });
  useChain(
    open
      ? [modalApi, overlayApi, contentApi]
      : [contentApi, overlayApi, modalApi],
    open ? [0, 0, 0.5] : [0, 0.5, 0.5]
  );

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <>
              <AnimatedOverlay style={overlayStyles} onClick={closeModal} />

              <Wrapper>
                <Container style={style}>
                  <Content style={contentStyles}>{children}</Content>
                </Container>
              </Wrapper>
            </>
          )
      )}
    </>
  );
};

export default Modal;
