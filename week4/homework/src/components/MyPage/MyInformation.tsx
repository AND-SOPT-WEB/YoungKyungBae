// src/components/MyPage/MyInformation.tsx
import styled from "@emotion/styled";
import Input from '../Input';
import Button from '../Button';
import { useState } from 'react';

const MyInformation = () => {
    const [newPassword, setNewPassword] = useState("");
    const [newHobby, setNewHobby] = useState("");

    const handleFix = () => {

    }

    return (
        <Container>
            <Title>내 정보 수정하기</Title>
            <Section>
                <Subtitle>새 비밀번호</Subtitle>
                <Input
                    placeholder=''
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
            <Button onClick={handleFix}>검색</Button>
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
    margin-bottom: 1rem;
`;

const Section = styled.article`
    margin-bottom: 2rem;
`;

const Subtitle = styled.h3`
    font-size: 1.5rem;
    color: #6c5a51;
`;
