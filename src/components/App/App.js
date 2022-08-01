import GlobalStyle from "../../styles/GlobalStyle"
import Header from "../Header/Header"
import Main from "../Main/Main"
import ProfileCard from "../ProfileCard/ProfileCard"

const App = () => {
    return(
        <>
            <GlobalStyle/>
            <Header/>
            <Main>
                <ProfileCard/>
            </Main>
        </>
    )
}


export default App