import styled from "styled-components";
import Repository from "../Repository/Repository"
import BuscaApi from "../../services/GithubQueryRepos"
import { useState } from "react";

const Repos = () => {
    const [ComprimentoRepos, setComprimentoRepos] = useState(0)
    BuscaApi.then(response => console.log(response))
    return(
        <Wrapper>
            <Repository NumberRepo={0}/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 50%;
    height: 100%;
`
export default Repos;