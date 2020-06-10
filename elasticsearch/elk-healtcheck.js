import { client } from "./elk-client.js"

client.cluster.health({}, (err, resp, status) => {
    console.info('[Health] ', resp)
    console.info('[Health-status] ', status)
    console.error('[Health-error', err)
})