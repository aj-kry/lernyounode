const myModule = require('./mymodule');
const directoryPath = process.argv[2];
const extensionFilter = process.argv[3];
myModule(directoryPath, extensionFilter, (err, files) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    files.forEach(file => {
      console.log(file);
    });
  });
