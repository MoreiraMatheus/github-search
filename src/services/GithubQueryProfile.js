const Base_Url = 'https://api.github.com/users/'

const BuscaApi = fetch(Base_Url + "MoreiraMatheus")
.then(response => response.json())

export default BuscaApi