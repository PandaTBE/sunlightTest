import { send } from "../../utils/postRequestFunc";

export default function handler(req, res) {
    res.statusCode = 200
    send('http://jsonplaceholder.typicode.com/posts', req.body)
    res.end(JSON.stringify({ message: 'OK' }))
}