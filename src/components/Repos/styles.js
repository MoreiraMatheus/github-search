import styled from "styled-components";

export const Wrapper = styled.div`
    width: 50%;
    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 8px;
        background-color: #222;
    }
    ::-webkit-scrollbar-thumb{
        background-color: green;
        border-radius: 8px;
}
`