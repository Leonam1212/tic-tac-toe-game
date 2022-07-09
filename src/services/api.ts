import axios from  "axios"
import md5 from "md5"


const publicKey = "4ad73efddcd7145a43d7ec86f82c4ed7"
const privateKey = "ce22743780116f4d4cfa83703f41d263e75956e1"

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

export const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
})
