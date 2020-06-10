import { client } from "./elk-client.js"


class Create {
    constructor() { }

    createIndice(indexName) {
        client.indices.create({
            index: indexName
        }, (err, response, status) => {
            if (err) {
                console.error(`[ERROR on create index] - ${indexName}`, err)
                return
            }
            console.info('[Created] ', response)
            console.info('[create-status] ', status)
            return response
        })
    }
}

export default Create