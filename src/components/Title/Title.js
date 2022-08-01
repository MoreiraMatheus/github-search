import styled from "styled-components";

const Title = ({ children }) => {
    return(
        <>
            <Title1>{children}</Title1>
        </>
    )
}

const Title1 = styled.h1`
    font-size: 3em;
    font-family: Arial, Helvetica, sans-serif;
    color: green;
`


export default Title