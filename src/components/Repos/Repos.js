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
            <Repository NumberRepo={1}/>
            <Repository NumberRepo={2}/>
            <Repository NumberRepo={3}/>
            <Repository NumberRepo={4}/>
            <Repository NumberRepo={5}/>
            <Repository NumberRepo={6}/>
            <Repository NumberRepo={7}/>
            <Repository NumberRepo={8}/>
            <Repository NumberRepo={9}/>
            <Repository NumberRepo={10}/>
            <Repository NumberRepo={11}/>
            <Repository NumberRepo={12}/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 50%;
    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 8px;
        background-color: #222;
    }
    ::-webkit-scrollbar-thumb{
        background-color: green;
        border-radius: 8px;
    }
`
export default Repos;