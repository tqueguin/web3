import axios from "axios"



const baseUrl = "//localhost:3001/jokes"

const getAll = () => axios.get(baseUrl).then(response => response.data)

const JokeAPI = {
  getAll
}

export default JokeAPI
