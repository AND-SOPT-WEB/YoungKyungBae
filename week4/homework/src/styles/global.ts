import { css } from "@emotion/react";
import Reset from "./reset";

const GlobalStyle = css`
    ${Reset}
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html,
    body {
        font-size: 62.5%;
        width: 100%;
        scroll-behavior: smooth;
    }
`;

export default GlobalStyle;