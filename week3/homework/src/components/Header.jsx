import React from 'react'
import styled from "@emotion/styled";

const Header = ({view, setView, timer, resetGame}) => {
    return (
        <HeaderContainer>
            <Name>1 to 50</Name>
            <SelectButton>
                <Button className='gameBtn' active={view === 'game'} onClick={() => setView('game')}>게임</Button>
                <Button className='rankBtn' active={view === 'ranking'} onClick={() => setView('ranking')}>랭킹</Button>
            </SelectButton>
            
            {view === 'game' && (
                <RightContainer>
                <select className="level" onChange={resetGame}>
                    <option value="level1">Level 1</option>
                    <option value="level2">Level 2</option>
                    <option value="level3">Level 3</option>
                </select>
                <Timer>{timer}</Timer>
                </RightContainer>
            )}
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #433878;
    box-sizing: border-box;
    height: 76px;
    margin: 0;
`;

const Name = styled.h1`
    font-size: 1.75rem;
`;

const SelectButton = styled.nav`
    display: flex;
    gap: 0.5rem;
    margin-left: 28px;
`;

const Button = styled.button`
    background-color: ${(props) => (props.active ? '#7E60BF' : 'rgb(0, 0, 0, 0)')};
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #E4B1F0;
    }

    &:focus {
        outline: none;
        border: none;
    }
`;

const RightContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: auto;
`;

const Timer = styled.div`
    color: white;
    padding: 10px;
    width: 3.125rem;
    text-align: start;
`;

export default Header