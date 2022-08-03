const Base_Url = 'https://api.github.com/users/MoreiraMatheus/repos'

const BuscaApi = fetch(Base_Url)
.then(response => response.json())

export default BuscaApi