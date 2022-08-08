import { Wrapper, Image } from "./styles";
import { useState, useEffect } from "react";
import Link from "../Link/Link";
import ApiQueryProfile from "../../services/GithubQueryProfile"


const ProfileCard = ({ conta }) => {
    const ConsultaApiProfile = ApiQueryProfile(conta)
    const [Card, setCard] = useState(
        {foto: 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png',
        nome: 'Nome Aqui',
        user: 'user',
        following: 0,
        followers: 0,
        url: 'https://github.com'})
    
    const DadosApi = () => {
        ConsultaApiProfile.then(
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
        )
    }

    useEffect(() => {DadosApi()}, [])

    useEffect(() => {DadosApi()}, [conta])

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


export default ProfileCard;