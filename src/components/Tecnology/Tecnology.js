import styled from "styled-components";
import ProgLanguage from "../ProgLanguage/ProgLanguage"
const Tecnology = () => {
    return(
        <Wrapper>
            <ProgLanguage>JavaScipt</ProgLanguage>
            <ProgLanguage>HTML</ProgLanguage>
            <ProgLanguage>CSS</ProgLanguage>
            <ProgLanguage>React</ProgLanguage>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 30px;
    border-radius: 0 0 8px 0;
`

export default Tecnology