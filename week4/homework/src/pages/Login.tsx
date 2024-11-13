import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { postLogin } from '../apis/userApi';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const {success, token, code} = await postLogin(username, password);
        if (success) {
            localStorage.setItem("token", token);
            navigate("/mypage/hobby");
        } else {
            if (code === "01") {
                alert("비밀번호가 틀렸습니다.")
            } else {
                alert("로그인 요청 정보가 잘못되었습니다.");
            }
        }
    }

    return (
        <LoginContainer>
            <Title>로그인</Title>
            <section>
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
                <Button onClick={() => handleLogin()}>로그인</Button>
            </section>
                <SignUpLink onClick={() => navigate("/signup")}>회원가입</SignUpLink>
            {/* </section> */}
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