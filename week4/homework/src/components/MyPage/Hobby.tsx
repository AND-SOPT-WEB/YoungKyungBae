import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Input from '../Input';
import Button from '../Button';
import { getMyHobby, getUserHobby } from '../../apis/userApi';

const Hobby = () => {
    const [myHobby, setMyHobby] = useState<string | undefined>(undefined);
    const [userNo, setUserNo] = useState("");
    const [searchedHobby, setSearchedHobby] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchMyHobby = async () => {
            const { success, hobby, code } = await getMyHobby();
            if (success) {
                setMyHobby(hobby);
            } else {
                alert(code);
            }
        };
    
        fetchMyHobby();
    }, []);

    const handleSearch = async () => {
            const { success, hobby, code } = await getUserHobby(+userNo);
            if (success) {
                setSearchedHobby(hobby);
            } else {
                if (code === "01") {
                    alert(`해당 번호의 데이터가 존재하지 않습니다.`);
                }
            }
    };

    return (
        <Container>
            <Title>취미</Title>
            <Section>
                <Subtitle>나의 취미</Subtitle>
                <HobbyInfo>{myHobby}</HobbyInfo>
            </Section>
            <Section>
                <Subtitle>다른 사람들의 취미</Subtitle>
                <Input
                    placeholder="사용자 번호"
                    value={userNo}
                    onChange={(e) => setUserNo(e.target.value)}
                />
                <Button onClick={() => handleSearch()}>검색</Button>
                {searchedHobby != null && <HobbyInfo>{userNo}번 사용자의 취미: {searchedHobby}</HobbyInfo>}
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
    font-weight: bold;
    margin-bottom: 1rem;
`;

const Section = styled.article`
    margin-bottom: 2rem;
`;

const Subtitle = styled.h3`
    font-size: 1.7rem;
    font-weight: bold;
    color: #6c5a51;
`;

const HobbyInfo = styled.p`
    font-size: 1.5rem;
`