import React, { useState } from 'react'
import styled from "@emotion/styled";

const Ranking = () => {
    const [resetData, setResetData] = useState(false);

    // const [gameData, setGameData] = useState(JSON.parse(localStorage.getItem("gameData")) ?? []);
    const gameData = JSON.parse(localStorage.getItem("gameData")) ?? [];

    const sortedData = gameData.sort((a,b) => parseFloat(a.playTime) - parseFloat(b.playTime));

    // setResetData(false);

    return (
        <main>
            <RankingContainer>
                <RankingBoard>
                    <h2>랭킹</h2>
                    <button onClick={() => {
                        localStorage.removeItem("gameData");
                        setResetData(!resetData);
                        console.log(resetData);

                        // window.location.reload();
                    }}>초기화</button>
                </RankingBoard>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>타임스탬프</th>
                            <th>레벨</th>
                            <th>플레이 시간</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((record, index) => (
                            <tr key={index}>
                                <td>{record.timestamp}</td>
                                <td>{record.level}</td>
                                <td>{record.playTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </RankingContainer>
        </main>
    )
}


const RankingContainer = styled.section`
    width: 50%;
    margin: 40px auto;
    background-color: white;
    padding: 15px 15px;
    border-radius: 5px;
`

const RankingBoard = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    width: 100%;

    h2 {
        grid-column: 2 / 3; // h2를 두 번째 열에 배치
        justify-self: center; // h2를 가운데 정렬
        color: black;
        font-size: 1.8rem;
        margin: 0;
    }

    button {
        grid-column: 3 / 4; // 버튼을 세 번째 열에 배치
        justify-self: end; // 버튼을 오른쪽 정렬
    }

`

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    color: black;

    th, td {
        border: 1px solid;
        border-color: #6482AD;
        padding: 10px 5px;
        text-align: center;
    }

    th {
        background-color: #A594F9;
        color: #fffaf8;
    }
`

export default Ranking