import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import styled from '@emotion/styled';
import { Theme } from '../../styles/theme';

interface NameStepProps {
    onNext: (username: string) => void;
}

const NameStep = ({ onNext }: NameStepProps) => {
    const [username, setUsername] = useState("");

    const isButtonDisabled = !username || username.length > 8;

    return (
        <>
            <Subtitle>이름</Subtitle>
            <Input
                placeholder="이름을 입력해주세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {username.length > 8 && <p style={{ color: "red" }}>이름은 8자 이하로 입력해주세요.</p>}
            <Button onClick={() => onNext(username)} disabled={isButtonDisabled}>
                다음
            </Button>
        </>
    );
};


export default NameStep;

const Subtitle = styled.h2`
    ${Theme.font.medium}
    margin-bottom: 1rem;
    color: #6c5a51;
`;