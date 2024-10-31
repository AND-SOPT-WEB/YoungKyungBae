import React from 'react'
import styled from "@emotion/styled";
import { useState, useEffect } from 'react';

const Game = () => {
    const [numbers, setNumbers] = useState([]);
    const [nextNumber, setNextNumber] = useState(1);

    useEffect(() => {
        const initialNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
        setNumbers(randomNumbers(initialNumbers));
    }, []);

    const randomNumbers = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const nextNumbers = Array.from({ length: 9 }, (_, i) => i + 10);
    const nextSet = randomNumbers(nextNumbers);
    console.log("nextSet" + nextSet);

    const numberClick = (num) => {
        if(num === nextNumber) {
            if(num === 18) {
                setNextNumber((prev) => prev - 1);
            }

            setNextNumber((prev) => prev + 1);

            const newNumbers = [...numbers];
            const index = newNumbers.indexOf(num);

            if(nextNumber <= 9) {
                newNumbers[index] = getNextNumberInRange(10, 18);
            } else if(nextNumber <= 18) {
                newNumbers[index] = null;
            }

            setNumbers(newNumbers);
        }

    };

    const getNextNumberInRange = (start, end) => {
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
                        <GameButton key={index} onClick={() => numberClick(num)} style={{ backgroundColor: num <= 9 ? 'lightgreen' : 'darkgreen' }}>
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
    width: 30%;
    margin: auto;
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
`

const EmptyButton = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
`;

export default Game


