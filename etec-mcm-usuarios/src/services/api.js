import axios from 'axios'

//Criando a conexão com o back
const api = axios.create({
    //aperte ctrl + espaço para ver opções
    baseURL: 'http://localhost:3000'
})
export default api