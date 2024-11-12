import { css } from "@emotion/react";

const color = {
    black: "#17171a",
    white: "#fff",
};

const font = {
    large: css`
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 0;
    `,
    medium: css`
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 0;
    `,
};

    export const Theme = {
    color,
    font,
};