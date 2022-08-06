import axios from "axios";
import { BASEURL } from "./constants";

export const fetchThreads = (offset) => {
    return axios.get(BASEURL+`threads?offset=${offset}`)
    .then(
        (res) => {
            return res.data
        }
    )
    .catch((e) => console.error(e))
}

export const postThreads = (title) => {
    return axios.post(BASEURL+"threads",title)
    .then(
        (res) => {
            return res.data
        }
    )
    .catch((e) => console.error(e))
}