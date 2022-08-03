import styled from "styled-components"
import { useState, useEffect } from "react";
import Link from "../Link/Link";
import BuscaApi from "../../services/GithubQueryProfile"

const ProfileCard = () => {
    const [Foto, setFoto] = useState('https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png')
    const [Nome, setNome] = useState('Nome Aqui')
    const [User, setUser] = useState('user')
    const [Seguindo, setSeguindo] = useState('0')
    const [Seguidores, setSeguidores] = useState('0')
    const [Url, setUrl] = useState('https://github.com')
    useEffect(
        ()=>{
            BuscaApi.then(response => setFoto(response.avatar_url))
            BuscaApi.then(response => setNome(response.name))
            BuscaApi.then(response => setUser(response.login))
            BuscaApi.then(response => setSeguindo(response.following))
            BuscaApi.then(response => setSeguidores(response.followers))
            BuscaApi.then(response => setUrl(response.html_url))
        }, []
    )

    return(
        <Wrapper>
            {/* trocar o caminho da imagem para utilizar o icone baixado */}
            <Image>
                <img src={Foto} alt="foto-user"/>
            </Image>
            <h1>{Nome}</h1>
            <p>@{User}</p>
            <p>Seguindo: {Seguindo}</p>
            <p>Seguidores: {Seguidores}</p>
            <Link href={Url} target="_blank">Visitar</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 0 8px;

    h1, p, a{
        margin: 4px 0;
    }

    h1{
        font-size: 1.5em;
    }
`
const Image = styled.div`
    width: 150px;
    height: 150px;
    margin: 50px auto 10px auto;
    border-radius: 50%;
    border: 3px solid #ccc;
    overflow: hidden;
    
    img{
        background-color: #ccc;
        width: 100%;
    }
`

export default ProfileCard;