import { client } from "./elk-client.js"

class Delete {
    constructor() { }

    deleteIndice(indexName) {
        client.indices.delete({
            index: indexName,
        }, (err, response, status) => {
            if (err) {
                console.error(`[ERROR on delete index] - ${indexName}`, err)
                return
            }
            console.info('[Deleted] ', response)
            console.info('[delete-status] ', status)
            return response
        })
    }

    deleteDocument(document) {
        client.delete({
            index: document.index,
            id: document.id,
            type: document.type
        }, (err, response, status) => {
            if (err) {
                console.error(`[ERROR on delete index] - ${document.index}`, err)
                return
            }
            console.info('[Deleted] ', response)
            console.info('[delete-status] ', status)
            return response
        })
    }
}

export default Delete