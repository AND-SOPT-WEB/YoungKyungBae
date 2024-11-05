import React from 'react'
import styled from "@emotion/styled";
import { useState, useEffect } from 'react';
import Modal from './\bModal';
// import Modal from './components/Modal';

const Game = ({nextNumber, setNextNumber, currentSet, setCurrentSet, timer, setTimer, isTimerRunning, setIsTimerRunning, resetGame, level}) => {
    const [numbers, setNumbers] = useState([]);
    const [gameData, setGameData] = useState(JSON.parse(localStorage.getItem("gameData")) ?? []);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setNumbers(randomNumbers(currentSet));
    }, [currentSet]);

    // 타이머
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

            switch (level) {
                case 'level1':
                    if(nextNumber <= 9) {
                        newNumbers[index] = getNextNumber(10, 18);
                    } else if(nextNumber <= 18) {
                        newNumbers[index] = null;
                    }
        
                    if(num === 18) endGame();
                    break;
                case 'level2':
                    if(nextNumber <= 16) {
                        newNumbers[index] = getNextNumber(17, 32);
                    } else if(nextNumber <= 32) {
                        newNumbers[index] = null;
                    }
        
                    if(num === 32) endGame();
                    break;
                case 'level3':
                    if(nextNumber <= 25) {
                        newNumbers[index] = getNextNumber(26, 50);
                    } else if(nextNumber <= 50) {
                        newNumbers[index] = null;
                    }
        
                    if(num === 50) endGame();
                    break;
                default:
                    break;
            }

            setNumbers(newNumbers);
        }

    };

    const endGame = () => {
        // alert(`게임 끝!! 기록: ${timer.toFixed(2)} 초`);
        setIsTimerRunning(false);
        setShowModal(true);
        const gameRecord = {
            timestamp: new Date().toLocaleString(),
            level: level,
            playTime: timer.toFixed(2) + "초"
        };
        const updatedGameData = [...gameData, gameRecord];
        setGameData(updatedGameData);
        localStorage.setItem('gameData', JSON.stringify(updatedGameData));
        // resetGame(level);
    };

    const getNextNumber = (start, end) => {
        // 10부터 18 중 numbers 배열에 없는 숫자만
        const availableNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i).filter(n => !numbers.includes(n));
        return randomNumbers(availableNumbers)[0];
    };

    // 그리드 크기 설정
    const gridSize = level === 'level1' ? 3 : level === 'level2' ? 4 : 5;

    const closeModal = () => {
        setShowModal(false);
        resetGame(level); // 모달을 닫을 때 게임을 초기화
    };

    return (
        <GameBoard>
            <h2>다음 숫자: {nextNumber}</h2>
            <GameButtonPlace gridSize={gridSize}>
                {numbers.map((num, index) => (
                    num !== null ? (
                        <GameButton key={index} onClick={() => numberClick(num)} level={level} num={num} data-num={num}>
                            {num}
                        </GameButton>
                    ) : (
                        <EmptyButton key={index} />
                    )
                    
                ))}
            </GameButtonPlace>
            {showModal && (
                <Modal onClose={closeModal}>
                    <h3>게임 끝!!</h3>
                    <p>기록: {timer.toFixed(2)} 초</p>
                </Modal>
            )}
        </GameBoard>
    )
}



const GameBoard = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: black;
    height: 100vh;
`

const GameButtonPlace = styled.section`
    display: grid;
    grid-template-columns: repeat(${props => props.gridSize}, 1fr);
    grid-template-rows: repeat(${props => props.gridSize}, 1fr);
    place-items: center;
    gap: 10px;
`

const GameButton = styled.button`
    width: 5rem;
    height: 5rem;
    font-size: 1.5em;
    text-align: center;
    background-color: ${({ level, num }) => {
        if (level === 'level1') {
            return num <= 9 ? '#CDC1FF' : '#A594F9';
        } else if (level === 'level2') {
            return num <= 16 ? '#CDC1FF' : '#A594F9';
        } else if (level === 'level3') {
            return num <= 25 ? '#CDC1FF' : '#A594F9';
        } else {
            return '#CDC1FF';
        }
    }};

    &:focus {
        outline: none;
        border: none;
    }

    &:active {
        opacity: 0.3;
    }

`

const EmptyButton = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
`;

export default Game


