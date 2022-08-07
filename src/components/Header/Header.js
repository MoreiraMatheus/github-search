import styled from "styled-components";

const Header = ({ children }) => {
    return(
        <Wrapper>
            <Title>GitHub search</Title>
            <div>
                {children}
            </div>
        </Wrapper>
    )

}

const Wrapper = styled.header`
    display: flex;
    border-bottom: 1px solid white;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
`

const Title = styled.h1`
    font-size: 3em;
    font-family: Arial, Helvetica, sans-serif;
    color: green;
`

export default Header;