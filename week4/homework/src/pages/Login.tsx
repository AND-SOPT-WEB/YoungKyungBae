import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LoginContainer>
            <Title>로그인</Title>
            <Input
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={() => alert("로그인 시도")}>로그인</Button>
            <SignUpLink onClick={() => navigate("/signup")}>회원가입</SignUpLink>
        </LoginContainer>
    );
};

const LoginContainer = styled.main`
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

const SignUpLink = styled.article`
    margin-top: 1rem;
    color: #B7B7B7;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
        color: #5e479e;
    }
`;

export default Login;