import styled from "styled-components";
import Link from "../Link/Link";

const Repository = ({ Nome='Nome não encontrado', link }) => {
    return(
        <Wrapper>
            <h1>{Nome}</h1>
            {link ? <Link href={link} target="_blank">Visitar</Link> : null}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-top: 1px solid #333;
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    h1{
        font-size: 1.6em;
    }
`

export default Repository