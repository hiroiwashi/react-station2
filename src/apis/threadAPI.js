import axios from "axios";

export const fetchThreads = (offset) => {
    return axios.get(`https://railway-react-bulletin-board.herokuapp.com/threads?offset=${offset}`)
    .then(
        (res) => {
            return res.data
        }
    )
    .catch((e) => console.error(e))
}