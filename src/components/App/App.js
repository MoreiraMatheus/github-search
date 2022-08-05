import GlobalStyle from "../../styles/GlobalStyle"
import Header from "../Header/Header"
import Main from "../Main/Main"
import ProfileCard from "../ProfileCard/ProfileCard"
import Repos from "../Repos/Repos"
import Tecnology from "../Tecnology/Tecnology"

const App = () => {
    return(
        <>
            <GlobalStyle/>
            <Header/>
            <Main>
                <ProfileCard/>
                <Repos/>
                {/* <Tecnology/> */}
            </Main>
        </>
    )
}


export default App