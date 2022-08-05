import styled from "styled-components";
import Repository from "../Repository/Repository"
import BuscaApi from "../../services/GithubQueryRepos"
import { useState } from "react";

const Repos = () => {
    const [Repos, setRepos] = useState([])
    BuscaApi.then(response => setRepos(response))
    return(
        <Wrapper>
            {Repos.length > 0 ?
                Repos.map(
                    item => <Repository Nome={item.name} link={item.html_url}/>
                ):
                <Repository Nome="Não há repositórios para mostrar"/>
            }
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