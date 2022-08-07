const Base_Url = 'https://api.github.com/users/'

const ApiQueryProfile = (conta="MoreiraMatheus") => {
    console.log('buscando dados na api...')
    return(
        fetch(Base_Url + conta)
        .then(response => response.json())
    )
}

export default ApiQueryProfile