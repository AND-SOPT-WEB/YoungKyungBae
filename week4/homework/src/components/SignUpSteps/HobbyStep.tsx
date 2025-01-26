import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import styled from '@emotion/styled';
import { Theme } from '../../styles/theme';

interface HobbyStepProps {
    onSubmit: (hobby: string) => void;
}

const HobbyStep = ({ onSubmit }: HobbyStepProps) => {
    const [hobby, setHobby] = useState("");

    const isButtonDisabled = !hobby || hobby.length > 8;

    return (
        <>
            <Subtitle>취미</Subtitle>
            <Input
                placeholder="취미를 입력해주세요"
                value={hobby}
                onChange={(e) => setHobby(e.target.value)}
            />
            {hobby.length > 8 && <p style={{ color: "red" }}>취미는 8자 이하로 입력해주세요</p>}
            <Button onClick={() => onSubmit(hobby)} disabled={isButtonDisabled}>
                회원가입
            </Button>
        </>
    );
};

export default HobbyStep;

const Subtitle = styled.h2`
    ${Theme.font.medium}
    margin-bottom: 1rem;
    color: #6c5a51;
`;