import { Wrapper, Image } from "./styles";
import { useState, useEffect } from "react";
import Link from "../Link/Link";
import ApiQueryProfile from "../../services/GithubQueryProfile"

const CardBase = 
    {foto: 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png',
    nome: 'Nome Aqui',
    user: 'user',
    following: 0,
    followers: 0,
    repositories: 0,
    url: 'https://github.com'}
const ProfileCard = ({ conta }) => {
    const [Card, setCard] = useState(CardBase)

    const ConsultaApiProfile = ApiQueryProfile(conta)
    
    const DadosApi = () => {
        ConsultaApiProfile.then(
            response => setCard(
                {
                foto: response.avatar_url,
                nome: response.name,
                user: response.login,
                following: response.following,
                followers: response.followers,
                repositories: response.public_repos,
                url: response.html_url
                }
            )
        )
    }

    useEffect(() => {DadosApi()}, [])

    useEffect(() => {DadosApi()}, [conta])

    return(
        <Wrapper>
            {conta ?
            <>
                <Image>
                    <img src={Card.foto} alt="foto-user"/>
                </Image>
                <h1>{Card.nome}</h1>
                <p>@{Card.user}</p>
                <p>Seguindo: {Card.following}</p>
                <p>Seguidores: {Card.followers}</p>
                <p>Repositórios: {Card.repositories}</p>
                <Link href={Card.url} target="_blank">Visitar</Link>
            </>:
            <>
                <Image>
                <img src={CardBase.foto} alt="foto-user"/>
                </Image>
                <h1>{CardBase.nome}</h1>
                <p>@{CardBase.user}</p>
                <p>Seguindo: {CardBase.following}</p>
                <p>Seguidores: {CardBase.followers}</p>
                <p>Repositórios: {CardBase.repositories}</p>
                <Link href={CardBase.url} target="_blank">Visitar</Link>
            </>
            }
        </Wrapper>
    )
}

export default ProfileCard;