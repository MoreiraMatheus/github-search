import styled from "styled-components";

export const Wrapper = styled.div`
    width: 75%;
    height: 100%;
    overflow-y: scroll;

    @media (max-width: 900px) {
        width: 70%;
    }
    @media (max-width: 750px) {
        width: 60%;
    }
    @media (max-width: 500px) {
        width: 100%;
    }

    ::-webkit-scrollbar{
        width: 8px;
        background-color: #222;
    }
    ::-webkit-scrollbar-thumb{
        background-color: green;
        border-radius: 8px;
    
}
`