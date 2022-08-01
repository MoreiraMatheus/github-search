import styled from "styled-components"

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
            <a href="https://github.com/MoreiraMatheus" target="_blank">Visitar</a>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
    border-radius: 0 0 0 8px;

    h1, p, a{
        margin: 4px 0;
    }

    h1{
        font-size: 1.5em;
    }

    a{
        font-weight: bold;
        font-size: 1.2em;
        text-decoration: none;
        &:hover{
            color: green;
            transition: 0.1s;
        }
    }
`
const Image = styled.div`
    width: 150px;
    height: 150px;
    margin: 10px auto;
    border-radius: 50%;
    border: 3px solid #ccc;
    overflow: hidden;
    
    img{
        background-color: #ccc;
        width: 100%;
    }
`

export default ProfileCard;