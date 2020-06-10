import { client } from "./elk-client.js"
import { generate } from "../helpers/index.js"

class Document {
    constructor() { }

    addDocument(document) {
        console.log(document)
        client.index({
            index: document.index,
            id: document.id ? document.id : generate(8),
            type: document.type,
            body: document.body,
        }, (err, response, status) => {
            if (err) {
                console.error(`[ERROR on add-document index] - ${document.index}`, err)
                return
            }
            console.info('[Added] ', response)
            console.info('[add-status] ', status)
            return response
        })
    }
}

export default Document