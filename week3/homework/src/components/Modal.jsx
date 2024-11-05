import React from 'react';
import ReactDOM from 'react-dom';
import styled from "@emotion/styled";

const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <ModalContainer>
            <ModalContent>
                {children}
                <CloseButton onClick={onClose}>닫기</CloseButton>
            </ModalContent>
        </ModalContainer>,
        document.getElementById('modal-root') // index.html에 추가
    );
};

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const ModalContent = styled.div`
    width: 15.625rem;
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: black;
`;

const CloseButton = styled.button`
    margin-top: 15px;
    padding: 8px 12px;
    cursor: pointer;
`;

export default Modal;