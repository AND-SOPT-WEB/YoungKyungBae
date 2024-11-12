import { useState } from "react";
import Input from "../Input";
import Button from "../Button";

interface PasswordStepProps {
    onNext: (password: string) => void;
}

const PasswordStep = ({ onNext }: PasswordStepProps) => {
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const isButtonDisabled = !password || !checkPassword || password !== checkPassword || password.length > 8;

    return (
        <>
            <h2>비밀번호</h2>
            <Input
                placeholder="비밀번호를 입력해주세요"
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
            {password.length > 8 && <p style={{ color: "red" }}>비밀번호를 8자 이하로 입력해주세요</p>}
            {password !== checkPassword && checkPassword && (
                <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다</p>
            )}
            <Button onClick={() => onNext(password)} disabled={isButtonDisabled}>
                다음
            </Button>
        </>
    );
};

export default PasswordStep;
