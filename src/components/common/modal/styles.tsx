import styled from "styled-components";
import { theme } from "utils/theme";
import { mediaMin } from "utils/functions";

const Modal = styled.div`
  width: auto;
  height: 98%;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaMin(theme.device.breakPoints.tablet)} {
    height: 90%;
  }
`;

const ModalBody = styled.div`
  border-radius: 10px;
  background: white;
  overflow: hidden;
  height: auto;
  max-height: 90%;
`;

const ModalHeader = styled.div`
  border-bottom: 1px solid black;
`;

const ModalFooter = styled.div``;

const ModalContent = styled.div`
  padding: 20px;
`;

export { Modal, ModalBody, ModalHeader, ModalContent, ModalFooter };
