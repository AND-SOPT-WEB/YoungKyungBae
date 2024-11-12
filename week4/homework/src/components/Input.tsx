import styled from "@emotion/styled";

interface InputProps {
    type?: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type = "text", placeholder, value, onChange }: InputProps) => {
    return (
        <StyledInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

const StyledInput = styled.input`
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1.6rem;
`;

export default Input;