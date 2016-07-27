var fs = require('fs');

// If we don't have a file.
if(process.argv.length < 3) {
  process.exit(1);
}

console.log(process.argv);
