import React from 'react'
import styled from "@emotion/styled";
import { useState, useEffect } from 'react';

const Game = ({nextNumber, setNextNumber, currentSet, setCurrentSet, timer, setTimer, isTimerRunning, setIsTimerRunning, resetGame}) => {
    const [numbers, setNumbers] = useState([]);
    const [gameData, setGameData] = useState(JSON.parse(localStorage.getItem("gameData")) ?? []);

    useEffect(() => {
        setNumbers(randomNumbers(currentSet));
    }, [currentSet]);

    useEffect(() => {
        let interval = null;

        if(isTimerRunning) {
            interval = setInterval(() => {
                setTimer((prev) => +(prev + 0.01).toFixed(2)); // 소수점 2자리
            }, 50); // 10ms 마다 업데이트
        } else if(!isTimerRunning && timer !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [isTimerRunning]);

    const randomNumbers = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const numberClick = (num) => {
        if(num === nextNumber) {

            if(num === 1) {
                setIsTimerRunning(true);
            }

            setNextNumber((prev) => prev + 1);

            // 복사하고 setNumbers를 해주지 않으면 반영이 안됨.
            const newNumbers = [...numbers];
            const index = newNumbers.indexOf(num);

            if(nextNumber <= 9) {
                newNumbers[index] = getNextNumber(10, 18);
            } else if(nextNumber <= 18) {
                newNumbers[index] = null;
            }

            if(num === 18) {
                alert(`게임 끝!! 기록: ${timer.toFixed(2)} 초`);

                const gameRecord = {
                    timestamp: new Date().toLocaleString(),
                    level: "level 1",
                    playTime: timer.toFixed(2) + "초"
                };
                const updatedGameData = [...gameData, gameRecord];
                setGameData(updatedGameData);
                localStorage.setItem('gameData', JSON.stringify(updatedGameData));

                resetGame();
            }

            setNumbers(newNumbers);
        }

    };

    const getNextNumber = (start, end) => {
        // 10부터 18 중 numbers 배열에 없는 숫자만
        const availableNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i).filter(n => !numbers.includes(n));
        return randomNumbers(availableNumbers)[0];
    };

    return (
        <GameBoard>
            <h2>다음 숫자: {nextNumber}</h2>
            <GameButtonPlace>
                {numbers.map((num, index) => (
                    num !== null ? (
                        <GameButton key={index} onClick={() => numberClick(num)} style={{ backgroundColor: num <= 9 ? '#CDC1FF' : '#A594F9' }}>
                            {num}
                        </GameButton>
                    ) : (
                        <EmptyButton key={index} />
                    )
                    
                ))}
            </GameButtonPlace>
        </GameBoard>
    )
}



const GameBoard = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: black;
`

const GameButtonPlace = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    place-items: center;
    gap: 10px;
`

const GameButton = styled.button`
    width: 100px;
    height: 100px;
    font-size: 1.5em;
`

const EmptyButton = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
`;

export default Game


