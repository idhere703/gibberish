var fs = require('fs');

// If we don't have a file.
if(process.argv.length < 3) {
  process.exit(1);
}

var file = process.argv[2];

fs.readFile(file, 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data)
});
