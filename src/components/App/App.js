import { useState } from "react";
import GlobalStyle from "../../styles/GlobalStyle"
import Header from "../Header/Header"
import Find from "../Find/Find";
import Button from "../Button/Button";
import Main from "../Main/Main"
import ProfileCard from "../ProfileCard/ProfileCard"
import Repos from "../Repos/Repos"

const App = () => {
    const [Search, setSearch] = useState('')
    const [ContaGithub, setContaGithub] = useState("MoreiraMatheus")
    
    return(
        <>
            <GlobalStyle/>
            <Header>
                <Find onChange={e => {
                    setSearch(e.target.value)
                }} placeholder="usuário"/>
                <Button callack={() => {
                    setContaGithub(Search)
                }}>Buscar</Button>
            </Header>
            <Main>
                <ProfileCard conta={ContaGithub}/>
                <Repos conta={ContaGithub}/>
            </Main>
        </>
    )
}


export default App