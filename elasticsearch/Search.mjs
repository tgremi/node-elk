import { client } from "./elk-client.js"

class Find {
    constructor() {

    }

    searchDocument(document){
        client.search({  
            index: 'gov',
            type: 'constituencies',
            body: {
              query: {
                match: { "ConstituencyName": "Ipswich" }
              },
            }
          }, (err, response, status) => {
            if (err) {
                console.error(`[ERROR on search index] - ${document.index}`, err)
                return
            }
            console.info('[serarch] ', response)
            console.info('[serarch-status] ', status)
            return response
          })
    }
}

export default Find