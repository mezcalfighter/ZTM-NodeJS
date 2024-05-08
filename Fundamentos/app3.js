// Write file
const fs = require("fs")
const content = fs.readFileSync("README.md","utf8")

const wordCount = content.split(" ")
console.log("Palabras: ",wordCount.length)

const reactWordCount = wordCount.filter((word) => word.toLowerCase().includes("react")).length
console.log("React Palabras: ",reactWordCount)