import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
} from "components/common/modal";
import { AnimatedOverlay } from "components/common/globals/common";
import {
  useTransition,
  useSpring,
  useChain,
  useSpringRef,
  animated,
  config,
} from "react-spring";

type Props = {
  children: React.ReactNode;
  open: boolean;
  title: string;
  closeModal: () => void;
};
const BasicModal = ({ open, title, closeModal, children }: Props) => {
  const modalApi = useSpringRef();
  const overlayApi = useSpringRef();
  const contentApi = useSpringRef();

  //Modal
  const transition = useTransition(open, {
    ref: modalApi,
    config: config.default,
    from: { width: "0%" },
    enter: { width: "100%" },
    leave: { width: "0%" },
  });

  //Overlay
  const overlayStyles = useSpring({
    ref: overlayApi,
    to: { opacity: open ? 0.5 : 0 },
  });

  const contentStyles = useSpring({
    ref: contentApi,
    from: { opacity: open ? 0 : 1 },
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
              <Modal>
                <animated.div style={style}>
                  <ModalBody>
                    <ModalHeader>{title}</ModalHeader>
                    <animated.div style={contentStyles}>
                      <ModalContent>{children}</ModalContent>
                    </animated.div>
                  </ModalBody>
                </animated.div>
              </Modal>
            </>
          )
      )}
    </>
  );
};

export { BasicModal };
