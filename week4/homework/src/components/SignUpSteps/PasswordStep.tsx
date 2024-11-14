import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import styled from '@emotion/styled';
import { Theme } from '../../styles/theme';
import eyeIcon from '../../assets/eye.svg';
import eyeSlashIcon from '../../assets/eye-slash.svg';

interface PasswordStepProps {
    onNext: (password: string) => void;
}

const PasswordStep = ({ onNext }: PasswordStepProps) => {
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const isButtonDisabled = !password || !checkPassword || password !== checkPassword || password.length > 8;

    const handlePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>
            <Subtitle>비밀번호</Subtitle>
            <PasswordContainer>
                <StyledInput
                    placeholder="비밀번호를 입력해주세요"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ShowButton onClick={handlePasswordVisibility}>
                    <img src={showPassword ? eyeIcon : eyeSlashIcon} alt="password visibility" />
                </ShowButton>
            </PasswordContainer>
            <Input
                placeholder="비밀번호 확인"
                type="password"
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
            />
            {password.length > 8 && <p style={{ color: "red" }}>비밀번호를 8자 이하로 입력해주세요</p>}
            {password !== checkPassword && checkPassword && (
                <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다</p>
            )}
            <Button onClick={() => onNext(password)} disabled={isButtonDisabled}>
                다음
            </Button>
        </>
    );
};

export default PasswordStep;

const Subtitle = styled.h2`
    ${Theme.font.medium}
    margin-bottom: 1rem;
    color: #6c5a51;
`;

const PasswordContainer = styled.article`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const StyledInput = styled(Input)`
    flex: 1;
`;

const ShowButton = styled.button`
    position: absolute;
    right: 0.8rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    img {
        width: 1.5rem;
        height: 1.5rem;
    }
`;