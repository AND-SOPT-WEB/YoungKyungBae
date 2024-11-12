import styled from "@emotion/styled";

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

const Button = ({ children, onClick, disabled = false }: ButtonProps) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: 100%;
    padding: 0.8rem;
    background-color: #b2c39a;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1.6rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #98ad80;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export default Button;