import { Wrapper } from "./styles";
import Repository from "../Repository/Repository"
import ApiQueryRepos from "../../services/GithubQueryRepos"
import { useState, useEffect } from "react";


const Repos = ({ conta }) => {
    const ConsultaApiRepos = ApiQueryRepos(conta)
    const [Repos, setRepos] = useState([])
    
    const DadosApi = () => {ConsultaApiRepos.then(response => setRepos(response))}

    useEffect(() => {DadosApi()}, [])

    useEffect(() => {DadosApi()}, [conta])

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

export default Repos;