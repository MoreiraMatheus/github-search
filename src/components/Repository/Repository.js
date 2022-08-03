import styled from "styled-components";
import { useState, useEffect } from "react";
import BuscaApi from "../../services/GithubQueryRepos"
import Link from "../Link/Link";

const Repository = ({ NumberRepo }) => {
    const [NomeRepo, setNomeRepo] = useState('Não há repositório para mostrar')
    const [LinkRepo, setLinkRepo] = useState('https://github.com')
    useEffect(
        ()=>{
            BuscaApi.then(response => setNomeRepo(response[NumberRepo].name))
            BuscaApi.then(response => setLinkRepo(response[NumberRepo].html_url))
        }, []
    )
    return(
        <Wrapper>
            <h1>{NomeRepo}</h1>
            <Link href={LinkRepo} target="_blank">Visitar</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-top: 1px solid #333;
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    h1{
        font-size: 1.6em;
    }
`

export default Repository