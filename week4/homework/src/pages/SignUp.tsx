import { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import NameStep from "../components/SignUpSteps/NameStep";
import PasswordStep from '../components/SignUpSteps/PasswordStep';
import HobbyStep from '../components/SignUpSteps/HobbyStep';
import { postSignup } from '../apis/userApi';

const SignUp = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleNextStep = (value: string) => {
        if (step === 1) {
            setUsername(value);
        } else if (step === 2) {
            setPassword(value);
        }
        setStep((prev) => prev + 1);
    };

    const handleSignUp = async (hobby: string) => {
        const {success, no, code} = await postSignup(username, password, hobby);
        if (success) {
            alert(`회원가입 성공! 회원번호: ${no}`);
            navigate("/");
        } else {
            alert(`회원가입 실패: 오류 코드 ${code}`);
        }
    };

    return (
        <SignUpContainer>
            <Title>회원가입</Title>
            <InputContainer>
                {step === 1 && <NameStep onNext={handleNextStep} />}
                {step === 2 && <PasswordStep onNext={handleNextStep} />}
                {step === 3 && <HobbyStep onSubmit={handleSignUp} />}
                <LoginLinkContainer>
                    <p>이미 회원이신가요? </p>
                    <LoginLink onClick={() => navigate("/")}>로그인</LoginLink>
                </LoginLinkContainer>
            </InputContainer>
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

const InputContainer = styled.section`
    width: 100%;
`

const LoginLinkContainer = styled.article`
    display: flex;
    justify-content: center;
    gap: 0.8em;
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