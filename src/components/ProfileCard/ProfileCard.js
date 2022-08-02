import styled from "styled-components"
import Link from "../Link/Link";

const ProfileCard = () => {
    return(
        <Wrapper>
            {/* trocar o caminho da imagem para utilizar o icone baixado */}
            <Image>
                <img src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" alt="foto-user"/>
            </Image>
            <h1>Nome aqui</h1>
            <p>@User</p>
            <p>Seguindo: 00</p>
            <p>Seguidores: 00</p>
            <Link href="https://github.com/MoreiraMatheus" target="_blank">Visitar</Link>
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