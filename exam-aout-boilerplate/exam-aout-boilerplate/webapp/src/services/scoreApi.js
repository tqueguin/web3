import axios from "axios"



const baseUrl = "//localhost:3001/scores"

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = (scorePayload) => axios.post(baseUrl, scorePayload).then(response => response.data)

const ScoreAPI = {
  getAll,
  create
}

export default ScoreAPI
