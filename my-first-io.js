const fs = require('fs');
// Get the file path from the command line arguments
const filePath = process.argv[2];
// Read the file synchronously and get its contents as a Buffer
const fileContent = fs.readFileSync(filePath);
// Convert the Buffer to a string and split it by newline characters
// The length of the resulting array minus 1 is the number of newlines
const newlineCount = fileContent.toString().split('\n').length - 1;
// Print the number of newlines to the console
console.log(newlineCount);