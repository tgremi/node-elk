import elasticsearch from "elasticsearch"
import dotenv from "dotenv"

dotenv.config()

const client = new elasticsearch.Client({ node: `http://${process.env.ELK_HOST}:${process.env.ELK_PORT}/` })

export { client }