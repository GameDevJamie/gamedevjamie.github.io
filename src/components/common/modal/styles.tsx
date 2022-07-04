import styled from "styled-components";

const Modal = styled.div`
  width: auto;
  height: auto;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  border-radius: 10px;
  background: white;
  overflow: hidden;
  height: auto;
  max-height: 90%;
`;

const ModalHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
`;

const ModalFooter = styled.div``;

const ModalContent = styled.div`
  padding: 20px;
`;

export { Modal, ModalBody, ModalHeader, ModalContent, ModalFooter };
