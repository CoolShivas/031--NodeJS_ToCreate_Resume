const fs = require("fs");
const path = require("path");


const resuPath = path.join(__dirname, "resume.txt");
const resuContent = fs.readFileSync(resuPath, "utf-8");
console.log(resuContent);