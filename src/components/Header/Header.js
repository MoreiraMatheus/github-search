import { Wrapper, Title } from "./styles";

const Header = ({ children }) => {
    return(
        <Wrapper>
            <Title translate="no">GitHub search</Title>
            <div>
                {children}
            </div>
        </Wrapper>
    )

}

export default Header;