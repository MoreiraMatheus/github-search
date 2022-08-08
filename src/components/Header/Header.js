import { Wrapper, Title } from "./styles";

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

export default Header;