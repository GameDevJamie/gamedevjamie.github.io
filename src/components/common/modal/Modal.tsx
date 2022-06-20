import React from "react";
import { useTransition, config } from "react-spring";
import Overlay from "components/common/overlay";
import { Wrapper, Container } from "./styles";

type Props = {
  children: React.ReactNode;
  open: boolean;
  closeModal: () => void; //Call function when close button or overlay is clicked
};

//TODO: UseChain for chaining appearance of modal and displaying content
//      UseSpring instead for the modal animation
//      UseTransition for the content

const Modal = ({ children, open, closeModal }: Props) => {
  const transition = useTransition(open, {
    config: config.default,
    from: { width: "0%", height: "0%" },
    enter: { width: "100%", height: "100%" },
    leave: { width: "0%", height: "0%" },
  });

  return (
    <>
      <Overlay active={open} onClick={closeModal} />

      {transition(
        (style, item) =>
          item && (
            <Wrapper>
              <Container style={style}>{children}</Container>
            </Wrapper>
          )
      )}
    </>
  );
};

export default Modal;
