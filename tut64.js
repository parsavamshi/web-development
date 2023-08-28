const fs = require("fs")
let text = fs.readFileSync("dele.txt","utf-8")
text = text.replace("browser", "rohan")
console.log("The content of the file is ")

console.log(text)
console.log("hello")

console.log("creating  a new file..")
fs.writeFileSync("rohan.text", text)