import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
    }

    html {
        font-size: 62.5%;
        font-family: "Montserrat", serif;
        font-optical-sizing: auto;
        font-style: normal;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
    }

    input {
        border: none;
    }

    h1 {
        font-size: 8rem;
    }
`;
