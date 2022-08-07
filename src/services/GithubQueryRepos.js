const Base_Url = 'https://api.github.com/users/'

const ApiQueryRepos = (conta="MoreiraMatheus") => {
    console.log('buscando dados na api...')
    return(
        fetch(Base_Url + conta + "/repos")
        .then(response => response.json())
        )
    }

export default ApiQueryRepos