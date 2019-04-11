import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center
    }
`

export const Button = styled.button`
    height: 40px;
    font-size: 20px;
    margin: 20px;    
    border: 2px solid wheat;
    outline: none;

    &:hover {
        cursor: pointer;
        background: grey;
        color: white
    }

    &:active {
        color: yellow
    }
`

export const FullTable = styled.table`
    display: flex;
    justify-content: center;
`

export const TD = styled.td`
    border: 4px solid grey;
    width: 200px;
`