import { useState } from "react";
import styled from "@emotion/styled";
import Input from '../Input';
import Button from '../Button';

const Hobby = () => {
    const [userNo, setUserNo] = useState("");
    // const [hobby, setHobby] = useState("독서");

    const handleSearch = () => {
        alert(`검색`);
    };

    return (
        <Container>
            <Title>취미</Title>
            <Section>
                <Subtitle>나의 취미</Subtitle>
            </Section>
            <Section>
                <Subtitle>다른 사람들의 취미</Subtitle>
                <Input
                    placeholder="사용자 번호"
                    value={userNo}
                    onChange={(e) => setUserNo(e.target.value)}
                />
                <Button onClick={handleSearch}>검색</Button>
            </Section>
        </Container>
    );
};

export default Hobby;

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
