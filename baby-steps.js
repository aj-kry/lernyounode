// Access command-line arguments via the global process object
const args = process.argv.slice(2);
// Calculate the sum of numbers provided as command-line arguments
const sum = args.reduce((acc, num) => acc + Number(num), 0);
// Print the sum to the console
console.log(sum);