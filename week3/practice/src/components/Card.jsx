import styled from "@emotion/styled";
import { useState } from 'react';

const Card = ({name, enName, github}) => {
    const [like, setLike] = useState(0);

    return <Wrapper>
        <h1>{name}</h1>
        <h2>{enName}</h2>
        <h3>{github}</h3>
        <p>{like}</p>
        <button onClick={() => 
            {setLike((prev) => prev + 1)}
            // {setLike(like+ 1)}
        }>좋아요</button>
    </Wrapper>
};

export default Card;

const Wrapper = styled.div`
    border: 1px solid;
    padding: 80px 80px;
    border-radius: 10px;
    margin: 10px 10px;

`
