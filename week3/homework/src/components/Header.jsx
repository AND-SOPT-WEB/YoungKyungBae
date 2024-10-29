import React from 'react'
import styled from "@emotion/styled";

const Header = ({view, setView}) => {
    return (
        <HeaderContainer>
            <Name>1 to 50</Name>
            <GameButton>
                <Button className='gameBtn' active={view === 'game'} onClick={() => setView('game')}>게임</Button>
                <Button className='rankBtn' active={view === 'ranking'} onClick={() => setView('ranking')}>랭킹</Button>
            </GameButton>
            
            {view === 'game' && (
                <RightContainer>
                <select className="level">
                    <option value="level1">Level 1</option>
                    <option value="level2">Level 2</option>
                    <option value="level3">Level 3</option>
                </select>
                <Timer>00:00</Timer>
                </RightContainer>
            )}
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #6482AD;
    box-sizing: border-box;
    width: 100%;
`;

const Name = styled.h1`
    font-size: 1.75rem;
`;

const GameButton = styled.nav`
    display: flex;
    gap: 0.5rem;
    margin-left: 28px;
`;

const Button = styled.button`
    background-color: ${(props) => (props.active ? '#083e75' : 'rgb(0, 0, 0, 0)')};
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #083e75;
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
`;

export default Header