import { css } from "@emotion/react";

const color = {
    black: "#17171a",
    white: "#fff",
    pink: "#FFB0B0",
    boldPink: "#CA7373",
};

const font = {
    large: css`
        font-size: 2.4rem;
        font-weight: bold;
        line-height: 0;
    `,
    medium: css`
        font-size: 2rem;
        font-weight: 500;
        line-height: 0;
    `,
    small: css`
        font-size: 1.2rem;
    `
};

export const Theme = {
    color,
    font,
};