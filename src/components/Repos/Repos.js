import styled from "styled-components";
import Repository from "../Repository/Repository"
import ApiQueryRepos from "../../services/GithubQueryRepos"
import { useState } from "react";


const Repos = () => {
    const ConsultaApiRepos = ApiQueryRepos()
    const [Repos, setRepos] = useState([])
    ConsultaApiRepos.then(response => setRepos(response))
    return(
        <Wrapper>
            {Repos.length > 0 ?
                Repos.map(
                    item => <Repository key={item.name} Nome={item.name} link={item.html_url}/>
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