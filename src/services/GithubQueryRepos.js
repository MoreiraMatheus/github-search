const Base_Url = 'https://api.github.com/users/'

const ApiQueryRepos = (conta="MoreiraMatheus") => {
    return(
        fetch(Base_Url + conta + "/repos")
        .then(response => response.json())
        )
    }

export default ApiQueryRepos