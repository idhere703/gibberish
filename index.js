var fs = require('fs');

// If we don't have a file.
if(process.argv.length < 3) {
  process.exit(1);
}

let file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  // Split the array.
  data = data.replace(/\r?\n|\r/g, "");
  let gibberish = [];

});
