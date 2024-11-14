// src/components/MyPage/MyInformation.tsx
import styled from "@emotion/styled";
import Input from '../Input';
import Button from '../Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { putUserInfo } from '../../apis/userApi';

const MyInformation = () => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");
    const [newHobby, setNewHobby] = useState("");

    const handleChange = async () => {
        if (!newPassword && !newHobby) {
            alert("변경할 비밀번호나 취미를 입력해주세요.");
            return;
        }

        const updateData: { hobby?: string; password?: string } = {};
        if (newPassword) updateData.password = newPassword;
        if (newHobby) updateData.hobby = newHobby;

        const { success } = await putUserInfo(updateData);

        if (success) {
            alert("정보 수정에 성공했습니다.");
            localStorage.removeItem("token");
            navigate("/");
        } else {
            alert("hobby 혹은 password 길이가 8자를 넘겼는지 확인해주세요.")
        }
    };

    return (
        <Container>
            <Title>내 정보 수정하기</Title>
            <Section>
                <Subtitle>새 비밀번호</Subtitle>
                <Input
                    placeholder=''
                    type='password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </Section>
            <Section>
                <Subtitle>새 취미</Subtitle>
                <Input
                    placeholder=''
                    value={newHobby}
                    onChange={(e) => setNewHobby(e.target.value)}
                />
            </Section>
            <Button onClick={handleChange}>수정하기</Button>
        </Container>
    );
};

export default MyInformation;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const Section = styled.article`
    margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
    font-size: 1.7rem;
    font-weight: bold;
    color: #6c5a51;
`;
