import styled from "@emotion/styled";
import { Theme } from '../styles/theme';

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
    margin: 0.5rem 0;
    background-color: ${Theme.color.pink};
    color: ${Theme.color.white};
    border: none;
    border-radius: 4px;
    font-size: 1.6rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${Theme.color.boldPink};
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export default Button;