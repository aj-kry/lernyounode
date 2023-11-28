const fs = require('fs');
const filePath = process.argv[2];
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Fehler beim Lesen der Datei:', err);
      return;
    }
    
    const numberOfLines = data.split('\n').length - 1;
    console.log(numberOfLines);
});
