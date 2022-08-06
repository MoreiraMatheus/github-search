const Base_Url = 'https://api.github.com/users/'

const ApiQueryProfile = (conta="MoreiraMatheus") => {
    return(
        fetch(Base_Url + conta)
        .then(response => response.json())
    )
}

export default ApiQueryProfile