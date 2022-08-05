import styled from "styled-components";

const ProgLanguage = ({children}) => {
    return(
        <Wrapper>
            <span>{children}</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 30px;
    border-radius: 15px;

    span{
        background-color: inherit;
        font-weight: bold;
        font-size: 1.2em;
    }
`
export default ProgLanguage