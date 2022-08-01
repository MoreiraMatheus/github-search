import Title from "../Title/Title"
import styled from "styled-components";
import Button from "../Button/Button";

const Header = () => {
    
    return(
        <Wrapper> 
            <Title>GitHub search</Title>
            <div>
                <Busca></Busca>
                <Button>Buscar</Button>
            </div>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid white;
`

const Busca = styled.input`
    border: 2px solid white;
    border-radius: 8px;
    color: green;
    padding: 4px;
    margin: 4px;
    outline: none;
    width: 150px;
    height: 30px;
`

export default Header;