import React, { useState } from "react";
import { useSpring, useTransition, config } from "react-spring";
import { Box, Container } from "./styles";
import Overlay from "components/common/overlay";

type Props = {
  sizePx: number;
  children: React.ReactNode;
};
const ModalBox = ({ sizePx, children }: Props) => {
  const [open, setOpen] = useState(false);

  const style = useSpring({
    config: config.stiff,
    from: { transform: "scale(1)", background: "hotpink" },
    to: {
      transform: open ? "scale(0)" : "scale(1)",
      background: open ? "grey" : "hotpink",
    },
  });

  const transition = useTransition(open, {
    config: config.default,
    from: { width: "0%", height: "0%" },
    enter: { width: "50%", height: "90%" },
    leave: { width: "0%", height: "0%" },
  });

  return (
    <>
      <Box
        size={sizePx + "px"}
        style={style}
        onClick={() => setOpen(true)}
      ></Box>
      <Overlay active={open} onClick={() => setOpen(false)} />

      {transition(
        (style, item) =>
          item && (
            <Container style={style} onClick={() => setOpen(false)}>
              {children}
            </Container>
          )
      )}
    </>
  );
};

export { ModalBox };
