import { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUp = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const handleNextStep = () => {
        setStep((prev) => prev + 1);
        // if (step === 1) {
        //     setStep(2);
        // }
    };

    const handlePassword = () => {
        if (password === checkPassword) {
            return false;
        } else {
            return true;
        }
    };

    return (
        <SignUpContainer>
            <Title>회원가입</Title>
            {step === 1 && (
                <>
                <Input
                    placeholder="이름"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <ErrorText>{username.length > 8 && "이름은 8자 이하로 입력해주세요."}</ErrorText>
                <Button
                    onClick={handleNextStep}
                    disabled={!username || username.length > 8}
                >
                다음
                </Button>
                </>
            )}
            {step === 2 && (
                <>
                <Input 
                    placeholder="비밀번호" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Input
                    placeholder="비밀번호 확인"
                    type="password"
                    value={checkPassword}
                    onChange={(e) => setCheckPassword(e.target.value)}
                />
                <Button onClick={handleNextStep} disabled={handlePassword()}>다음</Button>
                </>
            )}
            <LoginLinkContainer>
                <p>이미 회원이신가요? </p>
                <LoginLink onClick={() => navigate("/")}>로그인</LoginLink>
            </LoginLinkContainer>
        </SignUpContainer>
    );
};

const SignUpContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 100px auto;
`;

const Title = styled.h1`
    font-size: 2.4rem;
    margin-bottom: 2rem;
`;

const ErrorText = styled.article`
    color: red;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const LoginLinkContainer = styled.article`
    display: flex;
    margin-top: 1rem;

`

const LoginLink = styled.article`
    color: #AB886D;
    cursor: pointer;
    &:hover {
        color: #9A7E6F;
    }
`;

export default SignUp;