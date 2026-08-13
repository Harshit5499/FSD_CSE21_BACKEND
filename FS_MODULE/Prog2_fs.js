const fs = require("fs");

//Create File
fs.writeFileSync("student.txt", "Name: Harshit\nRoll No: 545",cb)
console.log("File created successfully");

//Read file
let data = fs.readFileSync("student.txt", "utf-8", cb);
console.log("\nFile Content:");
console.log(data);

//Update file
fs.appendFileSync("student.txt", "\nBranch: CSE");
console.log("\nFile updated successfully"); 
