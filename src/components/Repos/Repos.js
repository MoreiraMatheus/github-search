import styled from "styled-components";
import Repository from "../Repository/Repository"

const Repos = () => {
    return(
        <Wrapper>
            <Repository NumberRepo={0}/>
            <Repository NumberRepo={1}/>
            <Repository NumberRepo={2}/>
            <Repository NumberRepo={3}/>
            <Repository NumberRepo={4}/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 50%;
    height: 100%;
`
export default Repos;