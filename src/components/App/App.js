import GlobalStyle from "../../styles/GlobalStyle"
import Header from "../Header/Header"
import Main from "../Main/Main"
import ProfileCard from "../ProfileCard/ProfileCard"
import ReposWrapper  from "../ReposWrapper/ReposWrapper"
import Repository from "../Repository/Repository"
import TecnologyWrapper from "../TecnologyWrapper/TecnologyWrapper"
import Tecnology from "../Tecnology/Tecnology"

const App = () => {
    return(
        <>
            <GlobalStyle/>
            <Header/>
            <Main>
                <ProfileCard/>
                <ReposWrapper>
                    <Repository NumberRepo={0}/>
                    <Repository NumberRepo={1}/>
                    <Repository NumberRepo={2}/>
                    <Repository NumberRepo={3}/>
                    <Repository NumberRepo={4}/>
                </ReposWrapper>
                <TecnologyWrapper>
                    <Tecnology>JavaScipt</Tecnology>
                    <Tecnology>HTML</Tecnology>
                    <Tecnology>CSS</Tecnology>
                    <Tecnology>React</Tecnology>
                </TecnologyWrapper>
            </Main>
        </>
    )
}


export default App