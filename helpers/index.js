import crypto from "crypto"

function generate() {
    const id = crypto.randomBytes(16).toString("hex");
    return id
}

export { generate }