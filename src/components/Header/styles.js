import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    border-bottom: 1px solid white;
    width: 100vw;
    justify-content: space-around;
    align-items: center;

    @media(max-width: 600px){
        flex-direction: column;
    }
`

export const Title = styled.h1`
    font-size: 3em;
    font-family: Arial, Helvetica, sans-serif;
    color: green;
`