import styled from "styled-components"
import { useState, useEffect } from "react";
import Link from "../Link/Link";
import BuscaApi from "../../services/GithubQueryProfile"

const ProfileCard = () => {
    const [Card, setCard] = useState(
        {foto: 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png',
        nome: 'Nome Aqui',
        user: 'user',
        following: 0,
        followers: 0,
        url: 'https://github.com'})
    useEffect(
        () => {BuscaApi.then(
            response => setCard(
                {
                foto: response.avatar_url,
                nome: response.name,
                user: response.login,
                following: response.following,
                followers: response.followers,
                url: response.html_url
                }
            )
        )}, []
    )

    return(
        <Wrapper>
            <Image>
                <img src={Card.foto} alt="foto-user"/>
            </Image>
            <h1>{Card.nome}</h1>
            <p>@{Card.user}</p>
            <p>Seguindo: {Card.following}</p>
            <p>Seguidores: {Card.followers}</p>
            <Link href={Card.url} target="_blank">Visitar</Link>
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